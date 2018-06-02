import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component{
	render(){
		return(

			<Grid>
				<Jumbotron>
					<h2>Welcome to Code.React Tutorial</h2>
					<p>This is tutorial for react router and react-bootstrap</p>
					<Link to="/about">
						<Button bsStyle="primary">About</Button>
					</Link>
				</Jumbotron>
				<Row className="show-grid text-center">
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/person-1.jpg" circle className="profile-pic"/>
						<h3>Joni</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac scelerisque erat. Vivamus ac auctor sem. Praesent ullamcorper ac nunc ac rutrum. </p>
					</Col>
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/person-2.jpg" circle className="profile-pic"/>
						<h3>Hadi</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac scelerisque erat. Vivamus ac auctor sem. Praesent ullamcorper ac nunc ac rutrum. </p>	
					</Col>
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/person-3.jpg" circle className="profile-pic"/>
						<h3>Desi</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac scelerisque erat. Vivamus ac auctor sem. Praesent ullamcorper ac nunc ac rutrum. </p>						
					</Col>
				</Row>
			</Grid>
		)
	}
}