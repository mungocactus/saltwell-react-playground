import NavMenu from "./NavMenu.jsx";
import ShowDate from "./ShowDate.jsx";
import benshamSkies from "../assets/bensham-skies.jpg";

export default function PageWeather() {
	return (
		<div className="homepage">
			<section className="right-column">
				<NavMenu />
				<div className="weather">
					<section className="weather-left">
						<header>
							<div className="heading">
								<h1 className="header-title">The</h1>
								<h1 className="header-title">Weather</h1>
								<h1 className="header-title">Today</h1>
							</div>
						</header>
						<ShowDate />
					</section>
					<section className="weather-right">
						<h4 className="weather-main">Clouds</h4>
						<h4>Current Temp</h4>
						<h4 className="weather-temp">19</h4>
						<h4 className="weather-location">Gateshead</h4>
						<h4 className="weather-extra">few clouds</h4>
						<h4>Humidity 73%</h4>
						<h4>Wind Speed 15 kpm</h4>
						<h4>Wind Direction</h4>
					</section>
				</div>
			</section>
			<section className="left-column">
				<img src={benshamSkies} alt="Cloud Image" />
			</section>
		</div>
	);
}
