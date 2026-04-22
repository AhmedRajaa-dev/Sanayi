import { create } from "zustand";
import { persist } from "zustand/middleware";
const useAuthStore = create(
  persist(
    (set) => ({
      phoneNumber: null,
      user: null,
      registrationToken: null,
      role: null,
      token: null,
      isAuthenticated: false,
      otpVerified: false,
      otpSent: false,
      loading: false,

      setPhone: (numPhone) => set({ phoneNumber: numPhone }),
      setRegisterToken: (token) => set({ registrationToken: token }),
      setOtpVerified: (val) => set({ otpVerified: val }),
      setOtpSent: (val) => set({ otpSent: val }),
      setLoading: (value) => set({ loading: value }),
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
          token: null,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        accessToken: state.accessToken,
        token: state.token,
        role: state.role,
      }),
    },
  ),
);

export default useAuthStore;
