import React from 'react';

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: false,
    };

    this.setSetStateCallback = this.setSetStateCallback.bind(this);
  }

  setSetStateCallback() {
    console.log("State set.");
    
    this.setState({
      test: true,
    }, () => {
      console.log("It works!");
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.setSetStateCallback}>Test!</button>
      </div>
    );
  }
}

export { TestComponent };