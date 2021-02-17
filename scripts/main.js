import { employeeList } from "./employees/employeeList.js"
import { getCustomers, useCustomers } from "./customers/customerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "./assignments/employeeCustomerProvider.js"
console.log("Welcome to the main module")
employeeList()

getCustomers()
 .then(() => {
  console.table(useCustomers())
 })

getEmployeeCustomers()
 .then(() => {
  console.table(useEmployeeCustomers())
 })