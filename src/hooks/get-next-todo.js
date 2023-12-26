// This function finds the first incomplete session in the todoData payload and returns the appropriate heading.
// The data from '@/utils/constants/session-data' is in a different order, and some headings are inconsistent,
// so I chose to create my own corresponding headings here.

const getNextIncompleteExperience = (data) => {
  const todoData = Object.entries(data).map(([key, value]) => ({
    key,
    ...value,
  }));

  const sessionData = todoData.slice(5); // Remove preliminary non-session items from todoData array

  const headings = [
    'First Session',
    'Second Session, Follow-up consultation',
    'Third Session',
    'Fourth Session',
  ];

  for (let i = 0; i < sessionData.length; i++) {
    if (sessionData[i].status === 'incomplete') {
      return `Schedule Your ${headings[i]}`;
    }
  }
  return `Purchase a new session plan`; // If all experiences are completed
};

export default getNextIncompleteExperience;
