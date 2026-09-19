const fs = require('fs');
const os = require('os');
const path = require('path');

// Select before Electron initializes storage. Never reuse a review directory,
// and never claim ownership of a directory supplied by the caller.
function createReviewProfile({ argv, normalPath, packaged, reviewBuild = false, homePath = os.homedir() }) {
  const persistent = reviewBuild || argv.includes('--review');
  const review = persistent || argv.some((arg) => arg === '--review' || arg === '--demo' || arg === '--screenshot'
    || arg.startsWith('--scene=') || arg.startsWith('--theme='));
  const index = argv.indexOf('--user-data');
  const explicit = index >= 0 && argv[index + 1];
  const isPosixHome = typeof homePath === 'string' && homePath.startsWith('/');
  // A review profile on Desktop makes even background cache/settings activity
  // request protected-folder access. Reject that developer launch configuration
  // before Electron opens storage; never probe or migrate protected files here.
  if (review && explicit) {
    const target = path.resolve(explicit);
    if (['Desktop', 'Documents', 'Downloads'].some(name => {
      const protectedPath = path.resolve(path.join(homePath, name));
      return target === protectedPath || target.startsWith(protectedPath + path.sep);
    })) throw new Error('Review data must be outside Desktop, Documents and Downloads. Use --review without --user-data for a persistent Application Support profile.');
  }
  const owned = review && !persistent && !explicit;
  const directory = explicit ? (isPosixHome ? explicit : path.resolve(explicit))
    : persistent ? (isPosixHome ? path.posix.join(homePath, 'Library', 'Application Support', 'Nami Review') : (process.platform === 'win32' ? path.join(process.env.APPDATA || path.join(homePath, 'AppData', 'Roaming'), 'Nami Review') : path.join(homePath, 'Library', 'Application Support', 'Nami Review')))
      : owned ? fs.mkdtempSync(path.join(os.tmpdir(), 'nami-review-'))
      : normalPath + (packaged ? '' : '-dev');
  return {
    review,
    path: directory,
    cleanup() {
      if (owned) {
        try {
          fs.rmSync(directory, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
        } catch (_) {}
      }
    },
  };
}

module.exports = { createReviewProfile };
