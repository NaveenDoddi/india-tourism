import LeafletMap from "./LeafletMap"
import data from './mapdata.json'
import { useState } from "react"

function MapSection() {

      const [place, setPlace] = useState(data.mapdata[1])

      const locateOnMap = (item) => {

            setPlace(item)
      }
      console.log(place.coordinates.latitude)
      console.log(place.coordinates.longitude)
      return (

            <div className="row">
                  <div className="col-12 col-md-8">
                        <LeafletMap
                              latitude = {place.coordinates.latitude}
                              longitute = {place.coordinates.longitude}
                              description = {place.description}
                              imageUrl = {place.imageUrl}
                        />
                  </div>

                  <div className="col-12 col-md-4">
                        {data.mapdata.map((place, index) => {
                              return (
                                    <div key={index}>
                                          <p>{place.name}</p>
                                          <p>{place.description}</p>
                                          <button onClick={() => locateOnMap(place)}>get</button>
                                    </div>
                              )

                        })}

                  </div>

            </div>
      )
}

export default MapSection