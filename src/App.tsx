import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.js.map";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/app.css';
import Layout from "./components/Layout";
import The404Page from "./pages/The404Page";
import MyHomePage from "./pages/MyHomePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MyHomePage />} />
					<Route path="*" element={<The404Page />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
