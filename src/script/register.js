import { ApiRequests } from "./api.js"

class Register {
    static createRegister() {

        const token = localStorage.getItem("@kenzieEmpresa:token")
        const userId = localStorage.getItem(localStorage.key(0))
        if (token && token !== "undefined" && userId.includes("userIdAdm")) {
            window.location.replace("src/page/dashboard-adm.html")
        }else if (token && token !== "undefined" && userId.includes("userId")){
            window.location.replace("src/page/dashboard.html")
        }

        const passwordRegister = document.getElementById("password-register")
        const emailRegister = document.getElementById("email-register")
        const levelRegister = document.getElementById("level-register")
        const nameRegister = document.getElementById("name-register")
        const buttonRegister = document.getElementById("button-register")

        buttonRegister.addEventListener("click", async (event) => {
            event.preventDefault()
            const body = {
                password: passwordRegister.value,
                email: emailRegister.value,
                professional_level: levelRegister.value,
                username: nameRegister.value
            }
            await ApiRequests.register(body)
            passwordRegister.value = ""
            emailRegister.value = ""
            levelRegister.value = ""
            nameRegister.value = ""
        })


        const buttonLogin = document.querySelector("[data-login]")
        buttonLogin.addEventListener("click", () => {
            window.location.replace("../../index.html")
        })


        const buttonCompany = document.querySelector("[data-company]")
        buttonCompany.addEventListener("click", () => {
            window.location.replace("company.html")
        })

    }
}

Register.createRegister()