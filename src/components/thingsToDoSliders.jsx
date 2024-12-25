import React, { useState } from "react"
function Things() {

      const [data, set_places] = useState("")

      async function run(){

            await fetch("/monthly_wise_data.json")
            .then((response) => response.json())
            .then((data) => {
                  set_places(data)
            });      

      }

      console.log(data)


      return (
            <div>
                  <h1>Places to Visit</h1>
                  <div>
                        {data.places_to_visit.map((place, index) => (
                              <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                                    <h2>{place.name}, {place.state}</h2>
                                    <p><strong>Best Month:</strong> {place.best_month}</p>
                                    <p><strong>Temperature:</strong> {place.temperature}</p>
                                    <p><strong>Highlights:</strong> {place.highlights.join(", ")}</p>
                                    <p><strong>Activities:</strong> {place.activities.join(", ")}</p>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Things