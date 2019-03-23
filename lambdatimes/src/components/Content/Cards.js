// import React, { Component } from 'react'; // original code had unnecessary {Component} import

import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {

  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

      {props.cards.map( (card, i) => {
        return (
          <Card
           key = {i}
           card = {card}
          />
        )
      })}

    </div>
  )
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
    })
  )
};



export default Cards;
