import { WEEK_DAYS, MONTHS } from "../data.js";

export default function ShowDate() {
	const currentTime = new Date();

	return (
		<div className="calendar">
			<h2>{WEEK_DAYS[currentTime.getDay()]}</h2>
			<div className="date">
				<h3>
					{currentTime.getUTCDate()} {MONTHS[currentTime.getUTCMonth()]}{" "}
					{currentTime.getUTCFullYear()}
				</h3>
			</div>
		</div>
	);
}
