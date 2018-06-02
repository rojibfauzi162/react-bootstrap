import React, { Component } from 'react'
import { Grid, Row, Col, Image }  from 'react-bootstrap';
import './News.css';

export default class News extends Component{
	render(){
		return(
			<div>
				<Image src="assets/cover.jpg" className="header-image" />
				<Grid>
					<h2>News</h2>
					<Row>
						<Col xs={12} sm={8} className="main-section">
							<h3>React is very helpfully</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur imperdiet viverra. Ut odio tellus, feugiat et ultrices eu, luctus eu nisl. Nam leo felis, finibus nec sem vel, porttitor sodales ipsum. Pellentesque cursus ex quis eros pulvinar elementum. In ac vulputate felis. Donec id dolor in urna maximus tempus id a justo. Phasellus nisi dolor, blandit sit amet lacinia nec, condimentum ut justo.</p>
							<p>Suspendisse vel finibus ipsum, et condimentum nisl. Quisque laoreet, neque ut convallis convallis, ex quam mollis ligula, id tempus ligula sapien eget dolor. Quisque consectetur elementum velit non gravida. Mauris laoreet lobortis hendrerit. Nunc convallis leo a convallis tincidunt. Pellentesque consequat libero id placerat pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras massa tellus, dapibus et risus vehicula, condimentum facilisis mi.</p>
							<br/>
							<h3>Front end Developer 2018</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur imperdiet viverra. Ut odio tellus, feugiat et ultrices eu, luctus eu nisl. Nam leo felis, finibus nec sem vel, porttitor sodales ipsum. Pellentesque cursus ex quis eros pulvinar elementum. In ac vulputate felis. Donec id dolor in urna maximus tempus id a justo. Phasellus nisi dolor, blandit sit amet lacinia nec, condimentum ut justo.</p>
							<p>Suspendisse vel finibus ipsum, et condimentum nisl. Quisque laoreet, neque ut convallis convallis, ex quam mollis ligula, id tempus ligula sapien eget dolor. Quisque consectetur elementum velit non gravida. Mauris laoreet lobortis hendrerit. Nunc convallis leo a convallis tincidunt. Pellentesque consequat libero id placerat pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras massa tellus, dapibus et risus vehicula, condimentum facilisis mi.</p>
							<br/>
							<h3>Round map web Developer </h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur imperdiet viverra. Ut odio tellus, feugiat et ultrices eu, luctus eu nisl. Nam leo felis, finibus nec sem vel, porttitor sodales ipsum. Pellentesque cursus ex quis eros pulvinar elementum. In ac vulputate felis. Donec id dolor in urna maximus tempus id a justo. Phasellus nisi dolor, blandit sit amet lacinia nec, condimentum ut justo.</p>
							<p>Suspendisse vel finibus ipsum, et condimentum nisl. Quisque laoreet, neque ut convallis convallis, ex quam mollis ligula, id tempus ligula sapien eget dolor. Quisque consectetur elementum velit non gravida. Mauris laoreet lobortis hendrerit. Nunc convallis leo a convallis tincidunt. Pellentesque consequat libero id placerat pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras massa tellus, dapibus et risus vehicula, condimentum facilisis mi.</p>
						</Col>
						<Col xs={12} sm={4} className="sidebar-section">
							<h4>Holiday with friend</h4>
							<Image src="assets/people.jpg"/>
							<p>Nullam pretium metus ligula, vel elementum odio pellentesque vel. Proin pharetra venenatis quam. Pellentesque lacus tellus, posuere vitae justo eu, eleifend ullamcorper eros. Morbi mattis mi sed ultrices ullamcorper.  odio. Proin a aliquam orci.</p>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}