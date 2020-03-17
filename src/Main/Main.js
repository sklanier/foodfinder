import React, { Component } from "react";
import {  Input, Card, CardBody, CardTitle } from "mdbreact";
import './Main.css';

//feel free to change this example file to a larger data set! 
import FoodList from "./example_data.json";

class Main extends Component {
  state = {
    search: ""
  };

  renderCard = card => {
    
    return (
      <div className="MainContainer" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                src={card.img}
                className="image"
                alt={card.title}
              />
            </p>
            <CardTitle title={card.title}>
              {card.title.substring(0, 15)}
              {card.title.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    console.log(FoodList.items);
    const { search } = this.state;
    
    const filteredCards = FoodList.items.filter(food => {
      return food.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="container main">
        <div className="row">
          <Input 
            className="searchContainer"
            label="What'll it be today?"
            icon="search"
            onChange={this.onchange}
          />          
        </div>
        <div className="row">
          {filteredCards.map(card => {
            return this.renderCard(card);
          })}
        </div>
      </div>
    );
  }
}

export default Main;