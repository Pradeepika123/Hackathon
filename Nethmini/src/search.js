import React,{Component} from 'react';

export default class search extends Component {
    // constructor(props){
    // super(props);
    // this.handleSubmit=this.handleSubmit.bind(this);
    // }
    //
    // handleSubmit(e){
    //     alert('the value is:'+this.input.value);
    //     e.preventDefault();
    // }


    // render() {
    //     return (
    //         <div>
    //         <form onSubmit={this.handleSubmit}>
    //
    //             <input type="text" placeholder='Enter The City Name' ref={(input)=>this.input=input}/>
    //
    //             <button type="submit" >Search</button>
    //
    //         </form>
    //         </div>
    //             );
        render() {
            return (
                <div>
                    <form onSubmit="">

                        <input type="text" placeholder='Enter The City Name' />

                        <button type="submit" >Search</button>

                    </form>
                </div>
            );

}
        }


