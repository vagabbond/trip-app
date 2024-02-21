import { ITimeState } from "../components/Sidebar/Sidebar";

export const calculateTime = (ms: number): ITimeState => {
 const days = Math.floor(ms / (1000 * 60 * 60 * 24));
 const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((ms % (1000 * 60)) / 1000);

 return { days, hours, minutes, seconds };
};
