import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';


class Assises extends React.Component {


  render(){
    return (
      <React.Fragment>
        < Header />
        < Navbar />
        <div className="container category">
          <div className="sidebar">
            <h1>Assises</h1>
            <hr/>
            <ul>
           <li onClick={this.toggleCheck}>
                <input type="checkbox"  />
                <span>Toutes les assises</span>
                </li>
           <li onClick={this.toggleCheck}>
                <input type="checkbox"  />
                <span>Fauteuils</span>
                </li>
            <li onClick={this.toggleCheck}>
                <input type="checkbox"  />
                <span>Chaises</span>
                </li>
          <li onClick={this.toggleCheck}>
              <input type="checkbox"  />
                <span>Canapés</span>
                </li>
            <li onClick={this.toggleCheck}>
              <input type="checkbox"  />
                <span>Tabourets</span>
                </li> 
           <li onClick={this.toggleCheck}>
              <input type="checkbox"  />
                <span className="checkbox-text">Tables</span>
                </li>
           <li onClick={this.toggleCheck}>
              <input type="checkbox"  />
                <span>Autres</span>
                </li>
                </ul>
          </div>
          <div className="row-3">
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="2.400"
              cardSold="Vendu">
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
              cardPrice="2.500"
              cardSold="Vendu">
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
        <NewsletterAd />
        <Footer />
      </React.Fragment>
      )
    } 
  }

export default Assises