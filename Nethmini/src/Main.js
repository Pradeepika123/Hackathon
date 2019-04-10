import React,{Component} from 'react';
import Image from 'react-image-resizer';

import search from "./search";
import logo from './logo.jpg';
//console.log(logo);
export default class Main extends Component{
    render(){
        return(
            <div>
                <h1>Certified Travels</h1>
                <h2>Find Certified Shops of your favourite city</h2>

                <img src ={logo} alt="logo"
                height={400}
                     weight={100}
                />
                <search/>
                <footer>@copyright certified Travels 2019</footer>

            </div>
        )
    }
}