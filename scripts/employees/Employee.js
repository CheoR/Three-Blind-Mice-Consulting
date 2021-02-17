export const Employee = ( employee, customerList) => {

  const customerNames = customerList.map((customer) => `<li class="customer"><span>${ customer.name }</span></li>`).join("\n") // customerList.map

 return `
  <div class="employee">
   <header class="employee__name">
    <h3>${ employee.firstName } ${ employee.lastName }</h3>
   </header>
   <section class="employee__computer">
    <p>Computer Assigned: ${ employee.computer.model }</p>
    <p>Year: ${ employee.computer.year }</p>
   </section>
   <section class="employee__department">
    <p>Dept: <span>${ employee.department.name }</span></p>
   </section>
   <section class="employee__location">
    <p>Cubicle location: <span>${ employee.location.office }</span></p>
    </section>
    <section class="employee__customers">
      Has worked for the following customers.
      <ul class="customerList">
        ${ customerNames }
      </ul>
    </section>
  </div>
 `
}
