import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import { Provider } from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserInterface } from "./Types";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <div className="App">
      <Provider value={{ users }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users/:id" element={<User />} />

            <Route path="*" element={<Login />} />
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
