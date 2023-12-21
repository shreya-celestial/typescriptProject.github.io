import { homeHeading, tabsDiv, usersTable } from "../elements"
import { showTable,handleNameClick } from "../utils"
import { users, user } from "../data"
import { setId } from "../idState"

export const homePage = () => {
    setId(undefined)
    tabsDiv.style.display='';
    homeHeading.style.display='';
    usersTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Occupation</th>
        </tr>
    `;
    showTable(usersTable)
    users.map((user: user):void=>{
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td style="cursor:pointer; color:blue">${user.name}</td>
            <td>${user.personal.birthday}</td>
            <td>${user.profession.occupation}</td>
        `;
        usersTable.appendChild(newRow)
        const name = newRow.childNodes[1];
        name.addEventListener('click',handleNameClick.bind(null, user.id))
    })
}
