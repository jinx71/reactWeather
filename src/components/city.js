import React, { Component } from 'react';
import Suggestion from 'search-suggestion';
import Country from './country';
import data from '../data/location.json';


//function getCityName(){
//    var countryName;
//    var element = document.getElementsByClassName('country');
//    console.log(typeof(element));
//    if(typeof(element[0]) == undefined){
//        window.setInterval(getCityName, 100);
//            
//    }else{
//         countryName = element.value;
////        console.log(countryName);
//        for(var i=0; i < data.length; i++){
//            if(data[i].country === countryName){
//                for(var j = 0; j < data[i].city.length; j++){
//                    items.push(data[i].city[j]);
//                }
//            }
//        }
//    }
//}
//console.log(items);
//getCityName();
class City extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
 
  handleChange = e => {
    const items = [];
    const countryName = this.props.countryName;
    console.log(countryName[0]);
      for(var i=0; i < data.length; i++){
            if(data[i].country === countryName[0]){
                for(var j = 0; j < data[i].city.length; j++){
                    items.push(data[i].city[j]);
                }
            }
      }
    const value = e.target.value;
    let dataSource = [];
    if (value) {
      dataSource = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    }
    this.setState({
      dataSource
    });
  };

  render() {
      
      
      
    
    return (
      <Suggestion
        getDisplayName={item => item}
        items={this.state.dataSource}
      >
        {({
          getInputProps,
          getListItemProps,
          getItemProps,
          inputValue,
          selectedItem,
          highlightedIndex,
          items,
          isOpen,
          clearInputValue
        }) => (
          <div>
            <input
              {...getInputProps({
                type: "text",
                name : "city",
                placeholder: 'City',
                onChange: this.handleChange,
                autoComplete : "off",
                className : 'cityName'
              })}
            />
            {isOpen && (
              <div className = "citySuggestion"  {...getListItemProps()}>
                {items.map((item, index) => (
                  <div
                    {...getItemProps({ item, index })}
                    key={item.code}
                    style={{
                      backgroundColor:
                        highlightedIndex === index
                          ? 'cadetblue'
                          : 'darkslategray',
                      fontWeight:
                        selectedItem && selectedItem === item
                          ? 'bold'
                          : 'normal'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Suggestion>
    );
  }
}
export default City;

