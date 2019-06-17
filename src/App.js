import React from 'react';
import Header from './Header';
import Subheader from './Subheader';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    age: ''
  }

  nameChange = (onClickEvent) => {
    console.log('onClickEvent: ', onClickEvent.target.value);
    this.setState({name: onClickEvent.target.value});
  }

  ageChange = (onClickAge) => {
    this.setState({age: onClickAge.target.value});
  }

  render() {

    return (
      <div className="App">
        <Header/>
        <Subheader/>
        <div>
          <label>Name:</label>
          <input type='text' onChange={(e) => this.nameChange(e)}/>
          <label> Age: </label>
          <input type='number' onChange={(e) => this.ageChange(e)}/>
        </div>
        <div className='TemplateForBd'>
          <p>
            Hello: {this.state.name}, and many more happy retuns on {this.state.age}th birthday!
          </p>
        </div>
        {/*
          Add Saving information ... message. You need to create a new component (different file). In that file
          you will need to compare old props and new props. ONLY show the message when new props are passed
        */}
        {/**
          For the save the clipboard, SEARCH GOOGLE
        */}
        <p>
          Test
        </p>
      </div>
    );
  }

}

export default App;
