import { create } from "zustand";
const useAuthStore = create((set) => ({
  phoneNumber: null,
  registrationToken: null,
  user: null,
  isAuthenticated: false,
  otpVerified: false,
  otpSent: false,
  setPhone: (numPhone) => set({ phoneNumber: numPhone }),
  setRegisterToken: (token) => set({ registrationToken: token }),
  setOtpVerified: (val) => set({ otpVerified: val }),
  setUser: (user) => set({ user }),
  setOtpSent: (val) => set({ otpSent: val }),
  setAuthenticated: (val) => set({ isAuthenticated: val }),

  logout: () =>
    set({
      phoneNumber: null,
      registrationToken: null,
      user: null,
      isAuthenticated: false,
      otpVerified: false,
    }),
}));

export default useAuthStore;
