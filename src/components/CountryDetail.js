import React, { Component } from 'react'
import countries from './../countries.json'
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
    
    state = {
        countries: countries,
    }
    
    render() {

    console.log('PROPS -->', this.props);
    console.log('props.cca3 :>> ', this.props.match.params.cca3);
    
    // Get the cca3
    const countryCca3 = this.props.match.params.cca3;

    // Find the exact country by looping array
    const findCountry = countries.find(( country ) => countryCca3 === country.cca3);

    console.log('I FOUND IT', findCountry)

    return (
            <div className="col-7">
            <h1>{findCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{findCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{findCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {
                            findCountry.borders.map((border) =>{

                                //mapeo la array de nomenclaturas(border) 

                                console.log('BORDER COUNTRY', border) // nomenclatura

                                const findBorderCountry = countries.find((country) => border === country.cca3)

                                //country es un país dentro de JSON, y por cada país me compara si cca3 es la misma

                                console.log('BORDER INFO', findBorderCountry)

                                return(

                                    <li>
                                        <Link 
                                        key={findBorderCountry.cca3}
                                        to={`/country-detail/${findBorderCountry.cca3}`}>
                                        <p>{findBorderCountry.name.official}</p>
                                        </Link>
                                    </li> 
                                )
                            })
                        }
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
       )
    }   
}


export default CountryDetail
