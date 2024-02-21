import { FC } from "react";
import { WeatherLi, Svg, WeatherTitle, WeatherDate } from "./Weather.styled";
import sprite from "../../../public/assets/images/icons/symbol-defs.svg";

import { IConditions } from "../../interfaces/ITrip";

import { getDayOfTheWeek } from "../../func/getDayOfTheWeek";

interface IProps {
 weather: IConditions;
}

const Weather: FC<IProps> = ({ weather }) => {
 const { datetime, tempmax, tempmin, icon } = weather;
 const dayOfWeek = getDayOfTheWeek(datetime);
 return (
  <WeatherLi>
   <WeatherTitle>{dayOfWeek}</WeatherTitle>
   <Svg>
    <use href={`${sprite}#icon-${icon}`} />
   </Svg>
   <WeatherDate>{`${Math.ceil(((tempmin - 32) * 5) / 9)}\u00B0/${Math.ceil(
    ((tempmax - 32) * 5) / 9
   )}\u00B0`}</WeatherDate>
  </WeatherLi>
 );
};

export default Weather;
