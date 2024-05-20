import { toYYYYMMDD } from './toYYYYMMDD';

// 채팅방 날짜
export const formatDate = (dateInput: string): string => {
  const date = new Date(dateInput);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  date.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  yesterday.setHours(0, 0, 0, 0);

  if (date.getTime() === today.getTime()) {
    return '오늘';
  } else if (date.getTime() === yesterday.getTime()) {
    return '어제';
  } else {
    return toYYYYMMDD(date);
  }
};
