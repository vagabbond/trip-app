import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
 location: Yup.string().required("Location is required"),
 startDate: Yup.date()
  .required("Start date is required")
  .min(
   new Date().toISOString().split("T")[0],
   "Start date should be in the future"
  ),

 endDate: Yup.date()
  .required("End date is required")
  .min(Yup.ref("startDate"), "End date should be later than start date"),
});
