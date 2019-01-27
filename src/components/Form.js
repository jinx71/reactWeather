import React from "react";
import Country from './country';
import City from './city';
class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <Country />
                    <button>Get Weather </button>
                </form>
            </div>
        )   
    }
};
export default Form;