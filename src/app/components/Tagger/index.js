import React, {Component} from 'react'
import {connect}          from 'react-redux'

import Reducer            from '../../reducers/tagger'
export {Reducer}

class Hello extends Component {
  render() {
    return (
      <div className="tg-cnt">
        <div> Status : {this.props.started} </div>
        <div> Current Page : {this.props.currentPage} </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=> ({
  started     : state.appStarted,
  currentPage : state.currentPage
})

export default connect(mapStateToProps)(Hello)