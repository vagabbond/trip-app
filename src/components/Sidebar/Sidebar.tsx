import { FC, useState, useEffect } from "react";
import {
 AppSideBar,
 AppSidiBarInfo,
 AppSideBarTitle,
 AppSideBarInfoWrapper,
 AppSidiBarInfoDegre,
 AppSidiBarInfoText,
 AppSideBarTimer,
 SideBarTimerItem,
 SideBarTimerItemValue,
 SideBarTimerItemText,
 AppSideBarBtnClose,
 Svg,
} from "./Sidebar.styled";
import { IoClose } from "react-icons/io5";
import sprite from "../../../public/assets/images/icons/symbol-defs.svg";
import { WiCelsius } from "react-icons/wi";

import { ITrip } from "../../interfaces/ITrip";

import { calculateTime } from "../../func/calculateTime";
import { getDayOfTheWeek } from "../../func/getDayOfTheWeek";

interface ISidebarProps {
 trip: ITrip;
 callback: () => void;
}

export interface ITimeState {
 days: number;
 hours: number;
 minutes: number;
 seconds: number;
}
const Sidebar: FC<ISidebarProps> = ({ trip, callback }) => {
 const [time, setTime] = useState<ITimeState>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
 });
 const { location, weather, startDate } = trip;
 const dayOfWeek = getDayOfTheWeek(startDate);

 useEffect(() => {
  const targetDate = new Date(startDate).getTime();
  const updateCountdown = () => {
   const currentTime = new Date().getTime();
   const timeDifference = Number(targetDate) - currentTime;

   if (timeDifference > 0) {
    const updatedTime = calculateTime(timeDifference);
    setTime(updatedTime);
   } else {
    setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
   }
  };
  const intervalId = setInterval(updateCountdown, 1000);
  return () => clearInterval(intervalId);
 }, [startDate]);

 return (
  <AppSideBar>
   <AppSideBarBtnClose type={"button"} onClick={callback}>
    <IoClose size={30} color="white" />
   </AppSideBarBtnClose>
   <AppSidiBarInfo>
    <AppSideBarTitle>{dayOfWeek}</AppSideBarTitle>
    <AppSideBarInfoWrapper>
     <Svg>
      <use href={`${sprite}#icon-${weather.currentConditions?.icon}`} />
     </Svg>
     <AppSidiBarInfoDegre>
      {weather.currentConditions?.temp &&
       `${Math.ceil(((weather.currentConditions?.temp - 32) * 5) / 9)}`}
      <span>
       <WiCelsius />
      </span>
     </AppSidiBarInfoDegre>
    </AppSideBarInfoWrapper>
    <AppSidiBarInfoText>{location}</AppSidiBarInfoText>
   </AppSidiBarInfo>
   <AppSideBarTimer>
    <SideBarTimerItem>
     <SideBarTimerItemValue>{time.days}</SideBarTimerItemValue>
     <SideBarTimerItemText>days</SideBarTimerItemText>
    </SideBarTimerItem>
    <SideBarTimerItem>
     <SideBarTimerItemValue>{time.hours}</SideBarTimerItemValue>
     <SideBarTimerItemText>hours</SideBarTimerItemText>
    </SideBarTimerItem>
    <SideBarTimerItem>
     <SideBarTimerItemValue>{time.minutes}</SideBarTimerItemValue>
     <SideBarTimerItemText>minutes</SideBarTimerItemText>
    </SideBarTimerItem>
    <SideBarTimerItem>
     <SideBarTimerItemValue>{time.seconds}</SideBarTimerItemValue>
     <SideBarTimerItemText>seconds</SideBarTimerItemText>
    </SideBarTimerItem>
   </AppSideBarTimer>
  </AppSideBar>
 );
};

export default Sidebar;
