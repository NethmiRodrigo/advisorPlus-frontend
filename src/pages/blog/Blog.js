import React from "react";

const Blog = () => {
	return (
		<React.Fragment>
			<div className="container mt-5" style={{marginBottom: '20vh'}}>
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
									href="#"
									className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
								>
									Post something
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid cols-3 gap-4 mt-5" style={{marginLeft: '3vw', marginRight: '3vw'}}>
					<div className="rounded p-5 m-2 shadow-lg bg-white max-w-screen-sm">
						<div className="text-blue-700 font-bold text-xl">
							Heading comes here
						</div>
						<div className="text-gray text-base mt-3 text-justify">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat aliqua.
						</div>
						<div className="flex -space-x-1 overflow-hidden mt-4">
							<img
								className="inline-block h-12 w-12 rounded-full ring-2 ring-white mr-4"
								src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<div className="text-sm">
								John Abarahams <br />
								<div className="text-xs text-black text-opacity-50">
									Posted 3 days before
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Blog;
