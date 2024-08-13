import NavMenu from "./NavMenu.jsx";
import Inputs from "./Inputs.jsx";

export default function PageAboutYou() {
	return (
		<>
			<NavMenu />
			<section className="about-you">
				<div className="about-you-form">
					<h2>Lets get some details about you!</h2>
					<form>
						<Inputs
							labelFor="first"
							labelTitle="First Name"
							inputType="text"
							inputId="first"
							inputPlaceholder="First Name"
							error="Whoops!"
						/>
						<input></input>
					</form>
					<button>Submit</button>
				</div>
				<div className="about-you-details">
					<h2>Hello Paul, welcome!</h2>
					<div>
						<p>Details</p>
					</div>
					<button>Edit</button>
				</div>
			</section>
		</>
	);
}
