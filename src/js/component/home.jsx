import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "../component/Navbar.jsx";
import Jumbo from "../component/Jumbo.jsx";
import Card from "../component/Card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid pl-5 pr-5">
			<NavBar></NavBar>
			<Jumbo
				title="A Warm Welcome!"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius iaculis ex eu imperdiet. Proin rhoncus eu dolor at hendrerit. Ut eget orci sed dolor pellentesque semper. Praesent eget ante at metus suscipit dignissim. Aliquam sed libero semper, posuere ipsum condimentum, dapibus urna. Suspendisse potenti. Praesent ipsum diam, placerat et congue nec, venenatis quis libero. Vestibulum hendrerit pretium tempor. Aliquam."
				buttonText="Call to action!"></Jumbo>
			<div className="row d-flex d-flex justify-content-around">
				<Card
					img="https://i.pinimg.com/474x/7a/f5/5d/7af55dc7a00222764d3e69c61d230c50.jpg"
					title="Suspicious Dog"
					text="This dog doesn't believe anything that you say"
					buttonText="Click to convince the dog"></Card>
				<Card
					img="https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C.jpg?resize=640,426"
					title="Halloween Dog"
					text="You can't have a better costume than this"
					buttonText="Click to buy this dog's costume"></Card>
				<Card
					img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoZKOi-IrFsjmMTt320jUkoh8KNVlY-Vupg&usqp=CAU"
					title="Stylish Dog"
					text="This dog sure has time to keep his hair nice"
					buttonText="Click to copy his hairstyle"></Card>
				<Card
					img="https://pbs.twimg.com/profile_images/820038924533895168/mjXRXAE5.jpg"
					title="Snoop Dog"
					text="Did this dog inspire the rapper?"
					buttonText="Click to find out"></Card>
			</div>
		</div>
	);
};

export default Home;
