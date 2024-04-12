import React from 'react'
import './style.css'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'bootstrap/dist/js/bootstrap.bundle'
import FoodItems from './FoodItems'

function Food() {
  return (
    <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3 food-tabs"
  >
    <Tab eventKey="home" title="veg">
      <FoodItems/>
    </Tab>
    <Tab eventKey="profile" title="Non veg">
      Tab content for Profile
    </Tab>
  </Tabs>
  )
}

export default Food