import React from 'react'
import Nav from './module/Nav/Nav'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import Emoji from '../tabs/Emoji'
import GIF from '../tabs/GIF'
import Settings from '../tabs/Settings'

class Main extends React.Component {
  render() {
    var page
    switch (this.props.tab) {
      case 0:
        page = <Emoji />
        break
      case 1:
        page = <GIF />
        break
      case 2:
        page = <Settings />
        break
    }
    return (
      <div className='back draggable color0'>
        <div className='main draggable'>
          <Nav />
          {page}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tab: state.tab
})
export default compose(connect(mapStateToProps, actions))(Main)