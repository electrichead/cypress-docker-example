module.exports = {
  scripts: {
    ng: 'nx',
    nx: 'nx',
    default: 'nx serve --host 0.0.0.0 --disableHostCheck --port=4200',
    build: 'ng build',
    test: 'ng test',
    lint: 'nx workspace-lint && ng lint',
    e2E: 'ng e2e',
    cypress: {
      default: {
        script:
          'cd apps/testapp-e2e && cross-env CYPRESS_REMOTE_DEBUGGING_PORT=9223 cypress open --config baseUrl=http://localhost:4200',
        description: 'Open cypress UI',
      },
      rebuild:
        'docker build -t cypress-docker -f ./cypress-docker.dockerfile .',
      headless: {
        script:
          'docker run --rm -it -v $PWD/apps/testapp-e2e:/e2e -w /e2e -p "4200:4200" cypress-docker:latest --config-file=cypress-docker.json',
        description: 'Run tests headless',
      },
    },
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
