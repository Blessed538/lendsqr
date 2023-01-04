import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
