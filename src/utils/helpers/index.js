import { dateOptions } from '@/utils/constants/constant';

export const formatDate = (date) => {
  const datetimeObject = new Date(date);
  return datetimeObject.toLocaleString(undefined, dateOptions);
};

export const formatDateDayOnly = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', options);
};

export function splitFileNameAndExtension(fileName) {
  const lastDotIndex = fileName.lastIndexOf('.');

  if (lastDotIndex !== -1) {
    const name = fileName.substring(0, lastDotIndex);
    const extension = fileName.substring(lastDotIndex + 1);
    return { name, extension };
  } else {
    // If there's no dot (.) in the filename, consider it as just the name with no extension.
    return { name: fileName, extension: '' };
  }
}
