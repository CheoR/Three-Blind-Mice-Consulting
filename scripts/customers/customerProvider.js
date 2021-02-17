let _customers = []

export const useCustomers = () => _customers.slice()

export const getCustomers = () => {
 /*
  Customer object:
 {
  "id": 3,
  "name": "peggy pug's debugging service"
 }
 */

 return fetch("http://localhost:8088/customers")
  .then(response => response.json())
  .then(data => {
   _customers = data
  })
}
