This is Q&A App built with NextJS, React, TS and a lot of passion.

## Set Up

1. Please go to the root directory and run `npm i`
2. Then go to the /backend directory and run `npm i`
3. In the /backend directory run `node server.js `
4. Open a new terminal and go to the root directory and run `npm run dev`
5. In the browser open http://localhost:3000/
6. To run unit tests run ` npm run test utils.test.ts`
7. To run e2e tests run:

- `npm run build`
- `npm run dev`
- `npx playwright test`

Note: Node.js version >= v18.17.0 is required. You can run `sudo n latest` to install the latest version.

## Extra Miles

1. Mock express server (a simple version, no DB)
2. Fields validation (ensures questions are not created with empty fields)
3. The sort button has two options: chronological and alphabetical (not just alphabetical as required)
4. Responsive layout on all screens starting from 350px to large desktops
5. Empty questions fallback UI
6. Suspense for loading questions
7. Prettier to improve code formatting

## Next Steps

1. Preserve sorting mode on adding new questions;
2. Add the error pages;
3. Introduce the authorization and a concept of a user to connect questions to users and secure routes;
4. Add more tests: I added just a few unit and e2e tests since I did not have the time to add more, but I would be glad to discuss the testing strategy or even write a few more on our meeting;
5. Add metrics&logs for events like a question creation, editing, removal;
6. Add pagination if the metrics tell us that our users love long lists;
7. Introduce ESLint rules to strengthen the code quality and accessibility.
8. Improve UX for: modals, pending state etc.
