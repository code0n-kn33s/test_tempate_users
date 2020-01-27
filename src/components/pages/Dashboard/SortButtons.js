import React from 'react'

import { Icon } from 'antd'

const width = {
  fontSize: '12px'
}

const SortButtons = ({ sortAction, viewArrow, title }) => (
  <div
    className="main-head-sort-item"
    onClick={() => sortAction()}
  >
    { title && <div className="main-head-sort-title">{title}</div> }
    <div className="main-head-sort-carrets">
      <Icon
        type="caret-up"
        style={
          !viewArrow && viewArrow !== null ?
            { ...width, color: 'blue' } : { ...width, color: 'gray' }}
      />
      <Icon
        type="caret-down"
        style={
          viewArrow && viewArrow !== null ?
            { ...width, color: 'blue' } : { ...width, color: 'gray' }}
      />
    </div>
  </div>
);

export default SortButtons;