import { users } from "../data";
import { professionalTab, professionalTable } from "../elements";
import { getId } from "../idState"
import { resetTabStyles, setTabStyle, showTable } from "../utils";

export const professionalPage = () => {
    resetTabStyles()
    const id = getId();
    if(id)
    {
        setTabStyle(professionalTab)
        showTable(professionalTable)
        professionalTable.innerHTML = `
            <tr>
                <th>Experience</th>
            </tr>
        `;
        const user = users.find(user => user.id === id)!
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.profession.experience}</td>
        `;
        professionalTable.appendChild(newRow)
    }
}