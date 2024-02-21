import { FC, useEffect, useState } from "react";
import {
 Main,
 AppHeader,
 InputIcon,
 InputContainer,
 AppInput,
 AppList,
 AppContainer,
 AppForm,
 AppTitle,
 AppButton,
 AppTripContainer,
 AppErorrContainer,
 AppErorrTitle,
 AppLoginButton,
 AppUserPhoto,
 Checkbox,
 CheckboxContainer,
} from "./App.styled";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getCurrentWeather } from "../../redux/slices/trips/tripsOperations";
import {
 logOut,
 signInWithGoogle,
} from "../../redux/slices/user/userOperations";

import { ITrip } from "../../interfaces/ITrip";

import Trip from "../Trip/Trip";
import Weather from "../Weather/Weather";
import Modal from "../Modal/Modal";
import Sidebar from "../Sidebar/Sidebar";

const App: FC = () => {
 const [search, setSearch] = useState("");
 const [selectedTrip, setSelectedTrip] = useState<ITrip | null>(null);
 const [modal, toggleModal] = useState(false);
 const [checked, setChecked] = useState(false);

 const trips = useAppSelector((state) => state.trips.trips);
 const user = useAppSelector((state) => state.user.user);

 const filtredTips = trips.filter((item: ITrip) =>
  item.location.toLocaleLowerCase().includes(search)
 );

 const sortedTrips = checked
  ? filtredTips.sort((a: ITrip, b: ITrip) => {
     const dateA = new Date(a.startDate).getDate();
     const dateB = new Date(b.startDate).getDate();
     return dateB - dateA;
    })
  : filtredTips;
 const dispatch = useAppDispatch();

 useEffect(() => {
  if (selectedTrip) {
   const id = selectedTrip.id;
   dispatch(getCurrentWeather({ id }));
  }
 }, [selectedTrip, dispatch]);

 const closeSidebar = () => {
  setSelectedTrip(null);
 };

 return (
  <Main>
   {user ? (
    <>
     <AppLoginButton onClick={() => dispatch(logOut())}>
      <IoMdLogOut size={28} />
     </AppLoginButton>
     <AppUserPhoto src={user.photoURL} alt={user.displayName} />
    </>
   ) : (
    <AppLoginButton onClick={() => dispatch(signInWithGoogle())}>
     <IoMdLogIn size={28} />
    </AppLoginButton>
   )}

   <AppContainer mr={selectedTrip ? "400px" : "0"}>
    <div>
     <AppHeader>
      Weather <span>Forecast</span>
     </AppHeader>

     <AppForm>
      <InputContainer>
       <AppInput
        type="text"
        placeholder="Search your trip"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       />
       <InputIcon>
        <FaSearch color={"#0d0d0d"} />
       </InputIcon>
      </InputContainer>
      <CheckboxContainer>
       <Checkbox
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
       />
       <span>Sort by start of trip date</span>
      </CheckboxContainer>
     </AppForm>

     <div>
      <AppTripContainer>
       {sortedTrips.length > 0 ? (
        <AppList gap={"20px"}>
         {sortedTrips.map((trip: ITrip) => {
          return <Trip trip={trip} callback={setSelectedTrip} key={trip.id} />;
         })}
         <li>
          <AppButton onClick={() => toggleModal(true)}>
           <FaPlus size={28} />
           <span>Add trip</span>
          </AppButton>
         </li>
        </AppList>
       ) : (
        <AppList gap={"20px"}>
         <li>
          <AppErorrContainer>
           <AppErorrTitle>No trips found</AppErorrTitle>
          </AppErorrContainer>
         </li>
         <li>
          <AppButton onClick={() => toggleModal(true)}>
           <FaPlus size={28} />
           <span>Add trip</span>
          </AppButton>
         </li>
        </AppList>
       )}
      </AppTripContainer>
      <div>
       <AppTitle>Week</AppTitle>
       {selectedTrip ? (
        <AppList gap={"20px"}>
         {selectedTrip.weather.days.map((item, index) => {
          return <Weather weather={item} key={index} />;
         })}
        </AppList>
       ) : (
        <AppErorrContainer>
         Chose trip to see a forecast for each day of the trip
        </AppErorrContainer>
       )}
      </div>
     </div>
    </div>
   </AppContainer>
   {modal && <Modal callback={toggleModal} />}
   {selectedTrip && <Sidebar trip={selectedTrip} callback={closeSidebar} />}
  </Main>
 );
};

export default App;
