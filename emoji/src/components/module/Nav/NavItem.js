import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../../reducers/actions'

class Nav extends React.Component {
    render() {
        return (
            <div
                className='item notDraggable'
                onClick={() => { this.props.setTab(this.props.index); }}
            >
                <img src={this.props.img} />
                <div className={'bar color0 ' + ((this.props.tab == this.props.index) ? 'on' : '')} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tab: state.tab
})
export default compose(connect(mapStateToProps, actions))(Nav)
