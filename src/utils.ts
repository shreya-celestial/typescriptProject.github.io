import { tableDiv,hiddenDiv, tabsDiv, homeHeading } from "./elements"
import { setId } from "./idState";
import { personalPage } from "./pages/personal";

export const handleNameClick = (id: string) => {
    tabsDiv.style.display = 'flex';
    homeHeading.style.display = 'none'
    setId(id)
    personalPage();
}

export const resetTabStyles = () => {
    const allParagraphElements = document.querySelectorAll('p')! as NodeList
    const paraElementsArray = [...allParagraphElements] as HTMLParagraphElement[]
    paraElementsArray.map((element:HTMLParagraphElement):void => {
        element.style.backgroundColor = '#BAD1C2';
        element.style.color = 'black'
    })
}

export const setTabStyle = (
    tab:HTMLParagraphElement
) => {
    tab.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    tab.style.color = 'white'
}

export const showTable = (
    table1:HTMLTableElement,
    button1?: HTMLButtonElement
) => {
    if(tableDiv.firstChild){
        hiddenDiv.appendChild(tableDiv.firstChild)
    }
    //below condition to check if button already exists
    if(tableDiv.firstChild)
    {
        hiddenDiv.appendChild(tableDiv.firstChild)
    }
    tableDiv.appendChild(table1)
    if(button1)
    {
        tableDiv.appendChild(button1)
    }
}
