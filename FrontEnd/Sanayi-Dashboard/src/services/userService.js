import api from "./Api";
import useAuthStore from "../store/authStore.js";

export const handelgetUsers = async () => {
  const token = useAuthStore.getState().token;
  console.log("the token is :", token);

  const response = await api.get("users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
