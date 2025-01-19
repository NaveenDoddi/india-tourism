
import React from "react"
import Header from './navbar'
import Landing from './landingPage'
import Things from './thingsToDoSliders'
import Filter from "./filter"
import LandVedio from "./landing2"
import MapSection from "./map"
function Home() {
      return (
            <>
                  {/* <Header />
                  <Landing />
                  <Things />
                  <MapSection />
                  <LandVedio /> */}
                  <Filter />
            </>
      )
}

export default Home