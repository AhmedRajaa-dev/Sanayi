import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../validation/authSchema";
import useAuth from "../../../hooks/useAuth.js";
import useAuthStore from "../../../store/authStore";
import CompleteRegister from "./ComplectRegister.jsx";

const Register = () => {
  const registrationToken = useAuthStore((state) => state.registrationToken);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  const { handleSendOtp, handleVerifyOtp, handleCompleteRegister } = useAuth();
  const { otpSent, otpVerified } = useAuthStore();

  const onSubmit = async (data) => {
    try {
      if (!otpSent) {
        await handleSendOtp(data);
      } else if (!otpVerified) {
        await handleVerifyOtp(data);
      } else {
        await handleCompleteRegister({ ...data, registrationToken });
      }
    } catch (err) {
      if (!err?.response.data) {
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        console.log("Username Taken");
      } else {
        console.log("Registration Failed");
      }
    }
  };
  const buttonRegister = () => {
    if (otpVerified) return "Register";
    if (otpSent) return "Verify OTP";
    return "Send OTP";
  };

  return (
    <section className="bg-gray-100 register h-screen flex flex-col items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" p-8 w-full max-w-md rounded-2xl shadow-xl bg-white"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Register
        </h1>

        {!otpSent && (
          <div className="number my-4">
            <label htmlFor="number" className="block mb-2 text-sm font-medium">
              Number:
            </label>
            <input
              {...register("phoneNumber")}
              placeholder="Enter Number..."
              className="w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all "
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.phoneNumber?.message}
            </p>
          </div>
        )}
        {otpSent && !otpVerified && (
          <div className="otp mb-4">
            <label htmlFor="otp" className="block mb-2 text-sm font-medium">
              Otp:
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              required
              placeholder="Enter Your Otp..."
              {...register("otp")}
            />
            <p className="mt-1 text-sm text-red-500">{errors.otp?.message}</p>
          </div>
        )}
        {otpSent && otpVerified && (
          <CompleteRegister register={register} errors={errors} />
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition-colors hover:bg-blue-700 active:scale-[0.98] cursor-pointer"
        >
          {buttonRegister()}
        </button>
      </form>
    </section>
  );
};
export default Register;
