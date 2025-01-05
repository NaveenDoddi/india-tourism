import React, { useRef } from "react"
import data from './monthly_wise_data.json'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from "react-icons/ci";

// import { IoSunnyOutline, IoPartlySunnyOutline } from "react-icons/io5";
// import { MdOutlineSevereCold } from "react-icons/md";
// import { TiWeatherWindyCloudy } from "react-icons/ti";


import PlaceContext from './contextApi'
      
function Things() {

      const scroll = useRef();      

      function scrolltoLeft() {
            scroll.current.scrollLeft -= 570;            
      }
      function scrolltoRight() {
            scroll.current.scrollLeft += 570;
      }

      return (
            <div className="thisMonth">                  
                  <div className="d-flex justify-content-between">
                        <div><h1>Places To Visit This <span>Month</span></h1></div>
                        <div className="d-flex align-items-center">
                              <div>
                                    <Button style={{backgroundColor:'#8B008B'}} onClick={scrolltoLeft}> <FaArrowCircleLeft /> </Button>
                                    <Button style={{backgroundColor:'#8B008B'}} onClick={scrolltoRight}> <FaArrowCircleRight /> </Button>
                              </div>
                              
                        </div>
                  </div>
                  
                  <div className="thisMonthItems" ref={scroll}>
                        {data.places_to_visit.map((place, index) => (
                              <Card>
                                    <Card.Img variant="top" height='300' src={place.image} />

                                    <Card.ImgOverlay>
                                          
                                          {place.activities.map((activity)=>(
                                                <Card.Text className="text-wrap text-break">
                                                      {activity}
                                                </Card.Text>
                                          ))}
                                          
                                    </Card.ImgOverlay>

                                    <Card.Body>
                                          <Card.Text className="row">
                                                <div style={{color:'#8B008B'}} className="col-sm-12 col-lg-6 text-sm-start fw-bold"><CiLocationOn /> {place.name}, {place.state}</div>
                                                <div className="col-sm-12 col-lg-6 text-sm-start text-lg-end"> <MdFlightTakeoff /> {place.nearest_airport}</div>
                                          </Card.Text>
                                          <Card.Text className="text-wrap text-break">
                                                {place.description}
                                          </Card.Text>
                                          <Card.Text className="row">

                                                <div className="col-6 text-start fw-bold"> {place.category[0]} </div>
                                                <div className="col-6 text-end"> {place.temperature} </div>
                                    
                                          </Card.Text>
                                          <Button size="sm" style={{backgroundColor:'#8B008B'}}>explore more</Button>
                                    </Card.Body>
                              </Card>

                        ))}
                  </div>
            </div>
      )
}

export default Things