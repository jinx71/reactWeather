import React, { Component } from 'react';
import Suggestion from 'search-suggestion';
import Weather from './Weather';
import City from './city';
const items = ['UA','RU','NP','IN','VE','IQ','DE','IL','GE','NG','GB','ZA','CN','TR','DO','PK','LV','PL','KN','JP','MM','BA','AU','NA','AR','US','CA','FJ','ID','CG','TZ','CM','CF','SS','ET','SD','PT','UZ','ES','FI','NL','FR','NZ','IT','CU','BL','AZ','IR','SL','KM','HT','AT','BE','BF','BO','CD','CH','CI','CZ','DK','DZ','FM','GH','GN','GP','GR','GS','GT','HN','HU','JM','MZ','NO','OM','PE','PR','SE','TH','VC','VN','MX','BD','BI','BJ','BR','CL','EG','ER','JO','KP','KR','KW','KZ','LA','LK','LR','LY','PG','PH','RS','TD','AM','AO','AS','SN','BY','BG','RO','AL','MT','LT','XK','EE','UY','YE','ZM','ZW','AF','BW','MW','EC','KE','UG','CO','SR','TG','PA','CR','SO','NI','GW','ML','SV','NE','SA','TW','EH','MA','KG','MK','HR','SI','SK','LU','IE','NC','LB','TC','BZ','KY','HK','AG','CV','RW','LS','MU','SC','RE','TN','IS','TJ','MD','CW','BQ','SX','SY','GD','PM','GG','BT','LI','FO','GL','GF','YT','MN','KI','VU','CC','MY','BN','MP','GU','AE','BH','KH','MG','MQ','PF','PS','PW','PY','QA','TM','TT','AD','AI','AQ','AX','DM','CY','GI','MH','NF','SZ','TO','GY','ME','VI','AW','BB','SM','GA','MS','GM','GQ','MC','MF','WF','SB','NU','WS','CK','CX','TL','SH','DJ','JE','BM','PN','TV','VA','MR','SG','BS','TF','MO','MV','FK','VG','LC','IM','ST','NR','SJ','TK'];


class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dataSource: [],
    };
  }
  handleChange = e => {
    const value = e.target.value;
    let dataSource = [];
    if (value) {
      dataSource = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    }
    this.setState({
      dataSource,
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
                name : "country",
                placeholder: 'Country',
                onChange: this.handleChange, 
                autoComplete : "off",
                className : 'country',
              })}
            />
            {isOpen && (
              <div className = "countrySuggestion" {...getListItemProps()}>
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
            <City countryName = {this.state.dataSource} />
          </div>
          
        )}
      </Suggestion>
    );
  }
}
export default Country;

