import api from "./Api";

export const sendOtp = async (data) => {
  const response = await api.post("auth/register/send-otp", data);
  return response.data;
};
export const verifyOtp = async (data) => {
  const response = await api.post("auth/register/verify-otp", {
    phoneNumber: data.phoneNumber,
    otp: data.otp,
  });

  return response.data;
};
export const completeRegister = async (data) => {
  const payload = {
    name: data.name,
    password: data.password,
    role: data.role,
  };
  const response = await api.post("auth/register/complete", payload, {
    headers: {
      Authorization: `Bearer ${data.registrationToken}`,
    },
  });
  return response.data;
};
