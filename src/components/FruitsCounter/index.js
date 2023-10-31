import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0}
  state = {banana: 0}

  mangoes = () => {
    this.setState((prevState = {mango: prevState.mango + 1}))
  }

  bananas = () => {
    this.setState((prevState = {banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state

    return (
      <div className="background">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="span">{mango}</span> mangoes
            <span className="bananas">{banana}</span> bananas
          </h1>
          <div className="columItems">
            <div>
              <img
                className="image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.mangoes} className="button">
                Eat Mango
              </button>
            </div>
            <div>
              <img
                className="image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.bananas} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
