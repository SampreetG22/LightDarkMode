import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: false,
  }

  BtnClicked = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  getContainer = () => {
    const {mode} = this.state

    if (mode === false) {
      return (
        <div className="darkContainer">
          <h1 className="headClass">Click to Change Mode</h1>
          <button type="button" onClick={this.BtnClicked} className="darkBtn">
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="lightContainer">
        <h1 className="headClass">Click to Change Mode</h1>
        <button type="button" onClick={this.BtnClicked} className="lightBtn">
          Dark Mode
        </button>
      </div>
    )
  }

  render() {
    this.getContainer()

    return <div className="bgContainer">{this.getContainer()}</div>
  }
}

export default LightDarkMode
