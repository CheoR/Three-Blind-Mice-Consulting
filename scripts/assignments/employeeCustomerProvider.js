let _employeeCustomers = []

export const useEmployeeCustomers = () => _employeeCustomers.slice()

export const getEmployeeCustomers = () => {
 /*
  Customer object:
  {
   "id": 1,
   "customerId": 1,
   "employeeId": 1
  }
 */

 return fetch("http://localhost:8088/employeeCustomers")
  .then(response => response.json())
  .then(data => {
   _employeeCustomers = data
  })
}
