import { FC } from "react";
import {
 TripContainer,
 TripImg,
 TripInfo,
 TripTitle,
 TripDate,
 TripButton,
} from "./Trip.styled";
import { ITrip } from "../../interfaces/ITrip";

interface ITripProps {
 trip: ITrip;
 callback: (trip: ITrip) => void;
}

const Trip: FC<ITripProps> = ({ trip, callback }) => {
 const { id, img, location, startDate, endDate } = trip;
 return (
  <TripContainer key={id}>
   <TripButton onClick={() => callback(trip)}>
    <TripImg src={img} alt={location} />
    <TripInfo>
     <TripTitle>{location}</TripTitle>
     <TripDate>
      {startDate} - {endDate}
     </TripDate>
    </TripInfo>
   </TripButton>
  </TripContainer>
 );
};

export default Trip;
