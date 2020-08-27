import React, { Component } from 'react';
import Total from './Total'


import USCurrencyFormat from '../../currency'

export default class Cart extends Component{

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

          return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <Total 
                features={this.props.features}
                selected={this.props.selected}
            />
          </section>
          )
    }
}