import React, { Component } from 'react';
import ListOfOptions from "./OptionsList/ListofOptions";
import Cart from './Cart/Selections'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import slugify from 'slugify';

import '../App.css';


import USCurrencyFormat from '../currency'

class Content extends Component{
      render() {

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
      
          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        return (
            <main>
          <ListOfOptions 
            features={this.props.features}
            selected={this.props.selected}
            handleUpdateFeature = {this.props.handleUpdateFeature}
            />
          <Cart 
            features={this.props.features}
            selected={this.props.selected}
            />
        </main>
        );
      }
    }; 
    export default Content