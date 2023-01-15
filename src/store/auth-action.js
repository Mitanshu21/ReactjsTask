import { authActions } from "./auth-slice";

export const authCheck = () => {
  return (dispatch) => {
    const data = localStorage.getItem("auth");
    if (data) {
      dispatch(authActions.login(data?.userEmail));
    }
  };
};

export const authLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("auth");
    dispatch(authActions.logout());
  };
};

export const authLogin = (data) => {
  let userEmail = data.email;
  return async (dispatch) => {
    try {
      const user =
        data.email === "admin@gmail.com" && data.password === "Abcd@1234";

      if (!user) {
        throw new Error("Invalid credentials!");
      }
      localStorage.setItem("auth", JSON.stringify({ userEmail }));
      dispatch(authActions.login(data.email));
      console.log("success");
    } catch (error) {
      console.log(error);
      alert("Invalid Email or Password!");
    }
  };
};
