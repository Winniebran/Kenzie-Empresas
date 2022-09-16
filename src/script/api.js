import { Toast } from "./toastify.js";

export class ApiRequests {

    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@kenzieEmpresa:token") || "";
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
    }


    static async login(body) {
        const loginUser = await fetch(`${this.baseUrl}auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                if (res.token && res.uuid) {
                    localStorage.setItem("@kenzieEmpresa:token", res.token)
                    Toast.create("Login efetuado com sucesso", "green")
                    if(res.is_admin){
                        localStorage.setItem("@kenzieEmpresa:userIdAdm", res.uuid)
                        window.location.replace("src/page/dashboard-adm.html")
                    }else {
                        localStorage.setItem("@kenzieEmpresa:userId", res.uuid)
                        window.location.replace("src/page/dashboard-user.html")
                    }
                } else {
                    Toast.create("Email e/ou senha estão incorretos!", "red")
                }
            })
            .catch(err => console.log(err))
        return loginUser
    }


    static async register(body) {
        const registerUser = await fetch(`${this.baseUrl}auth/register/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.error){
                    Toast.create(res.error, "red")
                }else {
                    Toast.create("Cadastro realizado com sucesso!", "green")
                    window.location.replace("../../index.html")
                }
            }) 
            .catch(err => console.log(err))
        return registerUser
    }


    static async getAllCompanies() {
        const allCompanies = await fetch(`${this.baseUrl}companies`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        return allCompanies
    }


    static async getAllSectors(sector) {
        const allSectors = await fetch(`${this.baseUrl}companies/${sector}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        return allSectors
    }


    static async getSectors() {
        if(this.token === ""){return}
        const sectors = await fetch(`${this.baseUrl}sectors`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${this.token}` },
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        return sectors
    }


    static async registerCompany(body) {
        const registerCompany = await fetch(`${this.baseUrl}companies`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                Toast.create("Empresa criada com sucesso!", "green")
            })
            .catch(err => {
                console.log(err)
                Toast.create("Dados inválidos!", "red")
            })
        return registerCompany
    }


    static async getAllDepartaments() {
        const allDepartaments = await fetch(`${this.baseUrl}departments`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        return allDepartaments
    }


    static async departamentsCreate(body) {
        const createDepartaments = await fetch(`${this.baseUrl}departments`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body),
        })
            .then(res => {
                Toast.create("Departamento criado com sucesso", "green")
                return res.json()
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return createDepartaments
    }


    static async getAllEmployees() {
        const getAllEmployees = await fetch(`${this.baseUrl}users`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        return getAllEmployees
    }


    static async hireEmployees(body) {
        const hireEmployees = await fetch(`${this.baseUrl}departments/hire/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body),
        })
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    Toast.create("Funcionário já faz parte de outro departamento!", "red")
                }else {
                    Toast.create("Funcionário admitido com sucesso", "green")
                }
            })
            .catch(err => console.log(err))
        return hireEmployees
    }


    static async dismissEmployees(id) {
        const dismissEmployees = await fetch(`${this.baseUrl}departments/dismiss/${id}`, {
            method: "PATCH",
            headers: this.headers,
        })
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    Toast.create("Funcionário não pertence a nenhum departamento!", "red")
                }else {
                    Toast.create("Funcionário demitido com sucesso", "green")
                }
            })
            .catch(err => console.log(err))
        return dismissEmployees
    }


    static async editEmployees(body, id) {
        const editEmployees = await fetch(`${this.baseUrl}admin/update_user/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(res => {
                Toast.create("Funcionário editado com sucesso", "green")
                return res.json()
            })
            .catch(err => console.log(err))
        return editEmployees
    }


    static async departamentsDelete(id) {
        const deleteDepartments = await fetch(`${this.baseUrl}departments/${id}`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => {
                if(res.status === 204) {
                    Toast.create("Departamento deletado com sucesso", "green")
                }else {
                    Toast.create("Departamento inexiste", "red")
                }
            })
            .catch(err => console.log(err))
        return deleteDepartments
    }


    static async departmentsEdit(id, body) {
        const editDepartments = await fetch(`${this.baseUrl}departments/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    Toast.create("Departamento inexistente", "red")
                }else {
                    Toast.create("Departamento editado com sucesso", "green")
                }
            })
            .catch(err => console.log(err))
        return editDepartments
    }


    static async deleteUser(id) {
        const deleteUser = await fetch(`${this.baseUrl}admin/delete_user/${id}`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => {
                if(res.status === 401) {
                    Toast.create("Usuário não pode ser deletado", "red")
                }else {
                    Toast.create("Usuário deletado com sucesso", "green")
                }
            })
            .catch(err => console.log(err))
        return deleteUser

    }


    static async profile () {
        const profile = await fetch(`${this.baseUrl}users/profile`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        return profile
    }


    static async coworkers () {
        const coworkers = await fetch(`${this.baseUrl}users/departments/coworkers`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => res.json() )
            .catch(err => console.log(err))
        return coworkers
    }


    static async departments () {
        const departments = await fetch(`${this.baseUrl}users/departments`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        return departments
    }


    static async updadeEmployee (body) {
        const update = await fetch(`${this.baseUrl}users`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(() => Toast.create("Informações editadas com sucesso", "green"))
            .catch(err => console.log(err))
        return update
    }
}