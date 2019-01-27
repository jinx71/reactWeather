import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "1a1fc1d3ad5ad1ae7896abc205177ee2";
const GAPI_KEY = "AIzaSyCENR6Rxq0vg2nBlMPRFEFuVdA9mODvDjU";

class App extends React.Component{
    state = {
        temperature: undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined
    }
   handleClick = e => {
       e.preventDefault();
       this.setState({
         temperature: undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined  
       })
   }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();
        if(city && country){
        this.setState({
            temperature : data.main.temp,
            city : data.name,
            country : data.sys.country,
            humidity : data.main.humidity,
            description : data.weather[0].description,
            error : ""
        });
        }else{
            this.setState({
            temperature : undefined,
            city : undefined,
            country : undefined,
            humidity : undefined,
            description : undefined,
            error : "Please enter the value."
        });
        }
        
    }
    
    render(){
        return(
            <div>
    <div className = "wrapper">
       	<div className = "main">
            <div className = "container">
                <div className="row">
                   	<div className="title-container">
                            <Titles />
                    </div>
	                <div className="form-container">
	                    <Form getWeather = {this.getWeather}/>
                        <Weather 
	                    temperature = {this.state.temperature}
	                    humidity = {this.state.humidity}
	                    city = {this.state.city}
	                    country = {this.state.country}
	                    description = {this.state.description}
	                    error = {this.state.error}
                        
	                	/>
                        <button id="refresh" onClick={this.handleClick}>&#8634;</button>
	            	</div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
};
export default App;

                