import React from "react";
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { json } from "body-parser";

function CityPageExperience(props) {

      const settings = {
            // centerMode: true, // Enables centering of the slides
            // centerPadding: "50px", // Amount of the side slides visible (adjust as needed)
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
                              // centerPadding: "40px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 675, // For small screens
                        settings: {
                              slidesToShow: 2, // Show 2 slides
                              // centerPadding: "30px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 480, // For extra-small screens
                        settings: {
                              slidesToShow: 1, // Show 1 slide
                              // centerPadding: "20px", // Adjust side padding
                        },
                  },
            ],
      };
      props.data.map((i, index) => console.log(i['state']))

      return (
            <div className="inc-experience-main">
                  <div>
                        <p>- explore -</p>
                        <h1>EXPERIENCES</h1>

                  </div>
                  <div>
                        <Slider style={{ paddingTop: '5vh' }} {...settings}>
                              {props.data.map((i, index) =>
                                    <div className="inc-experience-card" key={index}>
                                          <Card key={index} className="inc-experience-image-container">
                                                {/* <Card.Img variant="top" src={i['image']} /> */}
                                                <Card.Body style={{ backgroundColor: "black", color: "white", height: "10rem" }}>

                                                      <Card.Title>
                                                      {i['state'] ?
                                                                  <div>
                                                                        <span style={{color:"red"}} dangerouslySetInnerHTML={{ __html: i['state'].replace(/\n/g, "<br />") }}></span>
                                                                        &nbsp;|&nbsp;
                                                                        <span>{i['crafts']}</span>
                                                                  </div>
                                                            : ""}
                                                      </Card.Title>
                                                      <Card.Text>
                                                            

                                                            {i["text"]}
                                                      </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </div>

                              )}

                        </Slider>
                  </div>

            </div>
      )
}


export default CityPageExperience
