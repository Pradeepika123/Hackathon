import React, {Component} from 'react';
import AccommodationSearch from './AccommodationSearch';
import logo from './accommodationImg.jpg';

export default class Topics extends Component{
    render(){
        return(
            <div className='App'>
                <h1>CertifiedTravels</h1>
                <h3>Find Certified Accommodations Of Your Favourite City</h3>
                <img src={logo} height={550} width={1150}/>
                <br/><br/>
                <AccommodationSearch/>
                <br/><br/>
                <footer>&copy;CertifiedTravels 2019</footer>
            </div>
        );
    }
}