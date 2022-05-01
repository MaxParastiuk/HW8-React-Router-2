import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import Albums from "./pages/Albums/Albums";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateUser from "./pages/CreateUser/CreateUser";
import "./App.css";
import EditUser from "./pages/EditUser/EditUser";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path={"/"} element={<Dashboard></Dashboard>} />
				<Route path={"/albums"} element={<Albums></Albums>} />
				<Route path={"/users"} element={<Users></Users>} />
				<Route path={"/users/:id/edit"} element={<EditUser></EditUser>} />
				<Route path={"/users/create"} element={<CreateUser></CreateUser>} />
			</Routes>
		</Router>
	);
}

export default App;
