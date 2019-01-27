import React from "react";
import Country from './country';
class Weather extends React.Component{
    render(){
        return(
            <div className="weather__info" onclick = {this.handleClick}>
                {
                this.props.country && this.props.city && 
                    <p className="weather__key">Location : <span className="weather__value"> {this.props.city},{this.props.country} </span> 
                    </p>
                }
                {
                this.props.temperature && 
                <p className="weather__key"> Temperature : <span className="weather__value">{Math.floor(this.props.temperature-273)}&#8451;</span> 
                    </p>
                }
                {
                this.props.humidity && <p className="weather__key">Humidity : <span className="weather__value">{this.props.humidity}%</span>
                    </p> 
                }
                {this.props.description && <p className="weather__key"> Conditions : <span className="weather__value">{this.props.description}</span></p>}
                {this.props.error && <p className="weather__key"> ERROR : <span className="weather__error">{this.props.error}</span></p>}
            </div>
                
        )
    }
};
export default Weather;
 