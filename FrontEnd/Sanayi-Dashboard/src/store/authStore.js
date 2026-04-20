import { create } from "zustand";
const useAuthStore = create((set) => ({
  phoneNumber: null,
  user: null,
  registrationToken: null,
  role: null,
  token: null,
  isAuthenticated: false,
  otpVerified: false,
  otpSent: false,

  setPhone: (numPhone) => set({ phoneNumber: numPhone }),
  setRegisterToken: (token) => set({ registrationToken: token }),
  setOtpVerified: (val) => set({ otpVerified: val }),
  setOtpSent: (val) => set({ otpSent: val }),
  setAuth: (user, token, refreshToken) =>
    set({
      user,
      token,
      role: user?.role,
      isAuthenticated: true,
      refreshToken,
    }),
  logout: () =>
    set({
      phoneNumber: null,
      registrationToken: null,
      user: null,
      isAuthenticated: false,
      otpVerified: false,
      role: null,
      otpSent: null,
    }),
}));

export default useAuthStore;
