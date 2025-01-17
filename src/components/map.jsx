import LeafletMap from "./LeafletMap"
// import data from './mapdata.json'
import data from './monthly_wise_data.json'

import { useState } from "react"

function MapSection() {

      const [place, setPlace] = useState(data.mapdata[1])

      const locateOnMap = (item) => {

            setPlace(item)
      }
      return (


            <div className="mapSection">
                  <div className="ms-4">
                        <h1>Temple Tales</h1>
                        <h6 className="mb-4">Explore the Rich Heritage of India's Shrines</h6>
                  </div>
                  <div className="row">
                        <div className="col-12 col-sm-8">
                              <LeafletMap
                                    latitude={place.coordinates.latitude}
                                    longitute={place.coordinates.longitude}
                                    description={place.description}
                                    imageUrl={place.image}
                                    name = {place.name}
                                    state = {place.state}
                              />
                        </div>

                        <div className="col-12 col-sm-4 placeCardContainer">
                              {data.mapdata.map((place, index) => {
                                    return (
                                          <div className="placeCard" key={index} onClick={() => locateOnMap(place)}>
                                                <img src={place.image} alt="" />
                                                <h6>{place.name}</h6>
                                                <p>{place.description}</p>
                                          </div>
                                    )

                              })}

                        </div>

                  </div>
            </div>

      )
}

export default MapSection