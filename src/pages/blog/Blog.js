import React, { Component } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllPosts, createPost } from "../../redux/actions/data_actions";

import BlogPost from "../../components/blog/BlogPost";
import { Alert } from "react-bootstrap";

class Blog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			author: "",
			date: "",
			tags: [],
			content: "",
			published: [],
			postModal: false,
			searchQuery: "",
			posts: [],
		};
		this.getPosts();
	}

	titleChangeHandler = (event) => {
		this.setState({
			title: event.target.value,
		});
	};

	getPosts = () => {
		this.props.getAllPosts();
		if (this.props.posts.length > 0 && this.props.posts[0] !== "") {
			this.setState({
				posts: this.props.posts,
			});
		}
	};

	contentChangeHandler = (event) => {
		this.setState({
			content: event.target.value,
		});
	};

	viewPostModal = (event) => {
		this.setState({
			postModal: true,
		});
	};

	submitPost = (event) => {
		event.preventDefault();
		const post = {
			user_id: this.props.user.data.user_id,
			body: this.state.content,
			title: this.state.title,
			service: "",
			audience: "",
			content: this.state.content,
		};
		this.props.createPost(post, this.props.history);
		this.props.getAllPosts();

		this.setState({
			error: this.props.ui.errors,
			postModal: false,
		});
	};

	cancelPost = (event) => {
		this.setState({
			postModal: false,
		});
	};

	searchHandler = (event) => {
		this.setState({
			searchQuery: event.target.value,
		});
	};

	performSearch = (event) => {
		// Use "this.state.searchQuery" to perform the search
	};

	render() {
		return (
			<React.Fragment>
				<div className="container mt-5" style={{ marginBottom: "20vh" }}>
					<div className="bg-indigo-600 w-full">
						<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
							<div className="flex items-center justify-between flex-wrap">
								<div className="w-0 flex-1 flex items-center">
									<p className="ml-3 font-medium text-white truncate">
										<span className="hidden md:inline">
											This forum is to post anything that you like. Go ahead and
											explore!
										</span>
									</p>
								</div>
								<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
									<a
										className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
										onClick={this.viewPostModal}
										style={{
											cursor: "pointer",
										}}
									>
										Post something
									</a>

									{/* Publish post */}
									<Modal isOpen={this.state.postModal}>
										<form onSubmit={this.submitPost}>
											<div
												className="form-group"
												style={{ marginBottom: "5vh", marginTop: "2vh" }}
											>
												<div className="container">
													<div className="row">
														<div className="col-1">
															<img
																src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
																className="inline-block h-20 w-20 rounded-full mr-3"
															/>
														</div>
														<div className="col">
															<div className="row">
																<p style={{ fontSize: "2em" }}>
																	{" "}
																	{this.props.user.data.full_name}{" "}
																</p>
															</div>
															<div className="row">
																{" "}
																{new Date().toISOString()}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												className="form-group"
												style={{ marginBottom: "2vh" }}
											>
												<input
													type="text"
													className="form-control"
													id="title"
													required
													placeholder="Post title here..."
													onChange={this.titleChangeHandler}
												/>
											</div>
											<div className="form-group">
												<textarea
													type="text"
													className="form-control"
													id="content"
													required
													placeholder="What do you want to talk about?"
													onChange={this.contentChangeHandler}
												/>
											</div>
											<button
												style={{ marginTop: "50px", marginRight: "10px" }}
												type="submit"
												className="btn btn-primary"
											>
												Submit Post
											</button>
											<button
												style={{ marginTop: "50px", marginLeft: "10px" }}
												className="btn btn-danger"
												onClick={this.cancelPost}
											>
												Cancel
											</button>
										</form>
									</Modal>
									{/* Publish post */}
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div className="card" style={{ marginTop: "2vh" }}>
								<div className="card-body" style={{ background: "#D0F3DF" }}>
									<div
										className="grid grid cols-3 gap-4 mt-5"
										style={{ marginLeft: "3vw", marginRight: "3vw" }}
									>
										<p
											className="display-3"
											align="center"
											style={{ color: "#008080" }}
										>
											Other Posts
										</p>
										<form onSubmit={this.performSearch}>
											<div className="form-group">
												<div
													class="card text-center"
													style={{ background: "#AED6F1" }}
												>
													<div class="card-body">
														<input
															type="text"
															className="form-control"
															id="searchbar"
															placeholder="Search something..."
															onChange={this.searchHandler}
														/>{" "}
														<br />
														<button
															type="submit"
															className="form-control btn btn-info"
															id="searchbtn"
															style={{ width: "10vw" }}
														>
															{" "}
															Search{" "}
														</button>
													</div>
												</div>
											</div>
										</form>
										{this.state.posts.length > 0 &&
										this.state.posts[0] !== "" ? (
											this.state.posts.map((post) => (
												<Link to="/blogpost-visitorview">
													<BlogPost
														heading={post.title}
														content={post.body}
														picSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
														author="John Doe"
														date={post.createdAt}
														tags="Tags"
													/>
												</Link>
											))
										) : (
											<Alert variant="warning">No posts found!</Alert>
										)}
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div className="card" style={{ marginTop: "2vh" }}>
								<div className="card-body" style={{ background: "#D0F3DF" }}>
									<div
										className="grid grid cols-3 gap-4 mt-5"
										style={{ marginLeft: "3vw", marginRight: "3vw" }}
									>
										<p
											className="display-3"
											align="center"
											style={{ color: "#008080" }}
										>
											My Posts
										</p>
										{this.state.published.map((post) => (
											<Link to="/blogpost-visitorview">{post}</Link>
										))}
										{/* <BlogPost
											heading="Heading"
											content="Content"
											picSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
											author="Author"
											date="Date"
											tags="Tags"
										/> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Blog.propTypes = {
	posts: PropTypes.object.isRequired,
	user: PropTypes.func.isRequired,
	getAllPosts: PropTypes.func.isRequired,
	createPost: PropTypes.func.isRequired,
};

const mapActionsToProps = {
	getAllPosts,
	createPost,
};

const mapStateToProps = (state) => ({
	posts: state.data.posts,
	user: state.user,
	ui: state.ui,
});

export default connect(mapStateToProps, mapActionsToProps)(Blog);
