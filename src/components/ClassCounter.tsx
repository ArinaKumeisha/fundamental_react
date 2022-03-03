import React from "react";


export class ClassCounter extends React.Component<{}, { count: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {

    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        {/*@ts-ignore*/}
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}