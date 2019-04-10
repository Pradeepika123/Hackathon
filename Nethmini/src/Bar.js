import React,{Component} from 'react';
//import search from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import AboutUs from "./AboutUs";

export default class Bar extends Component {
    render() {
        return (
            <table width="1000">
                <tr>
                    <th colSpan="200">
                       <Home/>

                    </th>
                    <th colSpan="100">
                        <AboutUs/>

                    </th>
                    <th colSpan="300">
                        <ContactUs/>
                    </th>
                </tr>
            </table>
        );
    }
}