import React from 'react';
// import ecommerceImg from '../../images/ecommerce-site.png';
import netflixCloneImg from '../../images/netflix.png';
// import contactKeeperImg from '../../images/contact-keeper.PNG';
// import chatAppImg from '../../images/socketio.png';
import Project from '../Project/Project';
// import gamerDiaryImg from '../../images/theGamerDiary.jpg';
import bookingApp from '../../images/bookingapp.png';
import crudApplication from '../../images/crudapplication.jpg';
import todolist from '../../images/todolist.png';
// import pricechart from '../../images/pricechart.png';
// import PingPong from '../../images/ping-pong.PNG';
import './Projects.css';

const Projects = () => {
	//List of projects
	const projects = [
		// {
		// 	title: 'The GamerDiary',
		// 	demoLink: 'https://the-gamer-diary.herokuapp.com/',
		// 	sourceCodeLink: 'https://github.com/Nishant-Bhosale/TheGamerDiary',
		// 	imageSrc: gamerDiaryImg,
		// },
		{
			title: 'Hotel Booking',
			demoLink: 'https://nostalgic-jones-a2b0d2.netlify.app/',
			sourceCodeLink: 'https://github.com/Abhay1kumar/HotelBookingWebsite',
			imageSrc: bookingApp,
		},
		{
			title: 'CRUD Application',
			demoLink: 'https://gallant-jennings-647af6.netlify.app/',
			sourceCodeLink: 'https://github.com/Abhay1kumar/FebTasks',
			imageSrc: crudApplication,
		},
		{
			title: 'TO-Do List',
			demoLink: 'https://practical-leakey-00dd9c.netlify.app/',
			sourceCodeLink: 'https://github.com/Abhay1kumar/Reach-To-do-list',
			imageSrc: todolist,
		},
		{
			title: 'Movie App',
			demoLink: 'https://abhay-kumar-movieapp.netlify.app/',
			sourceCodeLink: 'https://github.com/Abhay1kumar/MovieAPP',
			imageSrc: netflixCloneImg,
		},
		// {
		// 	title: 'E-Commerce WebApp',
		// 	demoLink: 'https://ecommerce-site-9d5dc7.netlify.app/',
		// 	sourceCodeLink: 'https://github.com/Nishant-Bhosale/amazon-clone',
		// 	imageSrc: ecommerceImg,
		// },
		// {
		// 	title: 'Netflix-Clone',
		// 	demoLink: 'http://netflix-movie-app-clone.herokuapp.com/',
		// 	sourceCodeLink: 'https://github.com/Nishant-Bhosale/MovieApp',
		// 	imageSrc: netflixCloneImg,
		// },
		// {
		// 	title: 'Contact-Keeper',
		// 	demoLink: 'http://contact-keeper7.herokuapp.com/',
		// 	sourceCodeLink: 'https://github.com/Nishant-Bhosale/ContackKeeper',
		// 	imageSrc: contactKeeperImg,
		// },
		// {
		// 	title: 'Chat-App',
		// 	demoLink: 'https://evening-badlands-19902.herokuapp.com/',
		// 	sourceCodeLink: 'https://github.com/Nishant-Bhosale/Chat-App',
		// 	imageSrc: chatAppImg,
		// },
		// {
		// 	title: 'Ping-Pong Game',
		// 	demoLink: 'https://ping-pong-yeyaaaa.netlify.app/',
		// 	sourceCodeLink:
		// 		'https://github.com/Nishant-Bhosale/Ping-Pong_Game',
		// 	imageSrc: PingPong,
		// },
	];

	return (
		<div style={{ background: 'rgb(40, 40, 40)' }}>
			<h1 className="work-heading">My Work</h1>
			<div id="work" className="projects-container" projects={projects}>
				{projects.map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
