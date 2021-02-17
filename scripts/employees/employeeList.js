import { getEmployees, useEmployees } from "./employeeDataProvider.js"
import { getCustomers, useCustomers } from "../customers/customerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "../assignments/employeeCustomerProvider.js"

import { Employee } from "./Employee.js"

const contentTarget = document.querySelector(".employees")


const _render = ( employees, customers, assignments ) => {
 /*
  1. loop through employees
    a. for each employee
      i. filter out records from assignments that match employee's id
      ii. for each record in result
        iia. use coustomer id to find the customer object in customers table
        iib. return object
      iii. return list of customer objcts employee had an assignment at
    b. return employe object with employee and customer information
 */
  const employeeCustomersAssignments = employees.map((employee) => {
    const employeeAssignments = assignments.filter((assignment) => assignment.employeeId === employee.id ) // assignments.filter
    const customerLists = employeeAssignments.map((assignment) => {
      return customers.find((customer) => customer.id === assignment.customerId)
    })  // employeeAssignments.map
    
    const employeeElement = Employee(employee, customerLists)

    return employeeElement
  }).join("") // employeeCustomersAssignments

  contentTarget.innerHTML = `
    <h2>Employees</h2>
    <div class="employee__roster">
      ${ employeeCustomersAssignments }
    </div>
  `
} // _render


export const employeeList = () => {
 getEmployees()
  .then(getCustomers)
  .then(getEmployeeCustomers)
  .then(() => {
   const employees = useEmployees()
   const customers = useCustomers()
   const assignments = useEmployeeCustomers()
  
   _render(employees, customers, assignments)
  })
}
