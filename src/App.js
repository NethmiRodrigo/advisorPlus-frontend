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
import AdvisorProfile from "./pages/profile/AdvisorProfile";
import ViewAdvisorProfile from "./pages/profile/ViewAdvisorProfile";
import UserProfile from "./pages/profile/UserProfile";
import ViewUserProfile from "./pages/profile/ViewUserProfile";
import ViewBlogPost from "./pages/blog/ViewBlogPost";
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import {
	logoutUser,
	getUserDetails,
	getAdvsiorDetails,
} from "./redux/actions/user_actions";

import Category1 from "./pages/advisors/Category1";
import Category2 from "./pages/advisors/Category2";
import Category3 from "./pages/advisors/Category3";
import Category4 from "./pages/advisors/Category4";
import Category5 from "./pages/advisors/Category5";
import Category6 from "./pages/advisors/Category6";

axios.defaults.baseURL = "http://localhost:5000";

const token = localStorage.AdvsiorPlusToken;

if (token) {
	const decodedToken = jwtDecode(token);
	const type = atob(localStorage.AdvsiorPlusUser);
	//Check if token is expired
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
	} else {
		const tokenCode = token.split(" ")[1];
		axios.defaults.headers.common["Authorization"] = token;
		if (type === "user") store.dispatch(getUserDetails(tokenCode));
		else if (type === "advisor") store.dispatch(getAdvsiorDetails(tokenCode));
		store.dispatch({ type: SET_AUTHENTICATED });
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
						<Route path="/advisors-category-2" component={Category2} />
						<Route path="/advisors-category-3" component={Category3} />
						<Route path="/advisors-category-4" component={Category4} />
						<Route path="/advisors-category-5" component={Category5} />
						<Route path="/advisors-category-6" component={Category6} />
						<Route path="/advisor-profile" component={AdvisorProfile} />
						<Route path="/advisor-view" component={ViewAdvisorProfile} />
						<Route path="/user-profile" component={UserProfile} />
						<Route path="/user-view" component={ViewUserProfile} />
						<Route path="/blogpost-visitorview" component={ViewBlogPost} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
