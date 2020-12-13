import React from 'react'
import Item from './NavItem'
import GIF from '../../../assets/img/GIF.svg'
import Setting from '../../../assets/img/Setting.svg'

class Nav extends React.Component {

    importAll = (r) => {
        return r.keys().map(r);
    }

    render() {
        const emojis = this.importAll(require.context('../../../assets/img/emoji', false, /\.(png|jpe?g|svg)$/))
        const conditional = Math.floor(Math.random() * Object.keys(emojis).length);
        const emoji = emojis[conditional]

        return (
            <div className='nav'>
                <Item index={0} img={emoji} />
                <Item index={1} img={GIF} />
                <Item index={2} img={Setting} />
            </div>
        )
    }
}

export default Nav
