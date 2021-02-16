/*
  Object format.
  {
    "id": 1,
    "firstName": "Mouse-A",
    "lastName": "Surname-A",
    "computerId": 6
  }
*/

let _employees =[]

export const useEmployees = () => _employees.slice()

export const getEmployees = () => {
 return fetch("http://localhost:8088/employees")
  .then(response => response.json())
  .then(employeeList => {
   _employees = employeeList
  })
}
