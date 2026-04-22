import useAuthStore from "../store/authStore";

import {
  sendOtp,
  verifyOtp,
  completeRegister,
  LoginAdmin,
  Login,
} from "../services/authService";

export const useAuth = () => {
  const {
    setPhone,
    setRegisterToken,
    registrationToken,
    setUser,
    setAuthenticated,
    setOtpSent,
    setOtpVerified,
    setLoading,
    setAuth,
    loading,
  } = useAuthStore();

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
  //login admin
  const handleLoginAdmin = async (data) => {
    setLoading(true);
    try {
      const res = await LoginAdmin({
        phoneNumber: data.phoneNumber,
        password: data.password,
      });
      console.log(res.token);
      setAuth(res.data.user, res.token);
      localStorage.setItem("refreshToken", res.refreshToken);
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
  //login
  const handelLogin = async (data) => {
    setLoading(true);
    try {
      const res = await Login({
        phoneNumber: data.phoneNumber,
        password: data.password,
      });
      console.log(res);

      setAuth(res.data.user, res.token);
      localStorage.setItem("refreshToken", res.refreshToken);
    } catch (err) {
      if (!err?.response.data) {
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        console.log("Username Taken");
      } else {
        console.log("Registration Failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSendOtp,
    handleVerifyOtp,
    handleCompleteRegister,
    handleLoginAdmin,
    handelLogin,
  };
};
export default useAuth;
