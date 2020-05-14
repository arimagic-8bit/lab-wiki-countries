import React, { Component } from 'react'

import countries from './../countries.json'
import { Link } from 'react-router-dom';

class CountriesList extends Component {
    
    state = {
        countries: countries,
    }
    
    render() {
        return (
           <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
                {
                    countries.map((country) => {
                        return(
                            <Link 
                            className="list-group-item list-group-item-action" 
                            key={country.cca3} 
                            to={`/country-detail/${country.cca3}`}>
                            {country.flag} {country.name.official}
                            </Link>
                        )
                    })
                }
            </div>
          </div>
        )
    }
}

export default CountriesList
