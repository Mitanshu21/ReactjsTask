import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const PublicRoute = ({ loggedUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedUser) {
      navigate("/Dashboard");
    }
  }, [loggedUser]);

  return <Outlet />;
};

export default PublicRoute;
