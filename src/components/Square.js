import React from 'react'

export default function square(props) {

    return (
      <buttom className="square"  onClick={props.onClick}>
        {props.value}

      </buttom>

    )
}