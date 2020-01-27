import React from 'react'

import { Table, Row, Cell } from '../Dashboard/Table'

import folderIcon from './../../../assets/img/svg/folder.svg'

const TableApi = ({ api }) => (
  <Table className="description-table">
    <Row type="head">
      <Cell type="id">#</Cell>
      <Cell type="large">method</Cell>
      <Cell type="small">type</Cell>
      <Cell type="extra-large">description</Cell>
    </Row>
    {
      api && api.map((data, key) => {
        return (
          <Row key={key}>
            <Cell type="folder">
              <img src={folderIcon} alt="folder" />
            </Cell>
            <Cell type="large">{data.method}</Cell>
            <Cell type="small">{data.type}</Cell>
            <Cell type="extra-large">{data.description}</Cell>
          </Row>
        )
      })
    }
  </Table>
)

export default TableApi