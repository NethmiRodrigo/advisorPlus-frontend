import React, { Component } from "react";
import Comment from "../../components/blog/Comment";
import Modal from "react-modal";

class ViewBlogPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postCommentModal: false,
			username: "user",
			content: "",
			date: "date",
			published: [],
		};
	}

	publishComment = () => {
		const comment = (
			<Comment
				name={this.state.username}
				content={this.state.content}
				date={this.state.date}
			/>
		);

		this.setState({
			published: this.state.published.concat(comment),
			postCommentModal: false,
		});
	};

	openCommentModal = () => {
		this.setState({
			postCommentModal: true,
		});
	};

	changeContentHandler = (event) => {
		this.setState({
			content: event.target.value,
		});
	};

	render() {
		const { title, content, picSrc, date, tags, author, comments } = this.props;
		return (
			<div style={{ marginLeft: "3vw", marginRight: "3vw" }}>
				<div className="card" style={{ marginTop: "2vh" }}>
					<div className="card-body">
						<p className="display-6">Post title</p>
						<br />
						<div className="row">
							<div className="col-3">
								<p>
									by{" "}
									<span style={{ color: "grey" }}>
										<i>Author name comes here</i>
									</span>
								</p>
							</div>
							<div className="col-1">
								<p>Date</p>
							</div>
							<div className="col-2">
								<p>
									Views <span style={{ color: "grey" }}>Count</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="card">
					<div className="card-body">
						<div className="row">
							<div
								className="col-10"
								style={{ borderRight: "1px solid green", align: "justify" }}
							>
								<p style={{ padding: "1em", fontSize: "1.25em" }}>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum."
								</p>
							</div>
							<div className="col-2">
								<button type="button" className="btn btn-success">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										style={{ float: "left" }}
										width="19"
										height="19"
										fill="currentColor"
										class="bi bi-hand-thumbs-up-fill"
										viewBox="0 0 16 16"
									>
										<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.964.22.817.533 2.512.062 4.51a9.84 9.84 0 0 1 .443-.05c.713-.065 1.669-.072 2.516.21.518.173.994.68 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.162 3.162 0 0 1-.488.9c.054.153.076.313.076.465 0 .306-.089.626-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.826 4.826 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.616.849-.231 1.574-.786 2.132-1.41.56-.626.914-1.279 1.039-1.638.199-.575.356-1.54.428-2.59z" />
									</svg>
									<span style={{ marginLeft: "1em" }}></span>
									<span
										className="badge"
										style={{ color: "black", background: "white" }}
									>
										9
									</span>
								</button>
								<br />
								<button
									type="button"
									className="btn btn-secondary"
									style={{ marginTop: "2vh" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										style={{ float: "left" }}
										width="19"
										height="19"
										fill="currentColor"
										class="bi bi-hand-thumbs-down-fill"
										viewBox="0 0 16 16"
									>
										<path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
									</svg>
									<span style={{ marginLeft: "1em" }}></span>
									<span
										className="badge"
										style={{ color: "black", background: "white" }}
									>
										9
									</span>
								</button>
								<br />
								<button
									type="button"
									className="btn btn-danger"
									style={{ marginTop: "2vh" }}
								>
									<b>Report</b>
								</button>
								<br />
								<button
									type="button"
									className="btn btn-primary"
									style={{ marginTop: "2vh" }}
									onClick={this.openCommentModal}
								>
									<b>Comment</b>
								</button>
								{/* Publish comment */}
								<Modal isOpen={this.state.postCommentModal}>
									<form onSubmit={this.publishComment}>
										<div className="form-group" style={{ marginBottom: "2vh" }}>
											<textarea
												type="text"
												className="form-control"
												id="content"
												placeholder="What do you want to say?"
												onChange={this.changeContentHandler}
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
				<div className="card" style={{ marginBottom: "20%", marginTop: "1vh" }}>
					<div
						className="card-body"
						style={{ padding: "3em", paddingTop: "1em" }}
					>
						{this.state.published.map((comment) => comment)}
						{/* <Comment name="user" content="This is the content of the comment." date="" /> */}
					</div>
				</div>
			</div>
		);
	}
}

export default ViewBlogPost;
