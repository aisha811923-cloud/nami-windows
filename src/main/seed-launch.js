// Use each CLI's interactive initial-message interface. These options keep
// startup questions and subsequent conversation under the CLI's control.
const { KNOWN_AGENTS, agentRunCommandAllowed } = require('./agents-detect');

function seedAgentForLaunch({ kind, command, agentId, args, watchDone, oneShot } = {}) {
  if (watchDone || oneShot) return null;
  if (kind === 'claude') return 'claude';
  if (kind !== 'run') return null;
  const bare = KNOWN_AGENTS.find(a => a.bin === command);
  if (bare) return bare.id;
  // Library-agent launches have a quoted --agent argument. Lifecycle commands
  // also pass the credential check, but must never receive an initial message.
  if (['opencode', 'antigravity'].includes(agentId) && Array.isArray(args)
    && args.length === 2 && args[0] === '--agent'
    && agentRunCommandAllowed({ agentId, command, args })) return agentId;
  return null;
}

function initialPromptArgs(agentId, seed) {
  if (typeof seed !== 'string' || !seed || seed.includes('\0')) return [];
  switch (agentId) {
    case 'claude': case 'codex': case 'grok': return ['--', seed];
    case 'opencode': return ['--prompt=' + seed];
    case 'antigravity': return ['--prompt-interactive=' + seed];
    // Their --prompt / --query options exit after one reply, so these agents
    // use the one-time terminal sender instead of being made non-interactive.
    default: return [];
  }
}

module.exports = { seedAgentForLaunch, initialPromptArgs };
