import React from 'react'

export const Cell = ({children, type}) => {
  let classString

  if( type !== undefined){
    classString = `table_cell ${type}`
  } else {
    classString = `table_cell medium`
  }

  return(
    <div className={classString}>
      { children }
    </div>
  )
}
