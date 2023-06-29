import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotOnRunFailure: false,
    watchForFileChanges: true,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    video: false,
    screenshotOnRunFailure: false,
    experimentalSingleTabRunMode: true,
  },
})
