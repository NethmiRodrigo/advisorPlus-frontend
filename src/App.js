import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterForm from "./pages/register/RegisterForm";
import RegisterUser from "./pages/register/RegisterUser";
import RegisterAdvisor from "./pages/register/RegisterAdvisor";
import Blog from "./pages/blog/Blog";
import CategoryNav from "./components/navbar/CategoryNav";
import Footer from "./components/footer/Footer";
import Category1 from "./pages/advisors/Category1";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/user_actions";

axios.defaults.baseURL = "http://localhost:5000";

const token = localStorage.AdvsiorPlusToken;

if (token) {
	const decodedToken = jwtDecode(token);
	//Check if token is expired
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
		window.location.href = "/login";
	} else {
		store.dispatch({ type: SET_AUTHENTICATED });
		axios.defaults.headers.common["Authorization"] = token;
		store.dispatch(getUserData(token));
	}
}

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Navbar />
					<CategoryNav />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/register" component={RegisterForm} />
						<Route path="/blog" component={Blog} />
						<Route path="/login" component={Login} />
						<Route path="/register-user" exact component={RegisterUser} />
						<Route path="/register-advisor" exact component={RegisterAdvisor} />
						<Route path="/advisors-category-1" component={Category1} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
