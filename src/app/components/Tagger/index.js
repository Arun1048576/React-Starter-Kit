import _                  from 'underscore'
import React, {Component} from 'react'
import {connect}          from 'react-redux'
import { push }           from 'react-router-redux';
import { browserHistory } from 'react-router';
import Reducer            from '../../reducers/tagger'
export {Reducer}

const users = [{
  id: 1,
  name: 'Arun'
}, {
  id: 2,
  name: 'Kishore'
}, {
  id: 3,
  name: 'Hemant'
}]

class Hello extends Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
  }

  componentDidMount () {
    const user = (window.localStorage && window.localStorage.bidUser)
    if (user) {
      browserHistory.push('/bid-list');
    }
  }

  login () {
    const username = this.refs.username.value
    const password = this.refs.password.value
    const user = _.findWhere(users, {name: username})
    if(user) {
      window.localStorage.bidUser = user.id      
    }
  }

  render() {
    return (
      <div className="hp-container">
        <div className='header'>BIDX</div>
        <div className='login-message'>Sign in to your bidding portal</div>
        <div className='username'>
          <input type='text' placeholder="Username" ref='username'/>
        </div>
        <div className='password'>
          <input type='password' placeholder="Password" ref='password'/>
        </div>
        <button className='login-btn' onClick={this.login}>LOGIN NOW</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=> ({
  started     : state.appStarted,
  currentPage : state.currentPage
})

export default connect(mapStateToProps)(Hello)