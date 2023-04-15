// Write your code here
import {component} from 'react'
import './index.css'

class Welcome extends component {
  state = {isLoggedIn: true}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return (
        <button type="button" className="button1">
          subscribed
        </button>
      )
    }
    return (
      <button type="button" className="button1">
        subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading"> Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
      </div>
    )
  }
}
export default Welcome
