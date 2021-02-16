let _employees =[]

export const useEmployees = () => _employees.slice()

export const getEmployees = () => {
 return fetch("http://localhost:8088/employees")
  .then(response => response.json())
  .then(employeeList => {
   _employees = employeeList
  })
}
