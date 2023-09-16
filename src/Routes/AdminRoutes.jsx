import { Route } from "react-router-dom";
import LoginForm from "../components/Admin/";

const AdminRoutes = () => {
  return (
    <>
      <Route exact path="/admin" element={LoginForm} />
    </>
  );
};

export default AdminRoutes;
