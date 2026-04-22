import { useEffect } from "react";
import useUserStore from "../store/userStore";
import { handelgetUsers } from "../services/userService.js";
import { Users } from "lucide-react";

const useUsers = () => {
  //data store
  const users = useUserStore((state) => state.users);
  const totalUsers = useUserStore((state) => state.totalUsers);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  //function data
  const setUsers = useUserStore((state) => state.setUsers);
  const setLoading = useUserStore((state) => state.setLoading);
  const setError = useUserStore((state) => state.setError);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await handelgetUsers();
      console.log("Users response:", res);
      setUsers(res.data.data);
      console.log(users);
      setLoading(false);
    } catch (err) {
      console.log("Fetch users error:", err.response?.data);
      setError(err.response?.data?.message || "فشل جلب المستخدمين");
    }
  };
  useEffect(() => {
    if (users.length === 0) {
      fetchUsers();
    }
  }, []);
  return {
    users,
    totalUsers,
    loading,
    error,
    fetchUsers,
  };
};
export default useUsers;
