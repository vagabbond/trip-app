import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addTrip, getCurrentWeather } from "./tripsOperations";
import { ITrip } from "../../../interfaces/ITrip";

export interface IState {
 trips: ITrip[];
 error: string | null;
 weatherLoading: boolean;
 tripsLoading: boolean;
}

const initialState: IState = {
 trips: [],
 error: null,
 weatherLoading: false,
 tripsLoading: false,
};

const tripsSlice = createSlice({
 name: "trips",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(addTrip.fulfilled, (state, { payload }: PayloadAction<ITrip>) => {
    state.trips.push(payload);
    state.error = null;
    state.tripsLoading = false;
   })
   .addCase(addTrip.rejected, (state, action) => {
    state.error = action.payload as string;
   })
   .addCase(addTrip.pending, (state) => {
    state.tripsLoading = true;
   })
   .addCase(getCurrentWeather.fulfilled, (state, { payload }) => {
    const trip = state.trips.find((item: ITrip) => item.id === payload.id);
    if (trip) {
     trip.weather.currentConditions = payload.currentConditions;
    }
    state.weatherLoading = false;
   })
   .addCase(getCurrentWeather.rejected, (state, action) => {
    state.error = action.payload as string;
   })
   .addCase(getCurrentWeather.pending, (state) => {
    state.weatherLoading = true;
   });
 },
});

export default tripsSlice.reducer;
