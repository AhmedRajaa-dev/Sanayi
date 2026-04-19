import useAuthStore from "../store/authStore";

import { sendOtp, verifyOtp, completeRegister } from "../services/authService";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const {
    phoneNumber,
    setPhone,
    setRegisterToken,
    registrationToken,
    setUser,
    setAuthenticated,
  } = useAuthStore();

  const { setOtpSent, setOtpVerified } = useAuthStore();
  //send Otp
  const handleSendOtp = async (data) => {
    setLoading(true);
    const res = await sendOtp({ phoneNumber: data.phoneNumber });
    
    setPhone(res.phoneNumber);
    setOtpSent(true);
    setLoading(false);
  };
  //verify OTP
  const handleVerifyOtp = async (data) => {
    setLoading(true);
    const res = await verifyOtp({
      phoneNumber: data.phoneNumber,
      otp: data.otp,
    });

    setRegisterToken(res.registerationToken);
  

    setOtpVerified(true);
    setLoading(false);
  };
  //complete register
  const handleCompleteRegister = async (data) => {
    setLoading(true);
    const res = await completeRegister({
      name: data.name,
      password: data.password,
      role: data.role,
      registrationToken: registrationToken,
    });

    setUser(res.user);
    setAuthenticated(true);
    setLoading(false);
  };
  return {
    loading,
    handleSendOtp,
    handleVerifyOtp,
    handleCompleteRegister,
  };
};
export default useAuth;
