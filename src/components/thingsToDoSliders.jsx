import React, { useState } from "react"
import data from './monthly_wise_data.json'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa"
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
                              <div key={index} className="card">

                                    <Card>
                                          <Card.Img variant="top" height='303' src={place.image} />
                                          <Card.Body>
                                                
                                                <Card.Text className="d-flex justify-content-between">
                                                      <span><CiLocationOn/> {place.name}, {place.state}</span>
                                                      <span>{place.nearest_airport}</span>
                                                </Card.Text>
                                                <Card.Title>{place.activities[0]}</Card.Title>
                                                <Button variant="primary">Go somewhere</Button>
                                          </Card.Body>
                                    </Card>

                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Things