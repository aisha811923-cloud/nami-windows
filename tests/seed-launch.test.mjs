import test from 'node:test';
import assert from 'node:assert/strict';
import seedLaunch from '../src/main/seed-launch.js';
const { initialPromptArgs, seedAgentForLaunch } = seedLaunch;
const seed = "--not-a-flag\nO'Brien $(touch /tmp/unwanted) `echo no`\n" + 'Long description. '.repeat(400);

test('interactive initial messages preserve long multiline text as one argument', () => {
  for (const id of ['claude', 'codex', 'grok']) assert.deepEqual(initialPromptArgs(id, seed), ['--', seed]);
  assert.deepEqual(initialPromptArgs('opencode', seed), ['--prompt=' + seed]);
  assert.deepEqual(initialPromptArgs('antigravity', seed), ['--prompt-interactive=' + seed]);
});
test('agents without interactive initial-message flags never get a headless flag', () => {
  for (const id of ['kimi', 'hermes', 'unknown']) assert.deepEqual(initialPromptArgs(id, seed), []);
});
test('only actual agent launches receive generated messages, never setup or compound commands', () => {
  assert.equal(seedAgentForLaunch({ kind: 'claude' }), 'claude');
  assert.equal(seedAgentForLaunch({ kind: 'run', command: 'codex' }), 'codex');
  assert.equal(seedAgentForLaunch({ kind: 'run', command: "opencode '--agent' 'reviewer'", args: ['--agent', 'reviewer'], agentId: 'opencode' }), 'opencode');
  for (const command of ['codex login', 'codex; echo no', 'echo codex', 'hermes setup']) {
    assert.equal(seedAgentForLaunch({ kind: 'run', command, agentId: 'codex' }), null);
  }
  assert.equal(seedAgentForLaunch({ kind: 'run', command: 'codex', watchDone: true }), null);
  assert.equal(seedAgentForLaunch({ kind: 'shell', command: 'codex' }), null);
});
