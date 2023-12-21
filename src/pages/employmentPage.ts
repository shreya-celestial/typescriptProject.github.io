import { users } from "../data";
import { employmentTab, usersTable } from "../elements";
import { getId } from "../idState";
import { resetTabStyles, setTabStyle, showButton } from "../utils"

export const employmentPage = () => {
    resetTabStyles();
    const id = getId();
    if(id)
    {
        setTabStyle(employmentTab)
        showButton()
        usersTable.innerHTML = `
            <tr>
                <th>Current Company</th>
            </tr>
        `;
        const user = users.find(user => user.id === id)!
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.employment.currentCompany}</td>
        `;
        usersTable.appendChild(newRow)
    }
}