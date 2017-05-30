import React, { Component } from 'react'
import RenderList from './RenderList'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      listItems: [],
      input: '',
    }
  }

  handleSubmit() {

    const currentItem = Object.assign({}, {input: this.state.input, id: Date.now() } )

    this.state.listItems.push(currentItem)

    this.setState({input: '', listItems: this.state.listItems})
  }

  render() {

    let { listItems } = this.state

    return(
      <section>
        <input type='text'
          value= {this.state.input}
          placeholder='input some yung groceries'
          onChange={(event) => {
            this.setState({input: event.target.value})
          }}
        />
        <input type='submit'
          onClick={ () => this.handleSubmit() }/>

          <RenderList itemCollection={listItems} />

        </section>
      )
    //
    // if(!listItems.length) {
    //   return (
    //     <div>
    //       <input type='text'
    //              value= {this.state.input}
    //              placeholder='input some yung groceries'
    //              onChange={(event) => {
    //                this.setState({input: event.target.value})
    //              }}
    //            />
    //       <input type='submit'
    //              onClick={ () => this.handleSubmit() }/>
    //     <h3> add some items </h3>
    //     </div>
    //   )
    // }
    //


  }
}
