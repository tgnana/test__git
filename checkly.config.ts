import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'test__git',
  logicalId: 'test--git',
  checks: {
    locations: ['ap-southeast-2'],
    checkMatch: '**/*.check.ts',
    browserChecks: { testMatch: '**/*.spec.ts' },
  },
})
