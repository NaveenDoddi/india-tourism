import LeafletMap from "./LeafletMap"


function MapSection() {
      return (

            <div className="row">

                  <div className="col-12 col-md-8">
                        <LeafletMap lat={28.7041} long={77.1025} description={"therekr"}/>
                  </div>
                  <div className="col-12 col-md-4">

                  </div>

            </div>
      )
}


export default MapSection