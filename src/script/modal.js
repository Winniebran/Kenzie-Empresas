export class Modal {

    static createRegisterCompanyModal(sector){
        
        const sectionRegisterCompany = document.createElement("section")
        const titleModal = document.createElement("h1")
        const formModal = document.createElement("form")
        const inputNameModal = document.createElement("input")
        const inputHourModal = document.createElement("input")
        const inputDescriptionModal = document.createElement("input")
        const selectSectionModal = document.createElement("select")
        const buttonRegisterModal = document.createElement("button")
        const optionRegisterModal = document.createElement("option")
        sectionRegisterCompany.classList.add("modal-register-company", "hidden", "flex-column", "align-center", "justify-between", "padding")

        titleModal.innerText = "Cadastrar Empresa"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        formModal.classList.add("form-default", "flex-column", "align-center", "justify-around")

        inputNameModal.type = "text"
        inputNameModal.placeholder = "Nome da empresa"
        inputNameModal.required = "true"
        inputNameModal.classList.add("input-default")
        inputNameModal.setAttribute("id", "name-register-company")

        inputHourModal.type = "text"
        inputHourModal.placeholder = "Horário de abertura"
        inputHourModal.required = "true"
        inputHourModal.classList.add("input-default")
        inputHourModal.setAttribute("id", "hour-register-company")

        inputDescriptionModal.type = "text"
        inputDescriptionModal.placeholder = "Descrição da empresa"
        inputDescriptionModal.required = "true"
        inputDescriptionModal.classList.add("input-default")
        inputDescriptionModal.setAttribute("id", "description-register-company")

        selectSectionModal.required = "true"
        selectSectionModal.classList.add("select-default", "margin-b")
        selectSectionModal.setAttribute("id", "sectors-register-company")
        optionRegisterModal.innerText = "Selecionar Setor"
        selectSectionModal.appendChild(optionRegisterModal)
        sector.forEach(element => {
            const optionRegisterModal = document.createElement("option")
            optionRegisterModal.id = element.uuid
            optionRegisterModal.innerText = element.description
            selectSectionModal.appendChild(optionRegisterModal)
        })

        buttonRegisterModal.innerText = "Cadastrar Empresa"
        buttonRegisterModal.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b")
        buttonRegisterModal.setAttribute("id", "button-register-modal")

        formModal.append(titleModal, inputNameModal, inputHourModal, inputDescriptionModal, selectSectionModal, buttonRegisterModal)
        sectionRegisterCompany.appendChild(formModal)

        return sectionRegisterCompany
    }


    static renderModalRegisterCompany(sector) {
        const body = document.querySelector(".container")
        body.appendChild(Modal.createRegisterCompanyModal(sector))
        
    }


    static createDepartaments (departament){
        const sectionCreateDepartaments = document.createElement("section")
        const titleModal = document.createElement("h1")
        const formModal = document.createElement("form")
        const inputNameModal = document.createElement("input")
        const inputDescriptionModal = document.createElement("input")
        const selectCompanyModal = document.createElement("select")
        const optionCreateDepartaments = document.createElement("option")
        const buttonCreateDepartament = document.createElement("button")

        sectionCreateDepartaments.classList.add("modal-create-departament", "hidden", "flex-column", "align-center", "justify-between")

        titleModal.innerText = "Criar Departamento"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        formModal.classList.add("form-default-2", "flex-column", "align-center", "justify-evenly")

        inputNameModal.type = "text"
        inputNameModal.placeholder = "Nome do departamento"
        inputNameModal.required = "true"
        inputNameModal.classList.add("input-default")
        inputNameModal.setAttribute("id", "name-create-departament")

        inputDescriptionModal.type = "text"
        inputDescriptionModal.placeholder = "Descrição do departamento"
        inputDescriptionModal.required = "true"
        inputDescriptionModal.classList.add("input-default")
        inputDescriptionModal.setAttribute("id", "description-create-departament")

        selectCompanyModal.required = "true"
        selectCompanyModal.classList.add("select-default")
        selectCompanyModal.setAttribute("id", "select-company")
        optionCreateDepartaments.innerText = "Selecione a empresa"
        selectCompanyModal.appendChild(optionCreateDepartaments)
        departament.forEach(element => {
            const optionCreateDepartaments = document.createElement("option")
            optionCreateDepartaments.id = element.uuid
            optionCreateDepartaments.innerText = element.name
            selectCompanyModal.appendChild(optionCreateDepartaments)
        })

        buttonCreateDepartament.innerText = "Criar Departamento"
        buttonCreateDepartament.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b", "margin-t")
        buttonCreateDepartament.setAttribute("id", "button-create-departament")

        formModal.append(titleModal, inputNameModal, inputDescriptionModal, selectCompanyModal, buttonCreateDepartament)
        sectionCreateDepartaments.appendChild(formModal)

        return sectionCreateDepartaments
    }


    static renderModalCreateDepartaments(companies) {
        const body = document.querySelector(".container")
        body.appendChild(Modal.createDepartaments(companies))
        
    }


    static createHireModal (departament){
        const sectionHireEmployee = document.createElement("section")
        const titleModal = document.createElement("h1")
        const divModal = document.createElement("div")
        const labelDepartment = document.createElement("label")
        const selectDepartment = document.createElement("select")
        const buttonHireEmployee = document.createElement("button")

        sectionHireEmployee.classList.add("hidden", "modal-hire-employee", "flex-column", "align-center", "justify-between")

        titleModal.innerText = "Contratar Funcionário"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        divModal.classList.add("form-default-3", "flex-column", "align-center", "justify-evenly")
        
        labelDepartment.innerText = "Selecionar o departamento"
        labelDepartment.for = "select-departament"
        labelDepartment.classList.add("title-2", "self-start", "padding-l")
        selectDepartment.required = "true"
        selectDepartment.classList.add("select-default", "margin-t")
        selectDepartment.setAttribute("id", "select-departament")
        
        departament.forEach(element => {
            const optionDepartment = document.createElement("option")
            optionDepartment.value = element.uuid
            optionDepartment.innerText = element.name
            selectDepartment.appendChild(optionDepartment)
        })

        buttonHireEmployee.innerText = "Contratar"
        buttonHireEmployee.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b", "margin-t-2")
        buttonHireEmployee.setAttribute("id", "button-hire-employee")

        divModal.append(titleModal, labelDepartment, selectDepartment, buttonHireEmployee)
        sectionHireEmployee.appendChild(divModal)

        return sectionHireEmployee
    }


    static renderHireModal(departament){
        const body = document.querySelector(".container")
        body.appendChild(Modal.createHireModal(departament))
    }


    static createEditModal() {
        const sectionEditEmployee = document.createElement("section")
        const titleModal = document.createElement("h1")
        const divModal = document.createElement("div")
        const labelKindOfWork = document.createElement("label")
        const selectKindOfWork = document.createElement("select")
        const optionWork1 = document.createElement("option")
        const optionWork2 = document.createElement("option")
        const optionWork3 = document.createElement("option")
        const labelProfessionalLevel = document.createElement("label")
        const selectProfessionalLevel = document.createElement("select")
        const optionLevel1 = document.createElement("option")
        const optionLevel2 = document.createElement("option")
        const optionLevel3 = document.createElement("option")
        const optionLevel4 = document.createElement("option")
        const buttonCreateDepartament = document.createElement("button")

        sectionEditEmployee.classList.add("hidden", "modal-edit-employee", "flex-column", "align-center", "justify-between")

        titleModal.innerText = "Editar Funcionário"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        divModal.classList.add("form-default-4", "flex-column", "align-center", "justify-evenly")
        
        labelKindOfWork.innerText = "Selecionar o tipo de trabalho"
        labelKindOfWork.for = "select-work"
        labelKindOfWork.classList.add("title-2", "self-start", "padding-l")
        selectKindOfWork.required = "true"
        selectKindOfWork.classList.add("select-default", "margin-t")
        selectKindOfWork.setAttribute("id", "select-work")
        optionWork1.innerText = "presencial"
        optionWork2.innerText = "hibrido"
        optionWork3.innerText = "home office"
        
        labelProfessionalLevel.innerText = "Selecionar a senioridade"
        labelProfessionalLevel.for = "select-level"
        labelProfessionalLevel.classList.add("title-2", "self-start", "padding-l", "margin-t-2")
        selectProfessionalLevel.required = "true"
        selectProfessionalLevel.classList.add("select-default", "margin-t")
        selectProfessionalLevel.setAttribute("id", "select-level")
        optionLevel1.innerText = "estágio"
        optionLevel2.innerText = "júnior"
        optionLevel3.innerText = "pleno"
        optionLevel4.innerText = "sênior"
        
        buttonCreateDepartament.innerText = "Editar"
        buttonCreateDepartament.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b", "margin-t")
        buttonCreateDepartament.setAttribute("id", "button-edit-employee")

        selectKindOfWork.append(optionWork1, optionWork2, optionWork3)
        selectProfessionalLevel.append(optionLevel1, optionLevel2, optionLevel3, optionLevel4)
        divModal.append(titleModal, labelKindOfWork, selectKindOfWork, labelProfessionalLevel, selectProfessionalLevel, buttonCreateDepartament)
        sectionEditEmployee.appendChild(divModal)

        return sectionEditEmployee
    }


    static renderEditModal(){
        const body = document.querySelector(".container")
        body.appendChild(Modal.createEditModal())
    }


    static deleteDepartaments (departament){
        const sectionDeleteDepartments = document.createElement("section")
        const titleModal = document.createElement("h1")
        const divModal = document.createElement("div")
        const selectDepartmentModal = document.createElement("select")
        const optionDeleteDepartments = document.createElement("option")
        const buttonDeleteDepartment = document.createElement("button")

        sectionDeleteDepartments.classList.add("modal-delete-department", "hidden", "flex-column", "align-center", "justify-between")

        titleModal.innerText = "Deletar Departamento"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        divModal.classList.add("form-default-3", "flex-column", "align-center", "justify-evenly")

        selectDepartmentModal.required = "true"
        selectDepartmentModal.classList.add("select-default")
        selectDepartmentModal.setAttribute("id", "select-department")
        optionDeleteDepartments.innerText = "Selecione um departamento"
        selectDepartmentModal.appendChild(optionDeleteDepartments)
        departament.forEach(element => {
            const optionDeleteDepartments = document.createElement("option")
            optionDeleteDepartments.value = element.uuid
            optionDeleteDepartments.innerText = element.name
            selectDepartmentModal.appendChild(optionDeleteDepartments)
        })

        buttonDeleteDepartment.innerText = "Deletar Departamento"
        buttonDeleteDepartment.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b", "margin-t")
        buttonDeleteDepartment.setAttribute("id", "button-delete-departament")

        divModal.append(titleModal, selectDepartmentModal, buttonDeleteDepartment)
        sectionDeleteDepartments.appendChild(divModal)

        return sectionDeleteDepartments
    }


    static renderModalDeleteDepartments(departments){
        const body = document.querySelector(".container")
        body.appendChild(Modal.deleteDepartaments(departments))
    }


    static editDepartaments (departament){
        const sectionEditDepartments = document.createElement("section")
        const titleModal = document.createElement("h1")
        const divEdit = document.createElement("div")
        const selectEditModal = document.createElement("select")
        const optionEditDepartments = document.createElement("option")
        const inputEditDescription = document.createElement("input")
        const buttonEditDepartment = document.createElement("button")

        sectionEditDepartments.classList.add("modal-edit-department", "hidden", "flex-column", "align-center", "justify-between")

        titleModal.innerText = "Editar Departamento"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        divEdit.classList.add("form-default-3", "flex-column", "align-center", "justify-evenly")

        selectEditModal.required = "true"
        selectEditModal.classList.add("select-default")
        selectEditModal.setAttribute("id", "select-edit")
        optionEditDepartments.innerText = "Selecione um departamento"
        selectEditModal.appendChild(optionEditDepartments)

        departament.forEach(element => {
            const optionEdit = document.createElement("option")
            optionEdit.value = element.uuid
            optionEdit.innerText = element.name
            selectEditModal.appendChild(optionEdit)
        })

        inputEditDescription.type = "text"
        inputEditDescription.placeholder = "Nova descrição"
        inputEditDescription.required = "true"
        inputEditDescription.classList.add("input-default")
        inputEditDescription.setAttribute("id", "description-edit-department")

        buttonEditDepartment.innerText = "Editar Departamento"
        buttonEditDepartment.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b", "margin-t")
        buttonEditDepartment.setAttribute("id", "button-edit-department")

        divEdit.append(titleModal, selectEditModal, inputEditDescription, buttonEditDepartment)
        sectionEditDepartments.appendChild(divEdit)

        return sectionEditDepartments
    }


    static renderModalEditDepartments(departments){
        const body = document.querySelector(".container")
        body.appendChild(Modal.editDepartaments(departments))
    }


    static deleteUser (employee){
        const sectionDeleteUsers = document.createElement("section")
        const titleModal = document.createElement("h1")
        const divModal = document.createElement("div")
        const selectUsersModal = document.createElement("select")
        const optionDeleteUsers = document.createElement("option")
        const buttonDeleteUsers = document.createElement("button")

        sectionDeleteUsers.classList.add("modal-delete-user", "hidden", "flex-column", "align-center", "justify-between")

        titleModal.innerText = "Deletar Usuário"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        divModal.classList.add("form-default-3", "flex-column", "align-center", "justify-evenly")

        selectUsersModal.required = "true"
        selectUsersModal.classList.add("select-default")
        selectUsersModal.setAttribute("id", "select-user")
        optionDeleteUsers.innerText = "Selecione o usuário"
        selectUsersModal.appendChild(optionDeleteUsers)
        employee.forEach(element => {
            const optionDeleteUsers = document.createElement("option")
            optionDeleteUsers.value = element.uuid
            optionDeleteUsers.innerText = element.username
            selectUsersModal.appendChild(optionDeleteUsers)
        })

        buttonDeleteUsers.innerText = "Deletar Usuário"
        buttonDeleteUsers.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b", "margin-t")
        buttonDeleteUsers.setAttribute("id", "button-delete-user")

        divModal.append(titleModal, selectUsersModal, buttonDeleteUsers)
        sectionDeleteUsers.appendChild(divModal)

        return sectionDeleteUsers
    }


    static renderModalDeleteUsers(employee){
        const body = document.querySelector(".container")
        body.appendChild(Modal.deleteUser(employee))
    }


    static createEditUser(edit) {
        const sectionEditUser = document.createElement("section")
        const titleModal = document.createElement("h1")
        const formModal = document.createElement("form")
        const inputNameEdit = document.createElement("input")
        const inputEmailEdit = document.createElement("input")
        const inputPasswordEdit = document.createElement("input")
        const buttonEditUser = document.createElement("button")

        sectionEditUser.classList.add("hidden", "modal-edit-user", "flex-column", "align-center", "justify-between")

        titleModal.innerText = "Editar Perfil"
        titleModal.classList.add("title-1", "text-center", "margin-b", "margin-t")

        formModal.classList.add("form-default-5", "flex-column", "align-center", "justify-evenly")
        
        inputNameEdit.innerText = edit.username
        inputNameEdit.classList.add("input-default")
        inputNameEdit.type = "text"
        inputNameEdit.placeholder = "Digite o novo nome"
        inputNameEdit.required = true
        inputNameEdit.setAttribute("id", "name-edit")

        inputEmailEdit.innerText = edit.email 
        inputEmailEdit.classList.add("input-default")
        inputEmailEdit.type = "email"
        inputEmailEdit.placeholder = "Digite o novo email"
        inputEmailEdit.required = true
        inputEmailEdit.setAttribute("id", "email-edit")

        inputPasswordEdit.innerText = edit.password 
        inputPasswordEdit.classList.add("input-default")
        inputPasswordEdit.type = "password"
        inputPasswordEdit.placeholder = "Digite a nova senha"
        inputPasswordEdit.required = true
        inputPasswordEdit.setAttribute("id", "password-edit")
        
        buttonEditUser.innerText = "Editar"
        buttonEditUser.classList.add("button-default", "bg-primary-1", "font-weight-2", "width-5", "c-grey-5", "margin-b", "margin-t")
        buttonEditUser.setAttribute("id", "button-edit-user")

    
        formModal.append(titleModal, inputNameEdit, inputEmailEdit, inputPasswordEdit, buttonEditUser)
        sectionEditUser.appendChild(formModal)

        return sectionEditUser
    }


    static renderEditUser(user){
        const body = document.querySelector(".container")
        body.appendChild(Modal.createEditUser(user))
    }
}

