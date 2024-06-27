import brotherswater from "../assets/brotherswater.jpg";
import Header from "./Header.jsx";
import ShowDate from "./ShowDate.jsx";
import Clock from "./Clock.jsx";
import NavMenu from "./NavMenu.jsx";

export default function PageHome() {
	return (
		<div className="homepage">
			<section className="left-column">
				<img src={brotherswater} alt="Cloud Image" />
			</section>
			<section className="right-column">
				<NavMenu />
				<Header />
				<ShowDate />
				<Clock />
			</section>
		</div>
	);
}
