export const Customer = ( customer, employeeList ) => {

  const employeeNames = employeeList.map((employee) => {
  
    return`
      <li class="employee">
        <h4>${ employee.firstName } ${ employee.lastName }</h4>
        <section class="employee_computer">
          <p>Computer Assigned: ${ employee.computer.model }</p>
          <p>Year: ${ employee.computer.year }</p>
        </section>
        <section class="employee__department">
          <p>Dept: <span>${ employee.department.name }</span></p>
        </section>
        <section class="employee__location">
          <p>Cubicle location: <span>${ employee.location.office }</span></p>
        </section>
      </li>
    `
  }).join("\n") // employeeList.map

 return `
  <div class="customer">
   <header class="customer__name">
    <h3>${ customer.name }</h3>
   </header>
    <section class="customer__customers">
      The follow have worked for ${ customer.name }.
      <ul class="employeeList">
        ${ employeeNames }
      </ul>
    </section>
  </div>
 `
}
