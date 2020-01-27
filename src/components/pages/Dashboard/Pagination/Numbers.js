import React from 'react'
import { Icon } from 'antd'

const Numbers = ({ pageNumbers, handleClick, handleArrowLeft, handleArrowRight, activePage }) => {
  return (
    <ul className="pagination-numbers-list">
      <li
        className={`pagination-numbers-item ${parseInt(activePage) === 1 && 'noactive'}`}
        onClick={handleArrowLeft}
      >
        <Icon type="left"/>
      </li>
      {
        pageNumbers.map(number => {
          return (
            <li
              className={`pagination-numbers-item ${ parseInt(activePage) === parseInt(number) && 'active'}`}
              key={number}
              id={number}
              onClick={handleClick}
            >
              {number}
            </li>
          )
        })
      }
      <li
        className={`pagination-numbers-item ${parseInt(activePage) === pageNumbers.length && 'noactive'}`}
        onClick={handleArrowRight}
      >
        <Icon type="right" />
      </li>
    </ul>
  )
}

export default Numbers