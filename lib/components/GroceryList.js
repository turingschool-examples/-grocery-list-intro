import React, { Component } from 'react'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  render() {
    return(
      <section>
        <input type='text'
               value= {this.state.input}
               placeholder='input some yung groceries'
               onChange={(event) => {
                 this.setState({input: event.target.value})
               }}
             />
        <input type='submit'/>
      </section>
    )
  }
}
