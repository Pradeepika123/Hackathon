import React, {Component} from 'react';
import AccommodationList from './AccommodationList';

export default class AccommodationSearch extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        // alert('The value is: '+this.input.value);

        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Enter The City Name' ref={(input) => this.input = input}/>
                    <button type="submit">Search</button>
                </form>

                <AccommodationList/>
            </div>
        );
    }
}