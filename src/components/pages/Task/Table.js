
const methods = [
  {
    method:	'/employee',
    type:	'GET',
    full_route: 'http://dummy.restapiexample.com/api/v1/employees',
    description: 'Get all employee data'
  },
  {
    method:	'/employee/{id}',
    type:	'GET',
    full_route: 'http://dummy.restapiexample.com/api/v1/employee/:id',
    description: 'Get a single employee data'
  },
  {
    method:	'/create',
    type:	'POST',
    full_route: 'http://dummy.restapiexample.com/api/v1/create',
    description: 'Create new record in database'
  },
  {
    method:	'/update/{id}',
    type:	'PUT',
    full_route: 'http://dummy.restapiexample.com/api/v1/update/:id',
    description: 'Update an employee record'
  },
  {
    method:	'/delete/{id}',
    type:	'DELETE',
    full_route: 'http://dummy.restapiexample.com/api/v1/delete/:id',
    description: 'Delete an employee record	'
  },
]