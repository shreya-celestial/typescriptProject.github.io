import { users } from "../data";
import { employmentTab, employmentTable, usersEmploymentButton } from "../elements";
import { getId } from "../idState";
import { resetTabStyles, setTabStyle, showTable } from "../utils"

export const employmentPage = () => {
    resetTabStyles();
    const id = getId();
    if(id)
    {
        setTabStyle(employmentTab)
        showTable(employmentTable,usersEmploymentButton)
        employmentTable.innerHTML = `
            <tr>
                <th>Current Company</th>
            </tr>
        `;
        const user = users.find(user => user.id === id)!
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.employment.currentCompany}</td>
        `;
        employmentTable.appendChild(newRow)
    }
}