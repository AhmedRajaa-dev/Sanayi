import * as yup from "yup";
export const registerSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("Number is required")
    .matches(
      /^[0-9]{11,15}$/,
      "Number must contain only digits and be between 10 and 15 characters long",
    ),
  otp: yup.string().matches(/^[0-9]{4}$/, "Otp must be a 4-digit number"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must be at most 24 characters")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
    //   "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",)
    ,
  name: yup.string().min(3).max(50),
  role: yup
    .string()

    .oneOf(["client", "craftsman"], "Role must be either 'user' or 'craftsman'"),
});
