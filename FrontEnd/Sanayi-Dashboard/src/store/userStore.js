import { create } from "zustand";
const useUserStore = create((set) => ({
  users: [],
  totalUsers: 0,
  loading: false,
  error: null,

  setUsers: (users) => set({ users, totalUsers: users.length }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
      totalUsers: state.totalUsers + 1,
    })),
}));
export default useUserStore;
