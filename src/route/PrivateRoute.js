import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ loggedUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  return <Outlet />;
};

export default PrivateRoute;
