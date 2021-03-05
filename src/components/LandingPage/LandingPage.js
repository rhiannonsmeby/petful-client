import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

export default class LandingPage extends React.Component {
  render() {
    return(
      <div className = 'landing'>
        <h1>Welcome to the Petful FIFO Shelter!</h1>
        <section className='img'>
            <img src='https://lh3.google.com/pw/ACtC-3fXsT21xszncEQUqN0wEDc8UBkLPsbwM0lAM_nCbqTHCLa9X2rlfZAyWrlRiuJj2P7UnBleMZFKYow1nkE6qx-2rMpxGuk=w713-h950-no?authuser=0' alt='smiling golden retriever' />
        </section>
        <p>
        The pet that's been here the longest is the pet that needs you most. 
        Click on the link below to see who's available for adoption and take a cat 
        or dog home today! Happy Adopting! 
        </p>
        <p><Link className='link' to={"/adoption"}>Start the adoption process</Link></p>
      </div>
    )
  }
}