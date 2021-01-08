import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import RegisterForm from "./components/register/RegisterForm";
import RegisterUser from "./components/register/RegisterUser";
import RegisterAdvisor from "./components/register/RegisterAdvisor";
import Blog from "./components/blog/Blog";
import CategoryNav from './components/navbar/CategoryNav';
import Footer from "./components/footer/Footer";
import Category1 from './components/advisors/Category1';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdvisorProfile from "./components/profile/AdvisorProfile";
import ViewAdvisorProfile from './components/profile/ViewAdvisorProfile';
import UserProfile from "./components/profile/UserProfile";
import ViewUserProfile from './components/profile/ViewUserProfile'; 
import ViewBlogPost from "./components/blog/ViewBlogPost";

function App() {
	return (
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
					<Route path="/advisor-profile" component={AdvisorProfile} />
					<Route path="/advisor-view" component={ViewAdvisorProfile} />
					<Route path="/user-profile" component={UserProfile} />
					<Route path="/user-view" component={ViewUserProfile} />
					<Route path="/blogpost-visitorview" component={ViewBlogPost} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
