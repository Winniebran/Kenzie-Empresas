import { ApiRequests } from "./api.js"
import { Modal } from "./modal.js"
import { Toast } from "./toastify.js"

class Dashboard {

    static logout () {
        const token = localStorage.getItem("@kenzieEmpresa:token")
        if(!token) {
            window.location.replace("../../index.html")
            return
        }

        const menu = document.querySelector("[data-logout]")

        menu.addEventListener("click", () => {
            localStorage.removeItem("@kenzieEmpresa:token")
            localStorage.removeItem("@kenzieEmpresa:userIdAdm")
            window.location.replace("../../index.html")
            Toast.create("Deslogado com sucesso!", "green")
        })
    }


    static sectors(sector){
        const sectorList = document.querySelector(".sector-list")
        sectorList.innerHTML = ""

        sector.forEach(element => {
            const sectorItem = document.createElement("li")
            sectorItem.classList.add("sector-item")
            sectorItem.id = element.uuid
            
            const sectorItemName = document.createElement("p")
            sectorItemName.classList.add("item-name", "font-weight-2")
            sectorItemName.innerText = element.description 

            sectorItem.appendChild(sectorItemName)
            sectorList.appendChild(sectorItem)            
        })
        
        sectorList.addEventListener("click", async (event) => {
            if(event.target.innerText.length < 20) {
                const sector = await ApiRequests.getAllSectors(event.target.innerText)
                Dashboard.renderListCompanies(sector)
            }
        })
    }


    static registerCompanies(sector) {
        const buttonRegisterCompany = document.querySelector("[data-register-company]")
        const modalRegisterCompany = document.querySelector(".modal-register-company")

        buttonRegisterCompany.addEventListener("click", () => {
            modalRegisterCompany.classList.toggle("hidden")
        })

        const nameRegisterCompany = document.getElementById("name-register-company")
        const hourRegisterCompany = document.getElementById("hour-register-company")
        const descriptionRegisterCompany = document.getElementById("description-register-company")
        const sectorsRegisterCompany = document.getElementById("sectors-register-company")
        const buttonRegisterModal = document.getElementById("button-register-modal")

        sectorsRegisterCompany.addEventListener("change", (e) => {
            const options = sector.find (element => element.description === e.target.value ? element:"")
            
            buttonRegisterModal.addEventListener("click", async (event) => {
                event.preventDefault()
                const data = {
                    name: nameRegisterCompany.value,
                    opening_hours: hourRegisterCompany.value,
                    description: descriptionRegisterCompany.value,
                    sector_uuid: options.uuid 
                }
                await ApiRequests.registerCompany(data)
            })
        })
    }


    static createListCompanies(companies){
        const itemCompany = document.createElement("li")
        const itemBlockSector = document.createElement("div")
        const sectorCompany = document.createElement("span")
        const nameCompany= document.createElement("h2")
        const openingCompany = document.createElement("p")
        const descriptionCompany = document.createElement("p")
        const selectCompany = document.createElement("section")
        const departamentList = document.createElement("ul")

        itemCompany.key = companies.uuid
        itemCompany.id = companies.uuid
        itemCompany.classList.add("company-item", "flex-column", "justify-around", "border-2")

        itemBlockSector.classList.add("company-block", "text-end")

        sectorCompany.innerText = companies.sectors.description
        sectorCompany.id = companies.sectors.uuid
        sectorCompany.classList.add("sector-company", "bg-primary-3", "padding-2", "text-4")

        nameCompany.innerText = companies.name
        nameCompany.classList.add("name-company", "title-2")

        openingCompany.innerText = `Abre as: ${companies.opening_hours}h`
        openingCompany.classList.add("opening-company", "text-3")

        descriptionCompany.innerText = companies.description
        descriptionCompany.classList.add("description-company", "text-3")

        selectCompany.classList.add("select-departament")

        departamentList.classList.add("departament-list", "flex-row", "align-center")
        departamentList.id = companies.uuid

        itemBlockSector.appendChild(sectorCompany)
        selectCompany.appendChild(departamentList)
        itemCompany.append(itemBlockSector, nameCompany, openingCompany, descriptionCompany, selectCompany)

        return itemCompany
    }


    static renderListCompanies(arr) {
        const companiesList = document.querySelector(".companies-list")
        companiesList.innerHTML = ""

        arr.forEach(element => {
            companiesList.appendChild(Dashboard.createListCompanies(element))
        })
        
    }


    static departaments(departament){
        const departamentList = document.querySelectorAll(".departament-list")

        departamentList.forEach(e => {
            departament.forEach(element => {
                if(element.companies.uuid === e.id){
                    const departamentItem = document.createElement("li")
                    departamentItem.classList.add("departament-item", "flex-row", "align-center", "justify-center", "text-4")
                    departamentItem.innerText = element.name
    
                    e.append(departamentItem)
                }
            })
        })

    }


    static createDepartament(companies) {
        const buttonCreateDepartament = document.querySelector("[data-create-departament]")
        const modalCreateDepartament = document.querySelector(".modal-create-departament")

        buttonCreateDepartament.addEventListener("click", () => {
            modalCreateDepartament.classList.toggle("hidden")
        })

        const nameCreateDepartament = document.getElementById("name-create-departament")
        const descriptionCreateDepartament = document.getElementById("description-create-departament")
        const companyCreateDepartament = document.getElementById("select-company")
        const CreateDepartamentButton = document.getElementById("button-create-departament")

        companyCreateDepartament.addEventListener("change", (e) => {
            const options = companies.find (element => element.name === e.target.value ? element:"")

            CreateDepartamentButton.addEventListener("click", async (event) => {
                event.preventDefault()
                const data = {
                    name: nameCreateDepartament.value,
                    description: descriptionCreateDepartament.value,
                    company_uuid: options.uuid 
                }
                await ApiRequests.departamentsCreate(data)
            })
        })
    }


    static deleteDepartment() {
        const buttonDeleteDepartament = document.querySelector("[data-delete-departament]")
        const modalDeleteDepartament = document.querySelector(".modal-delete-department")

        buttonDeleteDepartament.addEventListener("click",  () => {
            modalDeleteDepartament.classList.toggle("hidden")
        })

        const deleteDepartament = document.getElementById("select-department")
        const deleteDepartamentButton = document.getElementById("button-delete-departament")

        deleteDepartamentButton.addEventListener("click", async () => {
            await ApiRequests.departamentsDelete(deleteDepartament.value)
        })
    }


    static editDepartment() {
        const buttonEditDepartament = document.querySelector("[data-edit-departament]")
        const modalEditDepartament = document.querySelector(".modal-edit-department")

        buttonEditDepartament.addEventListener("click", () => {
            modalEditDepartament.classList.toggle("hidden")
        })


        const descriptionEditDepartament = document.getElementById("description-edit-department")
        const selectEditDepartament = document.getElementById("select-edit")
        const EditDepartamentButton = document.getElementById("button-edit-department")

        selectEditDepartament.addEventListener("change", (e) => {
            EditDepartamentButton.addEventListener("click", async () => {
                const data = { description: descriptionEditDepartament.value }
                await ApiRequests.departmentsEdit(e.target.value, data)
            })
        })   
    }


    static renderAllDepartaments(departament){
        const departamentList = document.querySelector(".all-departaments-list")
        departamentList.innerHTML = ""

        const filter = departament.filter((e, i, a) => a.findIndex(el => el.name == e.name) === i)
       
        filter.forEach(element => {
            const departamentItem = document.createElement("li")
            departamentItem.classList.add("all-departaments-item", "flex-column", "text-justify", "justify-evenly", "bg-grey-3")
            departamentItem.id = element.uuid
            
            const departamentItemName = document.createElement("p")
            departamentItemName.classList.add("font-weight-2")
            departamentItemName.innerText = element.name 

            const departamentItemDescription = document.createElement("p")
            departamentItemDescription.classList.add("text-3")
            departamentItemDescription.innerText = element.description
        
            departamentItem.append(departamentItemName, departamentItemDescription)
            departamentList.appendChild(departamentItem)            
        })
    }
    

    static createListEmployees(employees){
        const itemEmployee = document.createElement("li")
        const nameEmployee= document.createElement("h2")
        const professionalLevel = document.createElement("p")
        const kindOfWork = document.createElement("p")
        const managementBlock = document.createElement("div")
        const toHireEmployee = document.createElement("i")
        const toEditEmployee = document.createElement("i")
        const dismissEmployee = document.createElement("i")

        itemEmployee.key = employees.uuid
        itemEmployee.id = employees.uuid
        itemEmployee.classList.add("employees-item", "flex-column", "justify-around", "border-2")

        nameEmployee.innerText = employees.username
        nameEmployee.classList.add("title-2")

        professionalLevel.innerText = employees.professional_level
        professionalLevel.classList.add("text-3")
        
        kindOfWork.classList.add("text-3")
        kindOfWork.innerText = employees.kind_of_work
        
        managementBlock.classList.add("employees-block", "flex-row", "justify-around", "title-2")

        toHireEmployee.classList.add("fa-solid", "fa-user-plus", "cursor-pointer", "to-hire-employee")
        toHireEmployee.id = employees.uuid
        toEditEmployee.classList.add("fa-solid", "fa-user-pen", "cursor-pointer", "to-edit-employee")
        toEditEmployee.id = employees.uuid
        dismissEmployee.classList.add("fa-solid", "fa-user-xmark", "cursor-pointer", "dismiss-employee")
        dismissEmployee.id = employees.uuid

        managementBlock.append(toHireEmployee, toEditEmployee, dismissEmployee)
        itemEmployee.append(nameEmployee, professionalLevel, kindOfWork)

        if(employees.is_admin === false){
            itemEmployee.appendChild(managementBlock)
        }

        return itemEmployee
    }


    static renderListEmployees(employees){
        const companiesList = document.querySelector(".employees-list")
        companiesList.innerHTML = ""

        employees.forEach(element => {
            companiesList.appendChild(Dashboard.createListEmployees(element))
        })
    }


    static hireEmployee () {
        const hireButton = document.querySelectorAll(".to-hire-employee")

        setTimeout(() => {
            const modalHireEmployee = document.querySelector(".modal-hire-employee")
            const selectDepartment = document.getElementById("select-departament")
            const buttonHireModal = document.getElementById("button-hire-employee")
            
            hireButton.forEach(element => {
                element.addEventListener("click", () => {
                    modalHireEmployee.classList.toggle("hidden")
                    
                    buttonHireModal.addEventListener("click", async () => {
                        const data = {
                            user_uuid: element.id,
                            department_uuid: selectDepartment.value
                        }
                        await ApiRequests.hireEmployees(data)
                    })
                })
            })   
        }, 1000)
    }


    static dismissEmployee() {
        const dismissButton = document.querySelectorAll(".dismiss-employee")

        dismissButton.forEach(element => {
            element.addEventListener("click", async (e) => {
                await ApiRequests.dismissEmployees(e.target.id)
            })
        })
    }

    static editEmployee() {
        const editButton = document.querySelectorAll(".to-edit-employee")

        setTimeout(() => {
            const modalEditEmployee = document.querySelector(".modal-edit-employee")
            const selectKindOfWork = document.getElementById("select-work")
            const selectProfessionalLevel = document.getElementById("select-level")
            const buttonEditModal = document.getElementById("button-edit-employee")
            
            editButton.forEach(element => {
                element.addEventListener("click", () => {
                    modalEditEmployee.classList.toggle("hidden")
                    
                    buttonEditModal.addEventListener("click", async () => {
                        const data = {
                            kind_of_work: selectKindOfWork.value,
                            professional_level: selectProfessionalLevel.value
                        }
                        await ApiRequests.editEmployees(data, element.id)
                    })
                })
            })   
        }, 1000)
    }

    static deleteUser() {
        const buttonDeleteUser = document.querySelector("[data-delete-user]")
        const modalDeleteUser = document.querySelector(".modal-delete-user")

        buttonDeleteUser.addEventListener("click",  () => {
            modalDeleteUser.classList.toggle("hidden")
        })

        const deleteUserSelect = document.getElementById("select-user")
        const deleteUserButton = document.getElementById("button-delete-user")

        deleteUserButton.addEventListener("click", async () => {
            console.log(deleteUserSelect.value)
            await ApiRequests.deleteUser(deleteUserSelect.value)
        })
    }
}

Dashboard.logout()

const sectors = await ApiRequests.getSectors()
Dashboard.sectors(sectors)
Modal.renderModalRegisterCompany(sectors)
Dashboard.registerCompanies(sectors)

const companies = await ApiRequests.getAllCompanies()
Dashboard.renderListCompanies(companies)

const departament = await ApiRequests.getAllDepartaments()
Dashboard.departaments(departament)

Modal.renderModalCreateDepartaments(companies)
Dashboard.createDepartament(companies)
Modal.renderModalDeleteDepartments(departament)
Dashboard.deleteDepartment()
Modal.renderModalEditDepartments(departament)
Dashboard.editDepartment()

Dashboard.renderAllDepartaments(departament)

const employees = await ApiRequests.getAllEmployees()
Dashboard.renderListEmployees(employees)

Dashboard.hireEmployee()
Modal.renderHireModal(departament)

Dashboard.dismissEmployee()

Dashboard.editEmployee()
Modal.renderEditModal()

Modal.renderModalDeleteUsers(employees)
Dashboard.deleteUser()