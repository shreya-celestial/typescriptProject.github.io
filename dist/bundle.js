(()=>{"use strict";const e=document.querySelector("div.tabs"),t=document.getElementById("home"),n=document.getElementById("personal"),d=document.getElementById("professional"),a=document.getElementById("academic"),r=document.getElementById("employment"),o=document.querySelector("h3"),l=document.querySelector("div.table"),i=document.querySelector("div.hidden"),c=document.getElementById("userData"),s=document.getElementById("personalData"),m=document.getElementById("professionalData"),p=document.getElementById("academicData"),y=document.getElementById("employmentData"),h=document.getElementById("usersEmployment"),u=document.querySelector("button"),g=[{id:"abc1",name:"Shreya",personal:{address:"Delhi",mobile:"1234567890",birthday:new Date("2000-08-29").toLocaleDateString("en-GB")},profession:{experience:"1 year",occupation:"developer"},academic:{collegeName:"JSS",degree:"btech",passoutyear:"2022",addressCollege:"Noida"},employment:{currentCompany:"Celestial Systems"}},{id:"def2",name:"Shalini",personal:{address:"Agra",mobile:"0987654321",birthday:new Date("2000-06-02").toLocaleDateString("en-GB")},profession:{experience:"1 year",occupation:"developer"},academic:{collegeName:"JSS",degree:"Btech",passoutyear:"2023",addressCollege:"Noida"},employment:{currentCompany:"Celestial Systems"}},{id:"ghi3",name:"Shlok",personal:{address:"UP",mobile:"1234509876",birthday:new Date("2000-04-17").toLocaleDateString("en-GB")},profession:{experience:"6 years",occupation:"Sales Manager"},academic:{collegeName:"MIT",degree:"Bcom",passoutyear:"2016",addressCollege:"America"},employment:{currentCompany:"Apple"}},{id:"jkl4",name:"Aman",personal:{address:"Haryana",mobile:"0987612345",birthday:new Date("2000-12-12").toLocaleDateString("en-GB")},profession:{experience:"1 year",occupation:"Teacher"},academic:{collegeName:"DU",degree:"BEd",passoutyear:"2022",addressCollege:"Delhi"},employment:{currentCompany:"Some School"}}];let C;const E=e=>{C=e},L=()=>C,b=()=>{S();const e=L();if(e){B(n),D(s),s.innerHTML="\n            <tr>\n                <th>Name</th>\n                <th>Address</th>\n                <th>Mobile No</th>\n            </tr>\n        ";const t=g.find((t=>t.id===e)),d=document.createElement("tr");d.innerHTML=`\n            <td>${t.name}</td>\n            <td>${t.personal.address}</td>\n            <td>${t.personal.mobile}</td>\n        `,s.appendChild(d)}},f=t=>{e.style.display="flex",o.style.display="none",E(t),b()},S=()=>{[...document.querySelectorAll("p")].map((e=>{e.style.backgroundColor="#BAD1C2",e.style.color="black"}))},B=e=>{e.style.backgroundColor="rgba(0, 0, 0, 0.85)",e.style.color="white"},D=(e,t)=>{l.firstChild&&i.appendChild(l.firstChild),l.firstChild&&i.appendChild(l.firstChild),l.appendChild(e),t&&l.appendChild(t)},M=()=>{E(void 0),e.style.display="",o.style.display="",c.innerHTML="\n        <tr>\n            <th>Name</th>\n            <th>Birth Date</th>\n            <th>Occupation</th>\n        </tr>\n    ",D(c),g.map((e=>{const t=document.createElement("tr");t.innerHTML=`\n            <td style="cursor:pointer; color:blue">${e.name}</td>\n            <td>${e.personal.birthday}</td>\n            <td>${e.profession.occupation}</td>\n        `,c.appendChild(t),t.childNodes[1].addEventListener("click",f.bind(null,e.id))}))};M(),t.addEventListener("click",M),n.addEventListener("click",b),d.addEventListener("click",(()=>{S();const e=L();if(e){B(d),D(m),m.innerHTML="\n            <tr>\n                <th>Experience</th>\n            </tr>\n        ";const t=g.find((t=>t.id===e)),n=document.createElement("tr");n.innerHTML=`\n            <td>${t.profession.experience}</td>\n        `,m.appendChild(n)}})),a.addEventListener("click",(()=>{S();const e=L();if(e){B(a),D(p),p.innerHTML="\n            <tr>\n                <th>College Name</th>\n                <th>Degree</th>\n                <th>Pass Out year</th>\n                <th>Address</th>\n            </tr>\n        ";const t=g.find((t=>t.id===e)),n=document.createElement("tr");n.innerHTML=`\n            <td>${t.academic.collegeName}</td>\n            <td>${t.academic.degree}</td>\n            <td>${t.academic.passoutyear}</td>\n            <td>${t.academic.addressCollege}</td>\n        `,p.appendChild(n)}})),r.addEventListener("click",(()=>{S();const e=L();if(e){B(r),D(y,u),y.innerHTML="\n            <tr>\n                <th>Current Company</th>\n            </tr>\n        ";const t=g.find((t=>t.id===e)),n=document.createElement("tr");n.innerHTML=`\n            <td>${t.employment.currentCompany}</td>\n        `,y.appendChild(n)}})),u.addEventListener("click",(()=>{D(h),h.innerHTML="\n        <tr>\n            <th>Name</th>\n            <th>Company Name</th>\n        </tr>\n    ",g.map((e=>{const t=document.createElement("tr");t.innerHTML=`\n            <td>${e.name}</td>\n            <td>${e.employment.currentCompany}</td>\n        `,h.appendChild(t)}))}))})();