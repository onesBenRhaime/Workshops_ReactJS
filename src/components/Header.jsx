import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
	console.log(props);
	const id = 1;
	const title = "ones";
	return (
		<>
			{/* <h1>{props.name}</h1>
			<h1>{props.age}</h1> 
		 */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Header
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link active" aria-current="page">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/events" className="nav-link">
									Events
								</Link>
							</li>
							<li className="nav-item">
								<NavLink
									to={`${id}/${title}`}
									style={({ isActive }) => {
										textDecoration: isActive ? "underline" : "none";
									}}
									className="nav-link"
								>
									Events Details
								</NavLink>
							</li>
							<li className="nav-item">
								<Link to="/products" className="nav-link">
									Products
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Counter
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
