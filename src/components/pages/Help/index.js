import React from 'react';

import { List, Typography, Button } from 'antd';

const { Title, Paragraph, Text } = Typography

const resolved = [
  {
    task: 'отображать список записей',
    description: 'Получение пользователей. В userAction я прикрутил аву и gender',
  },
  {
    task: 'фильтрация на лету (по мере того как пользователь вводит поисковый запрос, список должен автоматически фильтроваться)',
    description: 'Чисто на js в helpers -> userActions -> userReducer',
  },
  {
    task: 'показывать отдельную запись в всплывающем окне',
    description: 'Полноценные роуты, в том числе и на редактирование с отдельно выезжающей панелью',
  },
  {
    task: 'динамическое-инлайн редактирование полей в списке',
    description: 'Зделал на половину. Есть action, пока не работает апи доделать не могу',
  }
]

const rejected = [
  'добавление и редактирование записей',
  'валидация введенных данных',
]

const helpStyles = {
  lineHeight: 1
}
const Help = () => {
  return (
    <div className="help" styles={ helpStyles }>
      <Title level={2}>Notes - Потраченое время (~12ч.)</Title>
        <Paragraph ellipsis={{ rows: 5, expandable: true }} >
          К сожаления в Пн перестала работать API, что остановило выполнение заданий:
            <br/>
            <Button href="http://dummy.restapiexample.com/" type="link">http://dummy.restapiexample.com/</Button>
            <br/>
          Проверить это можно здесь:
            <br/>
            <Button href="http://dummy.restapiexample.com/api/v1/employees/" type="link">http://dummy.restapiexample.com/api/v1/employees/</Button>
            <br/>
          <Text >Варианты: </Text>
            <div> Я беру другое апи и доделываю таску, но мне нужно доп. время </div>
            <div> Вы проверяете сам код </div>
            <div> ...Ваш вариант </div>
        </Paragraph>
        <List
          style={{ marginBottom: '16px'}}
          header={
            <Title level={4}>Done</Title>
          }
          bordered
          dataSource={resolved}
          renderItem={item => (
            <List.Item>
              <Text type="warning">Task: </Text> {item.task}
              <br/>
              <Text type="primary">Description: </Text> {item.description}
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: '16px'}}
          header={
            <Title level={4}>Not implemented</Title>
          }
          bordered
          dataSource={rejected}
          renderItem={item => (
            <List.Item>
              <Typography.Text type="danger">Task: </Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
  );
}

export default Help