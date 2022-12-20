import React from "react";
import { logo } from "../Constant/Img";
import { AiOutlineShopping } from "react-icons/ai";
const Header = () => {
	return (
		<>
			<div className="header-top">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="web-logo">
								<img src={logo} alt="" className="img-fluid" />
							</div>
						</div>
						<div className="col-md-6">
							<div class="input-group">
								<div className="col-md-4">
									<select
										className="form-select categories-input"
										id="inputGroupSelect04"
										aria-label="Example select with button addon"
									>
										<option selected>All Categories</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div className="col-md-6">
									<input
										type="text"
										className="form-control categories-input"
										aria-label="Text input with segmented dropdown button"
									/>
								</div>
								<div className="col-md-2">
									<div className="category-btn">
										<button
											className="btn btn btn-warning categories-input"
											type="button"
										>
											<i className="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="whislist-icons">
								<div className="heart">
									<i className="far fa-heart"></i>
									<span>1</span>
								</div>
								<div className="heart">
									<AiOutlineShopping />
									<span>1</span>
								</div>
								<span>$150.00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="header-bottom">
				<div className="container">
					<div className="all-header-bottom">
						<div className="col-md-2">
							<div className="mega-menu">
								<nav className="navbar navbar-dark bg-dark">
									<button
										className="navbar-toggler menu-bar"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#navbarToggleExternalContent"
										aria-controls="navbarToggleExternalContent"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<i class="fa fa-bars" aria-hidden="true"></i>
										<span>All departments</span>
										<span>
											<i class="fa fa-angle-down"></i>
										</span>
									</button>
								</nav>
								<div className="collapse" id="navbarToggleExternalContent">
									<div className="menu-bar-department">
										<ul>
											<li>
												<a href="javascript:void(0)">Lorem, ipsum.</a>
											</li>
											<li>
												<a href="javascript:void(0)">Lorem, ipsum.</a>
											</li>
											<li>
												<a href="javascript:void(0)">Lorem, ipsum.</a>
											</li>
											<li>
												<a href="javascript:void(0)">Lorem, ipsum.</a>
											</li>
											<li>
												<a href="javascript:void(0)">Lorem, ipsum.</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-10">
							<div className="web-nav">
								<ul>
									<li>
										<a href="javascript:void(0)">Home</a>
									</li>

									<li>
										<a href="javascript:void(0)">Collection</a>
									</li>
									<li>
										<a href="javascript:void(0)">Blog</a>
									</li>
									<li>
										<a href="javascript:void(0)">Contact</a>
									</li>
									<li>
										<a href="javascript:void(0)">pages </a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
