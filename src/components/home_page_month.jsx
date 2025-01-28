import React, { useRef } from "react"
import data from './monthly_wise_data.json'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { IoSunnyOutline, IoPartlySunnyOutline } from "react-icons/io5";
// import { MdOutlineSevereCold } from "react-icons/md";
// import { TiWeatherWindyCloudy } from "react-icons/ti";


import PlaceContext from './contextApi'

function HomePageMonth() {

      const settings = {
            centerMode: true, // Enables centering of the slides
            centerPadding: "50px", // Amount of the side slides visible (adjust as needed)
            slidesToShow: 3, // Number of slides to show in the center
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            // arrows: false, 
            responsive: [
                  {
                        breakpoint: 1024, // For medium screens
                        settings: {
                              slidesToShow: 3, // Show 3 slides
                              centerPadding: "40px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 768, // For small screens
                        settings: {
                              slidesToShow: 2, // Show 2 slides
                              centerPadding: "30px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 480, // For extra-small screens
                        settings: {
                              slidesToShow: 1, // Show 1 slide
                              centerPadding: "20px", // Adjust side padding
                        },
                  },
            ],
      };

      const scroll = useRef();

      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const d = new Date();
      let month = months[d.getMonth()]

      return (
            <div className="home-page-month">

                  <div>
                        <h1 className="fw-bold text-center">Best Places To Visit This {month.toUpperCase()}</h1>
                  </div>

                  <div className="home-page-month_items" ref={scroll}>
                        <Slider {...settings}>
                              {data[month].map((place, index) => (
                                    <div className="inc-home-page-month-card">
                                          <Card key={index} >

                                                <Card.Img variant="top" style={{ height: "15rem" }} src={place.image} />

                                                <Card.ImgOverlay>

                                                      {place.activities.map((activity, key) => (
                                                            <Card.Text key={key} className="text-wrap text-break">
                                                                  {activity}
                                                            </Card.Text>
                                                      ))}

                                                </Card.ImgOverlay>

                                                <Card.Body style={{ height: "15rem" }} >
                                                      <Card.Text>
                                                            <div className="text-start">
                                                                  <div style={{ color: 'red' }} className="fw-bold"><CiLocationOn /> {place.name}, {place.state}</div>
                                                                  <div> <MdFlightTakeoff /> {place.nearest_airport}</div>
                                                            </div>

                                                            <div>
                                                                  {place.description}
                                                            </div>

                                                            <div className="row">
                                                                  <div className="col-7 text-start fw-bold text-wrap text-break"> {place.category[0]} </div>
                                                                  <div className="col-5 fs-sm"> {place.temperature} </div>
                                                            </div>

                                                            <Button size="sm" style={{ backgroundColor: 'red', padding:"0.4rem 1rem", fontWeight:"bold", borderRadius:"1rem" }}>Explore</Button>

                                                      </Card.Text>

                                                </Card.Body>
                                          </Card>
                                    </div>

                              ))}
                        </Slider>

                  </div>
            </div>
      )
}

export default HomePageMonth;