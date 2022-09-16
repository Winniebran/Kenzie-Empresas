import { ApiRequests } from "./api.js"

class Companies {
    static createAllCompanies(companies){
        const itemCompany = document.createElement("li")
        const itemBlockSector = document.createElement("div")
        const sectorCompany = document.createElement("span")
        const nameCompany= document.createElement("h2")
        const openingCompany = document.createElement("p")
        const descriptionCompany = document.createElement("p")

        itemCompany.key = companies.uuid
        itemCompany.id = companies.uuid
        itemCompany.classList.add("item-company", "flex-column", "justify-around", "border-2")

        itemBlockSector.classList.add("sector-block", "self-end")

        sectorCompany.innerText = companies.sectors.description
        sectorCompany.id = companies.sectors.uuid
        sectorCompany.classList.add("sector-company", "bg-primary-3", "padding-2", "text-4")

        nameCompany.innerText = companies.name
        nameCompany.classList.add("name-company", "title-2")

        openingCompany.innerText = `Abre as: ${companies.opening_hours}h`
        openingCompany.classList.add("opening-company", "text-3")

        descriptionCompany.innerText = companies.description
        descriptionCompany.classList.add("description-company", "text-3")

        itemBlockSector.appendChild(sectorCompany)
        itemCompany.append(itemBlockSector, nameCompany, openingCompany, descriptionCompany)

        return itemCompany
    }

    static renderAllCompanies(arr){
        const listCompanies = document.querySelector(".list-companies")
        listCompanies.innerHTML = ""

        return arr.filter(element => listCompanies.appendChild(Companies.createAllCompanies(element)))
    }
}


class Sectors {
    static renderAllSetores(companies){
        const select = document.getElementById("select")
        const listCompanies = document.querySelector(".list-companies")
        listCompanies.innerHTML = ""

        const filter = companies.filter((e, i, a) => a.findIndex(el => el.sectors.description == e.sectors.description) == i)
        
        filter.forEach(element => {
            const option = document.createElement("option")
            option.innerText = element.sectors.description
            option.value = element.sectors.description
            select.append(option)
        })
        
        
        Companies.renderAllCompanies(companies)
        select.addEventListener("change", async (event) => {
            const sector = await ApiRequests.getAllSectors(event.target.value);
            Companies.renderAllCompanies(sector)
        })
        
        
        const buttonLogin = document.querySelector("[data-company]")
        buttonLogin.addEventListener("click", () => {
            window.location.replace("../../index.html")
        })
    }
}

const companies = await ApiRequests.getAllCompanies()
Companies.renderAllCompanies(companies)
Sectors.renderAllSetores(companies)



