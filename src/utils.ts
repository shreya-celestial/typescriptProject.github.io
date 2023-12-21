import { tabsDiv, homeHeading, usersEmploymentButton } from "./elements"
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

export const showButton = () => {
    usersEmploymentButton.style.display='block'
}

export const hideButton = () => {
    usersEmploymentButton.style.display='none'
}
