import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {number: 0}

  OnDecrement = () => {
    this.setState(p => {
      return {number: p.number - 1}
    })
  }

  OnIncrement = () => {
    this.setState(prevState => {
      return {number: prevState.number + 1}
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Counter</h1>
          <p className="count">{number}</p>
          <div>
            <button className="button" onClick={this.OnIncrement}>
              Increase
            </button>
            <button className="button" onClick={this.OnDecrement}>
              Decrease
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
