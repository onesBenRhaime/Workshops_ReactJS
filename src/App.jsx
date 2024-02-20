import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense, useState } from "react";
const Header = React.lazy(() => import("./components/Header"));
const Counter = React.lazy(() => import("./components/Counter"));
const Products = React.lazy(() => import("./components/Products"));
const Events = React.lazy(() => import("./components/Events"));
const EventsDetails = React.lazy(() => import("./components/EventsDetails"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Users = React.lazy(() => import("./components/Users"));

function App() {
	// const [show, setShow] = useState(true);
	// let name = "Test";
	// let person = {
	// 	name: "Test",
	// 	age: 30,
	// };

	// let b = true;

	// const style1 = {
	// 	color: "red",
	// 	backgroundColor: "blue",
	// };

	// let students = [
	// 	{ name: "s1", age: 10 },
	// 	{ name: "s2", age: 20 },
	// 	{ name: "s3", age: 30 },
	// ];

	// function test() {
	// 	console.log("I m here");
	// }

	// function getPerson(person1) {
	// 	return person1;
	//	}

	const [role, setRole] = useState("admin");
	return (
		<>
			{/* <Header name={name} age="30" />
			<Counter PropName={name} />
			<button onClick={() => setShow(!show)}>Update Show</button>
			{show && <Products PropName={name} />}
			<h1> Hello, {name}</h1>
			<h2>Hello ,{getPerson("Test 2")}</h2>
			{b ? (
				<p style={style1}>{person.name}</p>
			) : (
				<p className="age">{person.age}</p>
			)}
			{b && <p>True</p>}
			{students.map((s, i) => {
				return (
					<ul key={i}>
						<li>{s.name}</li>
						<li>{s.age}</li>
					</ul>
				);
			})}
			<img />
			<button onClick={() => test()}>Click Me</button> */}
			{/* <Events /> */}

			{/*  Router With react */}
			<Suspense fallback={<h1> Loading</h1>}>
				<Header />
				<Routes>
					{/*{role == "admin" ? (
					<Route path="/admin" element={<Dashboard />}>
					 <Route path="users" element={<Users />} />
					</Route>
				) : ()}
				*/}

					<Route path="/events">
						<Route index element={<Events />} />
						<Route path=":id/:title" element={<EventsDetails />} />
					</Route>
					<Route path="/products" element={<Products />} />
					<Route path="/counter" element={<Counter />} />
					{/* <Route path="*" element={<h1>NotFound</h1>} /> */}
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
