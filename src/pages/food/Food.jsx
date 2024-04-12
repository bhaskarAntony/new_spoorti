import React from 'react'
import './style.css'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'bootstrap/dist/js/bootstrap.bundle'
import FoodItems from './FoodItems'

function Food() {
  return (
    <Tabs
    defaultActiveKey="veg"
    id="uncontrolled-tab-example"
    className="mb-3 food-tabs"
  >
    <Tab eventKey="veg" title="veg">
      <FoodItems/>
    </Tab>
    <Tab eventKey="nonveg" title="nonveg">
      Tab content for Profile
    </Tab>
  </Tabs>
  )
}

export default Food