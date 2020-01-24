import React from 'react'
import { List, Button } from 'antd'

const task = [
  { task: 'Каждое поле должно иметь правило валидации. Неверно введенное поле должно быть визуально выделено. Форма добавляет запись только при отсутсвии ошибок. Форма и таблица находится на одном экране, так что при отправке данных формы, данные в таблице обновляются автоматически, а поля формы очищаются.' },
  { task: 'В таблице должна быть предусмотрена сортировка по каждому из полей и удаление записей.' },
  { task: 'Записи в таблице должны сохраняться на клиенте и подгружаться после перезагрузки страницы.   ' },
  { task: 'Приятный дизайн (возможно CSS-фреймворк/библиотека) приветствуется.' }
]
const notification = [
  { task: 'Аватарка присваивается в middleware. При получении данных с сервера они идут без картинки... Так красивше.' },
  { task: 'В папке helpers - вы можете найти все функции по поиску, фильтрации и присваиванию random значений. Экспортируются они в users.actions.js - папка actions ' },
  { task: 'Вся логика написана нативно. Библиотека antd отвечает лишь за визуальную часть' },
  { task: 'API немного кривая. При создании пользователя, чтобы получить 200-ку. Я переделываю свойства обьекта перед отправкой' },
]

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
  </>
)


export default Task