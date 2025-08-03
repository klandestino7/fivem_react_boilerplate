import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import "./index.css"
import { App } from "./containers/App";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<VisibilityProvider>
			<App />
		</VisibilityProvider>
	</React.StrictMode>,
);
