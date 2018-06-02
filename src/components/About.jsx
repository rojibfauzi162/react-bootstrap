import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component{
	render(){
		return(
			<div>
				<Image src="assets/people.jpg" className="header-image"/>
				<Grid>
					<Col xs={12} sm={8} smOffset={2}>
						<Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
						<h3>Doni si coder</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur imperdiet viverra. Ut odio tellus, feugiat et ultrices eu, luctus eu nisl. Nam leo felis, finibus nec sem vel, porttitor sodales ipsum. Pellentesque cursus ex quis eros pulvinar elementum. In ac vulputate felis. Donec id dolor in urna maximus tempus id a justo. Phasellus nisi dolor, blandit sit amet lacinia nec, condimentum ut justo.</p>
						<p>Suspendisse vel finibus ipsum, et condimentum nisl. Quisque laoreet, neque ut convallis convallis, ex quam mollis ligula, id tempus ligula sapien eget dolor. Quisque consectetur elementum velit non gravida. Mauris laoreet lobortis hendrerit. Nunc convallis leo a convallis tincidunt. Pellentesque consequat libero id placerat pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras massa tellus, dapibus et risus vehicula, condimentum facilisis mi.</p>
						<p>Donec molestie sapien et augue convallis, ac gravida arcu maximus. Maecenas in fermentum ligula, quis elementum ligula. Vivamus pharetra quis nisl a aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur convallis accumsan justo quis ultrices. Mauris aliquet iaculis felis, ut dictum velit vulputate vel. Nunc ullamcorper neque nulla, sed condimentum tellus eleifend vel.</p>
					</Col>
				</Grid>
			</div>
		)
	}
}