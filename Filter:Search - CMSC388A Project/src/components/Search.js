import React, { Component } from "react";
import List from "./List";

var filter;
var state
var city
var regex = "gi"
export default class Search extends Component {
  

  /*Constructor */
  constructor(props) {
    super(props)
   
    /* Setting the states of the arrays and input  */
    this.state = {
      displayInput: "",
      returnList : [],
      places: [] /* From below */
    }
  }
  handler = () => {
    this.setState({
    displayInput: this.search.value
    }, () => {
       /*Returning an empty array */
        if(this.state.displayInput== ""){
        this.setState({returnList:[]});
    }
      /* If there is something within the input */
      else if(this.state.displayInput !== ""){
        filter= this.state.places.filter(start => {
          /*Creating a new regex with the input that is given */
          var reg = RegExp(this.state.displayInput, regex)
          city = start.city.match(reg);
          state = start.state.match(reg);
          /*Returning the city and state */
          return state || city;
        });
        /* Returning the right filter */
        this.setState({returnList: filter});
      }
    }
    )
  }



  render() {
    return (
      <div>
        <form>
          The Great City and State, Auto-complete: 
        <input  onChange = {this.handler} ref={input=>this.search = input} />
          <List returnList={this.state.returnList}></List>
        </form>
      </div>
    )
  }
  /* DO NOT MODIFY */
  componentDidMount() {
    const allPlaces = [];
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        allPlaces.push(...results)
        this.setState({ places: allPlaces })
      })
      .catch(error => console.log(error));
  }
}
