import React from 'react';

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <button
          style={{
            fontSize: '40px',
            borderRadius: '4px',
            boxShadow: '2px 2px 12px 1px #545454',
          }}
          onClick={() => this.setState({ count: (this.state.count += 1) })}
        >
          Increment
        </button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
