import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

export default () => (
  <div className="container category">
    <div className="sidebar">
      <h1>Mobilier</h1>
      <hr/>
      <ul>
        <li>Mobilier type 1</li>
        <li>Mobilier type 2</li>
        <li>Mobilier type 3</li>
        <li>Mobilier type 4</li>
        <li>Mobilier type 5</li>
        <li>Mobilier type 6</li>
        <li>Mobilier type 7</li>
      </ul>
    </div>
    <div className="row-3">
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.400">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.800">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="1.500"
        cardSold="Vendu">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.500">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.400">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.800">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="1.500">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.500">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.400">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.800">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="1.500">
      </Card>
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.500">
      </Card>
    </div>
  </div>
)
