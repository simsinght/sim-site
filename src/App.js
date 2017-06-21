import React, { Component } from 'react';
import './App.css';
import LinkBox from './linkBox.js'
import ResumeChild from './ResumeExp.js'
import {
  Grid,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.renderLinks = this.renderLinks.bind(this);
    this.tableOrFlex = this.tableOrFlex.bind(this);

		this.state = {
			linksList: {"Resume": <ResumeChild/>, 
									"Projects": <ResumeChild/>,
									"Facebook": <ResumeChild/>,
									"Twitter": <ResumeChild/>,
									"LinkedIn": <ResumeChild/>,
									"GitHub": <ResumeChild/>,
								 },
			headerName: "Sim Singh",
      headerText: "Computer Science Student @ UCSD",
      countExpanded: 0,
		};
  }

  // change the display of the main div from flex to display
  // depending on if something is expanded
  // if expanded items > 0 -> display: table; else display: flex
  // flex keeps them all vertically centered. table helps scroll
  tableOrFlex(inc) {
    var count = this.state.countExpanded;
    if(inc){
      count = count + 1;
    }
    else {
      count = count - 1;
    }

    console.log(count);
    this.state.countExpanded = count;
    console.log(this.state.countExpanded);

    var appDiv = document.getElementById('App-Div');
    if(count == 0){
      appDiv.style.display = 'flex';
    }
    else {
      appDiv.style.display = 'table';
    }

    this.setState({
      countExpanded: count,
    });
    console.log(this.state.countExpanded);
  }

  renderLinks() {
    return Object.keys(this.state.linksList).map(link => (
				<LinkBox toggleExpand={this.tableOrFlex} children={this.state.linksList[link]} linkText={link}/>
			)
    );
  }

  render() {
    return (
      <Grid className="App">
				<div className="Header">
					<Row>
						<Col xs={10} md={8}>
							<p className="headerName">{this.state.headerName}</p>
							<p className="headerText">{this.state.headerText}</p>
						</Col>
					</Row>
				</div>
        <Row id="App-Div" className="App-Links">
					<Row className="App-Links-Row">
						{ this.renderLinks() }
					</Row>
        </Row>
      </Grid>
    );
  }
}

export default App;
