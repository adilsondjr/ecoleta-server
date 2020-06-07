import React from 'react'

interface HeaderProps {
    title: string
}

//Component react sempre com letra maiúscula
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header