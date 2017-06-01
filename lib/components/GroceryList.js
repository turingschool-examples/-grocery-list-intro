import React, { Component } from 'react'
import RenderList from './RenderList'
import Controls from './Controls'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      listItems: [],
    }
  }

  componentDidMount() {
    const fromLocal = localStorage.getItem('items') ?
     JSON.parse(localStorage.getItem('items')) : []

    this.setState({listItems: fromLocal})
  }

  handleSubmit(item) {
    const currentItem = Object.assign(item, { id: Date.now() } )

    this.state.listItems.push(currentItem)

    this.setState({input: '', listItems: this.state.listItems})
    localStorage.setItem('items', JSON.stringify(this.state.listItems))
  }

  handleDelete(id) {
    const filteredItems = this.state.listItems.filter(item => {
      return item.id !== id
    })

    this.setState({ listItems: filteredItems })
    localStorage.setItem('items', JSON.stringify(filteredItems))
  }

  render() {

    let { listItems } = this.state

    return(
      <section>
          <Controls handleSubmit={this.handleSubmit.bind(this)}/>
          <RenderList itemCollection={listItems} destroy={this.handleDelete.bind(this)} />
        </section>
      )
  }
}
