/*
  Object format.
  http://localhost:8088/employees
  {
    "id": 1,
    "firstName": "Mouse-A",
    "lastName": "Surname-A",
    "computerId": 6
  }

  Object format with computerId expanded
  http://localhost:8088/employees?_expand=computer
  {
    "id": 1,
    "firstName": "Mouse-A",
    "lastName": "Surname-A",
    "computerId": 6,
    "computer": {
      "id": 6,
      "model": "Macbook Pro",
      "year": 2014
    }
  }
*/

let _employees = []
const url = "http://localhost:8088/employees"
const urlWithExpandComputer = "http://localhost:8088/employees?_expand=computer"

export const useEmployees = () => _employees.slice()

export const getEmployees = () => {
 return fetch(urlWithExpandComputer)
  .then(response => response.json())
  .then(employeeList => {
   _employees = employeeList
  })
}
