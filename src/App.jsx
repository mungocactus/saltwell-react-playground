import brotherswater from "./assets/brotherswater.jpg";
import Header from "./components/Header.jsx";
import ShowDate from "./components/ShowDate.jsx";
import Clock from "./components/Clock.jsx";
// import "./App.css";

function App() {
	return (
		<div className="homepage">
			<section className="left-column">
				<img src={brotherswater} alt="Cloud Image" />
			</section>
			<section className="right-column">
				<menu>
					<p>NASA</p>
					<p>Weather</p>
					<p>Home</p>
				</menu>
				<Header />
				<ShowDate />
				<Clock />
			</section>
		</div>
	);
}

export default App;
