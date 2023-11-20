## Customer Dashboard

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installation

This project has been tested on node versions 18.16.1 and 20.9.0. To install the project, run the following command:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/home?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkY2U5ZDFkZi05ZTMwLTRkMGItYmZiOC03NzljYTBkYzYyMjIiLCJpYXQiOjE2ODkxOTEzOTB9.OJqlLRWenfRNAMTUNe-QnPGx0dEZYfOjErcr1v46-oM](http://localhost:3000/home?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkY2U5ZDFkZi05ZTMwLTRkMGItYmZiOC03NzljYTBkYzYyMjIiLCJpYXQiOjE2ODkxOTEzOTB9.OJqlLRWenfRNAMTUNe-QnPGx0dEZYfOjErcr1v46-oM) with your browser to see the customer dashboard for an example user, which should look like this:

![customer dashboard](src/assets/existing-design.png)

## Tests

There are playwright end to end tests implemented in the `test/test-packs.spec.js` file. Run `npm run test` to run all of these tests from the command line. You can also run the tests from the playwright UI with `npm run test-ui`, which can make it easier to debug why a test isn't working.

## Task

The task is to update the look of the home page so that it matches this Figma design [https://www.figma.com/file/4QhJtbfjB2iVh3wbKGkljp/Choose-Your-Horizon-Dashboard-(Copy)?type=design&node-id=0%3A1&mode=design&t=ZN6FUtOceadQzqwy-1](https://www.figma.com/file/4QhJtbfjB2iVh3wbKGkljp/Choose-Your-Horizon-Dashboard-(Copy)?type=design&node-id=0%3A1&mode=design&t=ZN6FUtOceadQzqwy-1), a screenshot of which is shown below.

![figma design](src/assets/figma-design.png)

### Requirements

- The layout of the new home page should look like the Figma design and the colors should somewhat match between the two. Getting the layout right is more important than getting the colors to match perfectly. The current code is using Ant Design, but you can remove this if you like and use Material UI or whatever you prefer.
- Don't worry about making the mobile design, just do the desktop design since that's all that is shown in Figma.
- There are two API calls already being made by the existing code to our backend, and the one to `https://api.chooseketamine.com/users` gives information on your example user including their first and last name. Use this information instead of the "Josh" placeholder in the Figma design.
- Update the test in `test/test-packs.spec.js` to test the new design. The test should check for the presence of the elements Session 1, Session 2, Follow-up Consult, Session 3, and Session 4 like the existing test does. You can leave out "Purchase a New Plan" since that is not in the Figma design. Note the existing test is checking for Ant Design classes, so you'll need to update it to check for the classes you use if you remove Ant Design.

### Notes

- The image of the woman in space from the Figma design is included in this repo at `src/assets/woman-in-space.png`.
- Only the home page of the Figma design needs to be implemented, don't worry about adding the other tabs for Integration, Group Circle, Billing, FAQ, and Contact.
