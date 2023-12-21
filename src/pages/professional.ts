import { users } from "../data";
import { professionalTab, usersTable } from "../elements";
import { getId } from "../idState"
import { hideButton, resetTabStyles, setTabStyle } from "../utils";

export const professionalPage = () => {
    resetTabStyles()
    const id = getId();
    if(id)
    {
        setTabStyle(professionalTab)
        hideButton()
        usersTable.innerHTML = `
            <tr>
                <th>Experience</th>
            </tr>
        `;
        const user = users.find(user => user.id === id)!
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.profession.experience}</td>
        `;
        usersTable.appendChild(newRow)
    }
}