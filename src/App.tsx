import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/home" exact component={Home}></Route>
					<Route path="/about" exact component={About}></Route>
					<Route path="/portfolio" exact component={Portfolio}></Route>
					<Route path="/blog" exact component={Blog}></Route>
					<Route path="/contact" exact component={Contact}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
