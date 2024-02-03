import { removeFromLocalStorage } from "./localStorage";

export const logout = () => {
  removeFromLocalStorage("token");
  window.location.reload();
};
