import React from 'react';
import BasicMenu from "./BasicMenu";

// const mainTextStyle = {
//   marginTop: '20%'
// }
const Carousel = () => {
  return (
	<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
	  <div className="carousel-indicators">
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
				aria-current="true" aria-label="Slide 1"></button>
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
				aria-label="Slide 2"></button>
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
				aria-label="Slide 3"></button>
	  </div>
	  <div className="carousel-inner">
		<div className="carousel-item active position-relative">
		  <img src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" className="d-block w-100" alt="..."/>
			<div className="one carousel-caption d-block position-absolute top-0 end-50">
			  <h3 className="text">Welcome to my project's list</h3>
			  <p className="d-none d-sm-block">Here is some small part of that I can.</p>
			  <BasicMenu/>
			</div>
		</div>
		<div className="carousel-item position-relative">
		  <img src="https://images.unsplash.com/photo-1525972385596-02ad3049150b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" className="d-block w-100" alt="..."/>
			<div className="carousel-caption d-block position-absolute top-10 start-60">
			  <h3 className="text">I like to improve my knowledge</h3>
			</div>
		</div>
		<div className="carousel-item position-relative">
		  <img src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="d-block w-100" alt="..."/>
			<div className="carousel-caption d-block position-absolute bottom-30 start-50">
			  <h3 className="text">Let's do it together!</h3>
			  <p className="d-none d-sm-block">Would be glad to join your team for creating amazing app.</p>
			</div>
		</div>
	  </div>
	  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
			  data-bs-slide="prev">
		<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		<span className="visually-hidden">Previous</span>
	  </button>
	  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
			  data-bs-slide="next">
		<span className="carousel-control-next-icon" aria-hidden="true"></span>
		<span className="visually-hidden">Next</span>
	  </button>
	</div>
  );
};

export default Carousel;
