import { BrowserCheck } from 'checkly/constructs'

new BrowserCheck('cdu-job-board', {
  name: 'CDU Job Board - Available Vacancies',
  frequency: 10,
  locations: ['ap-southeast-2'],
  intent: {
    goal: 'Verify the CDU job board is accessible and displays available job vacancies.',
    constraints: [
      { type: 'REQUIRED_OUTCOME', statement: 'Navigating from the CDU careers page to the job board shows the Available Jobs heading.' },
      { type: 'REQUIRED_OUTCOME', statement: 'The job board displays a count of available jobs confirming listings have loaded.' },
      { type: 'MUST_PRESERVE', statement: 'The check navigates from cdu.edu.au/careers-cdu through the CDU job opportunities link, not directly to the TechnologyOne URL.' },
    ],
  },
  code: { entrypoint: './cdu-job-board.spec.ts' },
})
