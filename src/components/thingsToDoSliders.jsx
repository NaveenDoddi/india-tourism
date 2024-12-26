import React, { useState } from "react"
import data from './monthly_wise_data.json'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiLocationOn } from "react-icons/ci";

function Things() {

      // function scrolltoLeft(element) {
      //       var div = element.parentElement.parentElement.parentElement.getElementsByTagName("div")[3]
      //       div.scrollLeft += 570;            
      // }
      // function scrolltoRight(element) {
      //       element.parentElement.parentElement.parentElement.getElementsByTagName("div")[3].scrollLeft -= 570;
      // }


      return (
            <div className="thisMonth">
                  <h1>Places To Visit This Month</h1>
                  <div className="thisMonthItems">
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
                                                <div className="col-sm-12 col-lg-6 text-sm-start fw-bold"><CiLocationOn /> {place.name}, {place.state}</div>
                                                <div className="col-sm-12 col-lg-6 text-sm-start text-lg-end"> <MdFlightTakeoff /> {place.nearest_airport}</div>
                                          </Card.Text>
                                          <Card.Text>
                                                {place.description}
                                          </Card.Text>
                                          <Card.Text>
                                                {place.temperature}
                                          </Card.Text>
                                          {/* <Card.Title>{place.activities[0]}</Card.Title> */}
                                          <Button variant="primary">explore more</Button>
                                    </Card.Body>
                              </Card>

                        ))}
                  </div>
            </div>
      )
}

export default Things