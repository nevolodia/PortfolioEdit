import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/app.css';
import Layout from "./components/Layout";
import The404Page from "./pages/The404Page";
import MyHomePage from "./pages/MyHomePage";
import MyProjectsPage from "./pages/MyProjects";
import MyResumePage from "./pages/MyResume";
import MyContactsPage from "./pages/MyContacts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MyHomePage />} />
					<Route path="projects" element={<MyProjectsPage />} />
					<Route path="resume" element={<MyResumePage />} />
					<Route path="contacts" element={<MyContactsPage />} />
					<Route path="*" element={<The404Page />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
