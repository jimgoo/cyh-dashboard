// @ts-check
const { test, expect } = require('@playwright/test');

// URL of the app, should match what is printed when you run `npm run dev`
const APP_URL = 'http://localhost:3000';

async function checkHeader(page, expectedText) {
  /*
  `page`: the page object
  `expectedText`: the text to check for in the header
  */
  await expect(page.getByText(expectedText, { exact: true })).toBeVisible();
}

async function getTodoItem(page, todoName, nth) {
  /*
  `page`: the page object
  `todoName`: the name of the todo item
  `nth`: the index of the todo item in the list of todo items with the name `todoName`
  */

  const card = page
    .locator('.ant-collapse-header-text')
    .filter({ has: page.getByText(todoName, { exact: true }) });
  await expect(card).toBeVisible();
  return card;
}

async function checkTodoItem(page, todoName, nth, expectedComplete) {
  /*
  `page`: the page object
  `todoName`: the name of the todo item
  `nth`: the index of the todo item in the list of todo items with the name `todoName`
  `expectedComplete`: whether the todo item should be marked as complete or not
  */

  const card = await getTodoItem(page, todoName, nth);

  if (expectedComplete) {
    await expect(card).toHaveClass('ant-collapse-item ant-collapse-item-disabled');
  } else {
    await expect(card).not.toHaveClass('ant-collapse-item ant-collapse-item-disabled');
  }
}

async function checkTodoItemCount(page, expectedCount) {
  await expect(page.locator('.ant-collapse-item')).toHaveCount(expectedCount);
}

async function clickTodoCard(page, todoName, nth) {
  // `page`: the page object
  // `todoName`: the name of the todo item
  // `nth`: the index of the todo item in the list of todo items with the name `todoName`
  const card = await getTodoItem(page, todoName, nth);
  await card.click();
}

test('4 Pack, non-repeat, session cards', async ({ page }) => {
  await page.goto(
    APP_URL +
      '/home?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkY2U5ZDFkZi05ZTMwLTRkMGItYmZiOC03NzljYTBkYzYyMjIiLCJpYXQiOjE2ODkxOTEzOTB9.OJqlLRWenfRNAMTUNe-QnPGx0dEZYfOjErcr1v46-oM',
  );

  //await checkHeader(page, '4 Session Plan');

  await checkTodoItem(page, 'Session 2', 1, false);
  await checkTodoItem(page, 'Follow-up Consult', 2, false);
  await checkTodoItem(page, 'Session 3', 3, false);
  await checkTodoItem(page, 'Session 4', 4, false);
  //await checkTodoItem(page, 'Purchase a New Plan', 0, false);

  await checkTodoItemCount(page, 4);
});
