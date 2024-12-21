import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="flex w-52 flex-col gap-4 my-28">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  if (!user) return <Navigate state={location.pathname} to="/login"></Navigate>;

  return children;
};

export default Private;
