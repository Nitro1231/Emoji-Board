import React from 'react'
import Item from './NavItem'

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <Item index={0} img='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png' />
                <Item index={1} img='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png' />
                <Item index={2} img='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png' />
            </div>
        )
    }
}

export default Nav
