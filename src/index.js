import React from 'react';
import ReactDOM from 'react-dom/client';
import MyOtherComponent from './MyOtherComponent.js';
import ComponentAsClass from './ComponentAsClass.js';
import './index.css';


//homework 02
function GetCountries() {
  let countriesObjArray = [{countyCode:234243,countryName:'France',Capital:'Paris'},
  {countyCode:234243,countryName:'Israel',Capital:'Jerusalem'},
  {countyCode:234243,countryName:'USA',Capital:'Washington'}];

  return countriesObjArray;
}

function CountriesList() {
  const countries = GetCountries();
  return (
    <ul>
      {
      countries.map(country => ( <li>{ `[${country.countyCode}] - ${country.countryName} (${country.Capital})`} </li> 
      ))
  }
    </ul>);
}

function Countries() {
  const countries = ['India', 'USA', 'UK', 'Australia','Brazol','Israel'];
  return (
    <ul>
      {
        countries.map((country) => 
        <li> {country} </li>
        )
      }
    </ul>);

} 

function MyComponent() {
  return (
  <React.Fragment>
        <h1> List Of Components: </h1>
        <MyOtherComponent></MyOtherComponent>
        <br/>
        <ComponentAsClass></ComponentAsClass>
        <br/>
        <MyOtherComponent></MyOtherComponent>
  
  
  </React.Fragment>)
}

//Create the 'root' Div For REACT 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //<MyComponent />,
  //<MyOtherComponent />,
  // <ComponentAsClass />,
  <CountriesList />
);

