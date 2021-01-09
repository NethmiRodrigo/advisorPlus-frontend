import React from "react";

function BlogPost({ heading, content, picSrc, author, date, tags }) {
	return (
		<div className="rounded p-1 m-1 shadow-md bg-white max-w-screen-sm">
			<div className="row">
				<div className="col">
					<div
						className="text-blue-700 font-bold text-xl"
						style={{ paddingLeft: "1vw", paddingTop: "0.3vw" }}
					>
						{heading}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-2">
					<div
						className="flex -space-x-1 overflow-hidden mt-4"
						style={{ paddingLeft: "1vw", paddingBottom: "1vh" }}
					>
						<img
							className="inline-block h-12 w-12 rounded-full ring-2 ring-white mr-4"
							src={picSrc}
							alt=""
						/>
					</div>
				</div>
				<div className="col">
					<div className="flex -space-x-1 overflow-hidden mt-4">
						<div className="text-sm">
							{author} <br />
							<div className="text-xs text-black text-opacity-50">{date}</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="flex -space-x-1 overflow-hidden mt-4">
						<div className="text-s text-black text-opacity-50">{tags}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogPost;
