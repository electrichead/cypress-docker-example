module.exports = {
  scripts: {
    ng: 'nx',
    nx: 'nx',
    default: 'ng serve',
    build: 'ng build',
    test: 'ng test',
    lint: 'nx workspace-lint && ng lint',
    e2E: 'ng e2e',
    cypress:
      'cd apps/testapp-e2e && cross-env CYPRESS_REMOTE_DEBUGGING_PORT=9223 cypress open',
    affected: {
      apps: 'nx affected:apps',
      libs: 'nx affected:libs',
      build: 'nx affected:build',
      e2E: 'nx affected:e2e',
      test: 'nx affected:test',
      lint: 'nx affected:lint',
      depGraph: 'nx affected:dep-graph',
      default: 'nx affected',
    },
    format: {
      default: 'nx format:write',
      write: 'nx format:write',
      check: 'nx format:check',
    },
    workspaceSchematic: 'nx workspace-schematic',
    depGraph: 'nx dep-graph',
    help: 'nx help',
  },
};
