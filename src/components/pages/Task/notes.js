
export const api = [
  {
    method:	'/employee',
    type:	'GET',
    description: 'Get all employee data'
  },
  {
    method:	'/employee/{id}',
    type:	'GET',
    description: 'Get a single employee data'
  },
  {
    method:	'/create',
    type:	'POST',
    description: 'Create new record in database'
  },
  {
    method:	'/update/{id}',
    type:	'PUT',
    description: 'Update an employee record'
  },
  {
    method:	'/delete/{id}',
    type:	'DELETE',
    description: 'Delete an employee record	'
  },
]

export const task = [
  { task: 'Каждое поле должно иметь правило валидации. Неверно введенное поле должно быть визуально выделено. Форма добавляет запись только при отсутсвии ошибок. Форма и таблица находится на одном экране, так что при отправке данных формы, данные в таблице обновляются автоматически, а поля формы очищаются.' },
  { task: 'В таблице должна быть предусмотрена сортировка по каждому из полей и удаление записей.' },
  { task: 'Записи в таблице должны сохраняться на клиенте и подгружаться после перезагрузки страницы.   ' },
  { task: 'Приятный дизайн (возможно CSS-фреймворк/библиотека) приветствуется.' }
]

export const notification = [
  { task: 'Аватарка присваивается в middleware. При получении данных с сервера они идут без картинки...' },
  { task: 'В папке helpers - вы можете найти все функции по поиску, фильтрации и рандом' },
  { task: 'Вся логика написана нативно. Библиотека antd отвечает за визуальную часть' },
  { task: 'API немного кривая. Поэтому работаю в основном со сторой' },
]