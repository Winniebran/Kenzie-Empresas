import { ApiRequests } from "./api.js"
import { Modal } from "./modal.js"
import { Toast } from "./toastify.js"

class DashboardUser {

    static logout () {
        const token = localStorage.getItem("@kenzieEmpresa:token")
        if(!token) {
            window.location.replace("../../index.html")
            return
        }

        const menu = document.querySelector("[data-logout]")

        menu.addEventListener("click", () => {
            localStorage.removeItem("@kenzieEmpresa:token")
            localStorage.removeItem("@kenzieEmpresa:userId")
            window.location.replace("../../index.html")
            Toast.create("Deslogado com sucesso!", "green")
        })
    }


    static userLogged (user){
        const nameUserLogged = document.querySelector(".name-user-logged")
        const emailUserLogged = document.querySelector(".email-user-logged")
        const levelUserLogged = document.querySelector(".level-user-logged")

        nameUserLogged.innerText = user.username
        emailUserLogged.innerText = user.email
        levelUserLogged.innerText = user.professional_level
    }


    static coworker(coworkers){
        coworkers.forEach(element => {
            const usersList = document.querySelector(".users-department-list")
            const usersItem = document.createElement("li")
            const usersBlock1 = document.createElement("div")
            const usersInformation1 = document.createElement("p")
            const usersName = document.createElement("span")
            const usersBlock2 = document.createElement("div")
            const usersInformation2 = document.createElement("p")
            const usersEmail = document.createElement("span")
            const usersBlock3 = document.createElement("div")
            const usersInformation3 = document.createElement("p")
            const usersLevel = document.createElement("span")

            usersItem.classList.add("users-department-item", "flex-column", "justify-between", "border-3")

            usersBlock1.classList.add("flex-row", "justify-between")
            
            usersInformation1.innerText = "Nome:"
            usersInformation1.classList.add("text-4")

            usersName.innerText = element.username
            usersName.classList.add("text-3")

            usersBlock2.classList.add("flex-row", "justify-between")
            
            usersInformation2.innerText = "E-mail:"
            usersInformation2.classList.add("text-4")

            usersEmail.innerText = element.email
            usersEmail.classList.add("text-3")

            usersBlock3.classList.add("flex-row", "justify-between")
            
            usersInformation3.innerText = "Senioridade"
            usersInformation3.classList.add("text-4")

            usersLevel.innerText = element.professional_level
            usersLevel.classList.add("text-3")

            usersBlock1.append(usersInformation1, usersName)
            usersBlock2.append(usersInformation2, usersEmail)
            usersBlock3.append(usersInformation3, usersLevel)
            usersItem.append(usersBlock1, usersBlock2, usersBlock3)
            usersList.appendChild(usersItem)
        });
    }


    static allDepartments(department) {
        const departamentList = document.querySelector(".department-list")
        
        department.forEach(element => {
            const departamentItem = document.createElement("li")
            departamentItem.classList.add("department-item", "flex-row", "align-center", "justify-center", "text-4")
            departamentItem.innerText = element.name

            departamentList.append(departamentItem)
        })
    }


    static editUser() {
        const editButton = document.querySelectorAll(".edit")
        const modalEditUser = document.querySelector(".modal-edit-user")
        const inputNameEdit = document.getElementById("name-edit")
        const inputEmailEdit = document.getElementById("email-edit")
        const inputPasswordEdit = document.getElementById("password-edit")
        const buttonEditUser = document.getElementById("button-edit-user")
        

        editButton.forEach(element => {
            element.addEventListener("click", () => {
                modalEditUser.classList.toggle("hidden")

                buttonEditUser.addEventListener("click", async (e) => {
                    e.preventDefault()
                    const data = {
                        username: inputNameEdit.value,
                        email: inputEmailEdit.value,
                        password: inputPasswordEdit.value
                    }
                    await ApiRequests.updadeEmployee(data)
                })
            })  
        })
    }


    static async verification() {
        const coworkers = await ApiRequests.coworkers()
        if(coworkers.length > 0){
            DashboardUser.coworker(coworkers[0].users)
        }

        const departments = await ApiRequests.departments()
        if(departments.departments !== undefined){
            DashboardUser.allDepartments(departments.departments)
        }
    }
}

DashboardUser.logout()

const userLogged = await ApiRequests.profile()
DashboardUser.userLogged(userLogged)

DashboardUser.verification()

Modal.renderEditUser(userLogged)
DashboardUser.editUser()