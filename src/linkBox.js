import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {
  Grid,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

class LinkBox extends Component {

  constructor(props) {
    super(props);

    this.randomColor = this.randomColor.bind(this);
    this.onClick = this.onClick.bind(this);

    var compColorLoc = this.randomColor();
    this.state = {
      compColor: compColorLoc,
      expanded: false,
    }
  }

  onClick() {
    if(this.state.expanded){
      this.props.toggleExpand(false);
    }
    else {
      this.props.toggleExpand(true);
    }

    this.setState({
      expanded: !this.state.expanded
    });
  }

  randomColor() {
    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
    return pastel;
  }

  render() {
    var aId = "ColorLink-" + this.props.linkText;
    const children = this.props.children;
    return (
        this.state.expanded 
        ?
          <Row className="expandedBarRow">
            <Col xs={12} md={8} id={aId+"Col"} onClick={this.onClick} className={"expandedBarCol"}>
              <a id={aId} className="boxText">
              <style>{
                "#" + aId + "Col{ " + 
                  " background-color: " + this.state.compColor + "; color: #222;" + 
                  " font-size: 20px; " + " margin: 2px;} " +
                "#" + aId + "Col:hover {cursor: pointer; background-color: #222; " + 
                  "color: " + this.state.compColor + "; border: 3px solid " + 
                  this.state.compColor + ";}" +
                "#" + aId + "{ font-family: impact; text-align: center;" + 
                  " background-color: " + this.state.compColor + "; color: #222;" + 
                  " font-size: 20px; padding: 10px 15px; border-radius: 5px; " + 
                  " margin: 20px;} " + 
                "#" + aId + ":hover {cursor: pointer; background-color: #222; " + 
                  "color: " + this.state.compColor + "; border: 3px solid " + 
                  this.state.compColor + ";}"
              }</style>
              <em>{this.props.linkText}</em></a>
            </Col>
            {children}
          </Row>
        : 
					<a onClick={this.onClick} id={aId} className="boxText">
          <style>{
            "#" + aId + "{ font-family: impact; text-align: center;" + 
              " background-color: " + this.state.compColor + "; color: #222;" + 
              " font-size: 20px; padding: 10px 15px; border-radius: 5px; " + 
              " margin: 20px;} " +
            "#" + aId + ":hover {cursor: pointer; background-color: #222; " + 
              "color: " + this.state.compColor + "; border: 3px solid " + 
              this.state.compColor + ";}"
                        
          }</style>
          <em>{this.props.linkText}</em></a>
    );
  }
}

LinkBox.propTypes = {
  linkText: PropTypes.string,
  children: PropTypes.element,
  toggleExpand: PropTypes.func,
}

export default LinkBox;
