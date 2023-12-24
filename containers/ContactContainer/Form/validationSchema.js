import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address"),
  message: Yup.string().required("This field is required"),
});
