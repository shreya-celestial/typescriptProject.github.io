import { academicTab, employmentTab, homeTab, personalTab, professionalTab, usersEmploymentButton } from "./elements";
import { academicPage } from "./pages/academic";
import { employmentPage } from "./pages/employmentPage";
import { homePage } from "./pages/home";
import { personalPage } from "./pages/personal";
import { professionalPage } from "./pages/professional";
import { usersEmploymentPage } from "./pages/usersEmployment";

homePage()

homeTab.addEventListener('click', homePage)
personalTab.addEventListener('click', personalPage)
professionalTab.addEventListener('click', professionalPage)
academicTab.addEventListener('click', academicPage)
employmentTab.addEventListener('click', employmentPage)
usersEmploymentButton.addEventListener('click', usersEmploymentPage)
