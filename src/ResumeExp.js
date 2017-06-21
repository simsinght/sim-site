import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {
  Grid,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

class ResumeExp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("rendering ResumeExp");
    return (
        <Row className={"resume-row"}>
          <dl className={"education"}>
            <dt className={"education-left"}>
              <p> Computer Science BS </p>
              <p> University of California, San Diego </p>
            </dt>
            <dd className={"education-right"}>
              <ul>
                <li> GPA: 3.4 </li>
                <li> Chancellor's Scholar </li>
              </ul>
            </dd>
          </dl>
        </Row>
    );
  }
}

ResumeExp.propTypes = {
}

export default ResumeExp;
