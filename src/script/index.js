import { ApiRequests } from "./api.js"

class Login {
    static loginPage() {
        const token = localStorage.getItem("@kenzieEmpresa:token")
        const userId = localStorage.getItem(localStorage.key(0))
        if (token && token !== "undefined" && userId.includes("userIdAdm")) {
            window.location.replace("src/page/dashboard-adm.html")
        }else if (token && token !== "undefined" && userId.includes("userId")){
            window.location.replace("src/page/dashboard-user.html")
        }
    

        const emailLogin = document.getElementById("email-login")
        const passwordLogin = document.getElementById("password-login")
        const buttonLogin = document.getElementById("button-login")

        buttonLogin.addEventListener("click", (e) => {
            e.preventDefault()
            const data = {
                email: emailLogin.value,
                password: passwordLogin.value
            }
            ApiRequests.login(data)
            emailLogin.value = ""
            passwordLogin.value = ""
        })


        const buttonRegister = document.querySelector("[data-register]")
        buttonRegister.addEventListener("click", () => {
            window.location.replace("src/page/register.html")
        })


        const buttonCompany = document.querySelector("[data-company]")
        buttonCompany.addEventListener("click", () => {
            window.location.replace("src/page/company.html")
        })
    }
}

Login.loginPage()