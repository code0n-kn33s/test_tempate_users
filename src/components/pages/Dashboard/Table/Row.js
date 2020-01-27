import React from 'react'
import { Link } from 'react-router-dom'

export const Row = ({children, type, to}) => {

  if( type === 'link'){
    return(
      <Link
        className={
          type !== undefined ? `table__row ${type}` : "table__row"
        }
        to={to}>
        {children}
      </Link>
    )
  } else {
    return(
      <div className={
        type !== undefined ? `table__row ${type}` : `table__row`
      }>
        {children}
      </div>
    )
  }
}