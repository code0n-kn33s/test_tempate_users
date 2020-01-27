import React from 'react'

export const Table = (props) => {
  return(
    <div className={`table ${props.className}`}>
      {props.children}
    </div>
  )
}
