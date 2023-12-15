// @ts-check
import { test, expect } from '@playwright/test';

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
    .locator('.ant-collapse-item')
    .filter({ has: page.getByText(todoName, { exact: true }) })
    .nth(nth);
  await expect(card).toBeVisible();
  return card;
}

async function checkFirstSessionPopover(page) {
  // Check if the "Schedule Your First Session" card is visible
  const scheduleCardLocator = page.locator('.card-heading:has-text("Schedule Your First Session")');
  await expect(scheduleCardLocator).toBeVisible();

  // Ensure that the "Important Reminders" are visible, which are associated with the first session
  const remindersLocator = page.locator('.sub-heading:has-text("Important Reminders")');
  await expect(remindersLocator).toBeVisible();

  // Ensure that the "Schedule Now" button is visible
  const scheduleButtonLocator = page.locator('.schedule-now-btn:has-text("Schedule Now")');
  await expect(scheduleButtonLocator).toBeVisible();
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

// async function clickTodoCard(page, todoName, nth) {
//   // `page`: the page object
//   // `todoName`: the name of the todo item
//   // `nth`: the index of the todo item in the list of todo items with the name `todoName`
//   const card = await getTodoItem(page, todoName, nth);
//   await card.click();
// }

test('4 Pack, non-repeat, session cards', async ({ page }) => {
  await page.goto(
    APP_URL +
      '/home?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkY2U5ZDFkZi05ZTMwLTRkMGItYmZiOC03NzljYTBkYzYyMjIiLCJpYXQiOjE2ODkxOTEzOTB9.OJqlLRWenfRNAMTUNe-QnPGx0dEZYfOjErcr1v46-oM',
  );

  await checkHeader(page, '4 Session Plan');

  await checkFirstSessionPopover(page);
  await checkTodoItem(page, 'Session 2', 0, false);
  await checkTodoItem(page, 'Follow Up Consult', 0, false);
  await checkTodoItem(page, 'Session 3', 0, false);
  await checkTodoItem(page, 'Session 4', 0, false);

  // await checkTodoItem(page, 'Purchase a New Plan', 0, false);

  await checkTodoItemCount(page, 4);
});
