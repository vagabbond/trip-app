import { FC } from "react";
import { useFormik } from "formik";
import {
 ModalContainer,
 ModalContent,
 CloseButton,
 ModalTitle,
 ModalForm,
 ModalSelect,
 ModalOption,
 ModalDatePicker,
 ModalSubmitButton,
 ModalCancelButton,
 ModalLabel,
 ModalButtonsWraper,
 ModalInputContainer,
 ModalError,
} from "./Modal.styled";
import { IoClose } from "react-icons/io5";
import { mockData } from "../../constants/Data";
import { useAppDispatch } from "../../redux/store";
import { addTrip } from "../../redux/slices/trips/tripsOperations";
import { validationSchema } from "./validationSchema";

interface IProps {
 callback: (isOpen: boolean) => void;
}

interface IFormValues {
 location: string;
 startDate: string;
 endDate: string;
}

const Modal: FC<IProps> = ({ callback }) => {
 const dispatch = useAppDispatch();
 const formik = useFormik<IFormValues>({
  initialValues: {
   location: "",
   startDate: "",
   endDate: "",
  },
  onSubmit: (values, actions) => {
   dispatch(addTrip(values));
   callback(false);
   actions.resetForm();
  },
  validationSchema,
 });
 const minDate = new Date().toISOString().split("T")[0];
 const nextDay = new Date(minDate);
 nextDay.setDate(nextDay.getDate() + 1);
 const minEndDate = nextDay.toISOString().split("T")[0];

 return (
  <ModalContainer>
   <ModalContent>
    <CloseButton onClick={() => callback(false)}>
     <IoClose size={30} />
    </CloseButton>
    <ModalTitle>Add Trip</ModalTitle>
    <ModalForm onSubmit={formik.handleSubmit}>
     <ModalInputContainer>
      <ModalLabel htmlFor="location">
       <span>*</span> Location
      </ModalLabel>
      <ModalSelect
       name="location"
       id="location"
       value={formik.values.location}
       onChange={formik.handleChange}
       required
      >
       <ModalOption value="">Select location</ModalOption>
       {mockData.map((item, index) => (
        <ModalOption key={index} value={item.location}>
         {item.location}
        </ModalOption>
       ))}
      </ModalSelect>
      {formik.errors.location && formik.touched.location ? (
       <ModalError>{formik.errors.location}</ModalError>
      ) : null}
     </ModalInputContainer>
     <ModalInputContainer>
      <ModalLabel htmlFor="startDate">
       <span>*</span> Start Date
      </ModalLabel>
      <ModalDatePicker
       min={minDate}
       required
       type="date"
       name="startDate"
       id="startDate"
       value={formik.values.startDate}
       onChange={formik.handleChange}
      />
      {formik.errors.startDate && formik.touched.startDate ? (
       <ModalError>{formik.errors.startDate}</ModalError>
      ) : null}
     </ModalInputContainer>
     <ModalInputContainer>
      <ModalLabel htmlFor="endDate">
       <span>*</span> End Date
      </ModalLabel>
      <ModalDatePicker
       min={minEndDate}
       required
       type="date"
       name="endDate"
       id="endDate"
       value={formik.values.endDate}
       onChange={formik.handleChange}
      />
      {formik.errors.endDate && formik.touched.endDate ? (
       <ModalError>{formik.errors.endDate}</ModalError>
      ) : null}
     </ModalInputContainer>
     <ModalButtonsWraper>
      <ModalCancelButton type="button" onClick={() => callback(false)}>
       Cancel
      </ModalCancelButton>
      <ModalSubmitButton type="submit">Save</ModalSubmitButton>
     </ModalButtonsWraper>
    </ModalForm>
   </ModalContent>
  </ModalContainer>
 );
};

export default Modal;
