import React, { Component } from 'react'

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  submitItem() {
    this.props.handleSubmit(this.state)
    this.setState({ input: '' })
  }

  render() {
    return (
      <section>
        <input type="text"
               placeholder="add some yung-items"
               value={this.state.input}
               onChange = { (event) => this.setState({
                 input: event.target.value
               })}
             />
        <input type="submit"
               onClick= {() => this.submitItem()}
               disabled= {!this.state.input}
             />
      </section>
    )
  }
}
