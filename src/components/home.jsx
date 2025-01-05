
import React from "react"
import Header from './navbar'
import Landing from './landingPage'
import Things from './thingsToDoSliders'
import Filter from "./filter"
function Home() {
      return (
            <>
                  <Header />
                  <Landing />
                  <Things />
                  <Filter />
            </>
      )
}

export default Home