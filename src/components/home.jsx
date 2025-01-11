
import React from "react"
import Header from './navbar'
import Landing from './landingPage'
import Things from './thingsToDoSliders'
import Filter from "./filter"
import LandVedio from "./landing2"
import LeafletMap from "./mapjs"
function Home() {
      return (
            <>
                  <Header />
                  <Landing />
                  <Things />

                  <div className="row">
                        <div className="col-12 col-md-8">
                              <LeafletMap />
                        </div>      
                        <div className="col-12 col-md-4">

                        </div>



                  </div>


                  <Filter />
                  <LandVedio />
            </>
      )
}

export default Home