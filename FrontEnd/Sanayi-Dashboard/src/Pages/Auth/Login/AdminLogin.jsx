import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../validation/authSchema";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { handleLoginAdmin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });
  const onsubmit = async (data) => {
    await handleLoginAdmin(data);
    navigate("/dashboard");
  };

  return (
    <section className="bg-gray-100 register h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onsubmit)}
        action="
    "
        className=" p-8 w-full max-w-md rounded-2xl shadow-xl bg-white"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Login Admin
        </h1>

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
        <div className="Password">
          <label className="mb-2 block text-sm font-medium">Password:</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter Your Password..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.password?.message}
          </p>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition-colors hover:bg-blue-700 active:scale-[0.98] cursor-pointer"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;
