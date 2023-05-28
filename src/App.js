import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Journeys/Dashboard";
import ManageUsers from "./Journeys/Dashboard/UsersJourney/ManageUsers";
import CreateUser from "./Journeys/Dashboard/UsersJourney/CreateUser";
import CreateCategories from "./Journeys/Dashboard/CategoriesJourney/CreateCategories";
import ManageCategories from "./Journeys/Dashboard/CategoriesJourney/ManageCategories";
import Login from "./Journeys/Authentication";
import AdminLogin from "./Journeys/Authentication/AdminLogin";

/**
 * ROUTES:
 * 1. Login
 * 2. Signup
 * 3. Forgot Password
 */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<ManageUsers />} />
          <Route path="/dashboard/createUsers" element={<CreateUser />} />
          <Route
            path="/dashboard/createCategories"
            element={<CreateCategories />}
          />
          <Route
            path="/dashboard/manageCategories"
            element={<ManageCategories />}
          />
        </Route>
        <Route path="/signup" element={<p>Signup Page</p>} />
        <Route path="/resetPassword" element={<p>Reset Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
