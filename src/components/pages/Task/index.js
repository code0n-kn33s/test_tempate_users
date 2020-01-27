import React from 'react'
import { List, Button } from 'antd'

import TableApi from './TableApi'
import { task, notification, api } from './notes'
const Task = () => (
  <>
    <h2>Notes</h2>
    <div>
      API была взята из ресурса:
            <Button
        href="http://dummy.restapiexample.com/"
        type="link"
      >
        http://dummy.restapiexample.com/
            </Button>
    </div>
    <TableApi api={ api }/>
    <br/>
    <List
      header="ЗАМЕТКИ ПО ВЫПОЛНЕНИЮ ЗАДАЧ"
      bordered
      dataSource={notification}
      renderItem={item => (
        <List.Item>
          <div style={{ color: "darkblue", marginRight: '20px' }}>Task: </div>
          <div> {item.task}</div>
        </List.Item>
      )}
    />
    <br/>
    <List
      header="ТЕКСТ ЗАДАНИЯ"
      bordered
      dataSource={task}
      renderItem={item => (
        <List.Item>
          <div style={{ color: "#ff9d2c", marginRight: '20px' }}>Task: </div>
          <div> {item.task}</div>
        </List.Item>
      )}
    />
  </>
)


export default Task