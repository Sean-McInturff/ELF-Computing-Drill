import React, { Component } from 'react';
import Options from './Options';


export default class ListOfOptions extends Component {

    render() {
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <Options
                features={this.props.features}
                selected={this.props.selected}
                handleUpdateFeature = {this.props.handleUpdateFeature}
            />
          </form>
        )
    }
}