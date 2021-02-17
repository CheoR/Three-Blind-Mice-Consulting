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

  Object format with computerId and departmentId expanded
  http://localhost:8088/employees?_expand=computer&_expand=department
  {
    "id": 1,
    "firstName": "Mouse-A",
    "lastName": "Surname-A",
    "computerId": 6,
    "departmentId": 1,
    "computer": {
      "id": 6,
      "model": "Macbook Pro",
      "year": 2014
    },
    "department": {
      "id": 1,
      "name": "accounting"
    }
  }

  Object format with computerId and departmentId expanded
  http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location
  {
    "id": 1,
    "firstName": "Mouse-A",
    "lastName": "Surname-A",
    "computerId": 6,
    "departmentId": 1,
    "locationId": 1,
    "computer": {
      "id": 6,
      "model": "Macbook Pro",
      "year": 2014
    },
    "department": {
      "id": 1,
      "name": "accounting"
    },
    "location": {
      "id": 1,
      "location": "Nashville"
    }
  }
*/

let _employees = []
// const url = "http://localhost:8088/employees"
// const urlExpandComputer = "http://localhost:8088/employees?_expand=computer"
// const urlExpandComputerDept = "http://localhost:8088/employees?_expand=computer&_expand=department"
const  urlExpandComputerDeptLoc = "http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location"

export const useEmployees = () => _employees.slice()

export const getEmployees = () => {
 return fetch(urlExpandComputerDeptLoc)
  .then(response => response.json())
  .then(employeeList => {
   _employees = employeeList
  })
}
