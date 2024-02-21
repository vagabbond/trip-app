import { DAYS } from "../constants/Days";

export const getDayOfTheWeek = (date?: string): string => {
 const dateObject = date ? new Date(date) : new Date();
 const dateOfWeek = dateObject.getDay();
 return DAYS[dateOfWeek];
};
