import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';

// Airtable query
export const query = graphql`
  query MyQueryDeco {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}) {
      nodes {
        data {
          Nom_d_achat
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Statut
        }
      }
    }
  }
`;

export default ({data}) => (
  <React.Fragment>
    < Header />
    < Navbar />
    <div className="container category">
      <div className="sidebar">
        <h1>Décoration</h1>
        <hr/>
        <ul>
          <li>Décoration type 1</li>
          <li>Décoration type 2</li>
          <li>Décoration type 3</li>
          <li>Décoration type 4</li>
          <li>Décoration type 5</li>
          <li>Décoration type 6</li>
          <li>Décoration type 7</li>
        </ul>
      </div>
      <div className="row-3">
        {data.allAirtable.nodes.map(node => (
          <Card
            cardDesc={node.data.Titre_de_l_annonce__FR_}
            cardPrice={node.data.Prix_de_vente}
            cardSold={node.data.Statut}>
          </Card>
        ))}
      </div>
    </div>
    <NewsletterAd />
    <Footer />
  </React.Fragment>
)
