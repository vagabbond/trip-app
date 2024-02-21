import { createAsyncThunk } from "@reduxjs/toolkit";

import { mockData } from "../../../constants/Data";
import { WEATHER_KEY } from "../../../constants/Api";

import { ICurrentConditions, ITrip } from "../../../interfaces/ITrip";
import { AsyncThunkConfig } from "../../../types/Thunk";

interface IProps {
 location: string;
 startDate: string;
 endDate: string;
}

interface IWeatherProps {
 id: string;
}

export const addTrip = createAsyncThunk<ITrip, IProps, AsyncThunkConfig>(
 "trips/addTrip",
 async ({ location, startDate, endDate }, { rejectWithValue }) => {
  try {
   const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?unitGroup=us&key=${WEATHER_KEY}&include=days&elements=datetime,icon,tempmax,tempmin`
   );
   const data = await response.json();
   const img =
    mockData.find(
     (item) =>
      item.location.toLocaleLowerCase() === location.toLocaleLowerCase()
    ) || "";
   if (img) {
    return {
     id: Math.random().toString(36).substr(2, 9),
     img: img.src,
     location,
     startDate,
     endDate,
     weather: {
      days: data.days,
      currentConditions: null,
     },
    } as ITrip;
   }
   return rejectWithValue("Image not found");
  } catch (error) {
   return rejectWithValue(error as string);
  }
 }
);

export const getCurrentWeather = createAsyncThunk<
 { id: string; currentConditions: ICurrentConditions },
 IWeatherProps,
 AsyncThunkConfig
>("trips/getCurrentWeather", async ({ id }, { rejectWithValue, getState }) => {
 try {
  const trip = getState().trips.trips.find((item: ITrip) => item.id === id);
  if (trip) {
   const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trip.location}?unitGroup=us&key=${WEATHER_KEY}&include=current&elements=temp,datetime,icon`
   );
   const data = await response.json();
   return {
    id,
    currentConditions: data.currentConditions,
   } as { id: string; currentConditions: ICurrentConditions };
  } else {
   return rejectWithValue("Trip not found");
  }
 } catch (error) {
  return rejectWithValue(error as string);
 }
});
