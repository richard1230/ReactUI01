import React from 'react'
import './importicons'
import './icon.scss'

interface IconProps {
    name: string;
    onClick:()=>void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (

        <svg className='fui-icon' onClick={props.onClick}>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>



    )
}



export default Icon; 