import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<AnimatePresence>
			<App />
		</AnimatePresence>
	</Provider>
);
