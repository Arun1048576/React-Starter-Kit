import _                  from 'underscore'
import classnames         from 'classnames'
import React, {Component} from 'react'
import {connect}          from 'react-redux'

import Reducer            from '../../reducers/bidList'
export {Reducer}

import {fetchLeads}       from '../../actions/index'

class BidList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: 0
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (event) {
    const id = event.currentTarget.dataset.id
    this.setState({
      tab: parseInt(id, 10)
    })
  }

  render() {
    const tabcontent = ['Active', 'Your Bids', 'Completed'].map((data, index) => {
      const tabItemClass = classnames('tab-item', {
        'active': (index === this.state.tab)
      })

      return (
        <div className={tabItemClass} onClick={this.changeTab} data-id={index} key={index}>{data}</div>
      )
    })
    return (
      <div className="bidlist-container">
        <div className='header'>BIDX</div>
        <div className='tab-container'>{tabcontent}</div>
        <div className='tab-content'>
          { (this.state.tab === 0) &&
            <BidTab dispatch={this.props.dispatch} leads={this.props.leads}/>
          }
          { (this.state.tab === 1) &&
            <YourBid dispatch={this.props.dispatch}/>
          }
          { (this.state.tab === 2) &&
            <Completed dispatch={this.props.dispatch}/>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=> ({
  leads: (state.leads && state.leads.data)? state.leads.data : []
})

export default connect(mapStateToProps)(BidList)


class BidCard extends Component {
  componentDidMount() {
    let time = 0
    var interval = setInterval(() => {
      time += 10
      this.refs.timer.style.width = this.refs.card.offsetWidth - (this.refs.card.offsetWidth*time/(5000))
    }, 10)
  }
  render () {
    return (
      <div className='bid-tab-card' ref='card'>
        <div className='bid-tab-card-top'>
          <div className='image-container inline'/>
          <div className='main-details-container inline'>
            <div className='lead-name'>{this.props.data.name}</div>
            <div className='lead-details'>
              <div className='lead-bhk inline'>{this.props.data.apartment_type}</div>
              <div className='lead-furnish inline'>{this.props.data.furnishing_type}</div>
            </div>
            <div className='lead-locality'>{this.props.data.locality}</div>
          </div>
        </div>
        <div className='bid-tab-card-bottom'>
          <div className='bid-tab-cost inline'>{this.props.data.price}</div>
          <div className='bid-tab-current inline'>
            <div className='heading'>Highest Bid</div>
            <div className='value'>{this.props.data.participating}</div>
          </div>
          <div className='bid-tab-bidders inline'>
            <div className='heading'>No of Bid</div>
            <div className='value'>{this.props.data.participating}</div>
          </div>
        </div>
        <div className='bid-timer' ref='timer'/>
      </div>
    )
  }  
}

class BidTab extends Component {
  componentDidMount () {
    this.getLeads()
  }
  getLeads() {
    fetchLeads(this.props.dispatch)
  }
  render () {
    const content = this.props.leads.map((Lead) => {
      return (
        <BidCard data={Lead} key={Lead.id}/>
      )
    })
    return (
      <div className='bid-tab'>
        {content}
      </div>
    )
  }
}

class YourBid extends Component {
  render () {
    return (
      <div className='your-bid-tab'>
        Your Bids
      </div>
    )
  }
}

class Completed extends Component {
  render () {
    return (
      <div className='completed-bid'>
        Completed Bids
      </div>
    )
  }  
}