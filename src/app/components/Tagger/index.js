import React, {Component} from 'react';
import {connect} from 'react-redux';

class Hello extends Component {
  render() {
    return (
      <div className="tg-cnt">
        Hello {this.props.started}
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    started : state.appStarted
  }
}

export default connect(mapStateToProps)(Hello)