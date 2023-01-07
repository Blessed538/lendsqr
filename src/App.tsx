import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/users" element={<Dashboard />} />
          <Route path="users/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
