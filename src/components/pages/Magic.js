import React, { Component } from 'react'
import axios from 'axios';

class Magic extends Component {


    state = {
        cardData : ""
    }
    async componentDidMount() {
        try {
          let {cardData} = await axios.get('https://api.scryfall.com');
          console.log(cardData);
          this.setState({cardData})
        } catch (error) {
          console.error(error);
        }
      }
    render() {
        return (
            <div className="magicPage">
                <h2>Here will be the Magic page</h2>
            </div>
        );
    }
}

export default Magic