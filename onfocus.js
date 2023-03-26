const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senhadois = document.getElementById('senhadois')

form.addEventListener('submit', (e) =>  {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const senhadoisValue = senhadois.value.trim()

    if(nomeValue === '') {
        errorValidation(nome, 'Preencha esse campo')
    } else {
        successValidation(nome)
    }

    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else {
        successValidation(email)
    }
 
    if(senhaValue === '') {
        errorValidation(senha, 'Preencha esse campo')
    } else if (senhaValue.lenght < 8) {
        errorValidation(senha, 'A senha deve ter mais de 8 caracteres')
    } else  {
        successValidation(senha)
    }

    if(senhadoisValue === '') {
        errorValidation(senhadois, 'Preencha esse campo')
    } else if (senhadoisValue !== senhaValue) {
        errorValidation(password, 'Senhas diferentes')
    } else  {
        successValidation(senhadois)
    }

}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText  = message

    formControl.className = 'form-control error'
 }

 function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className  = 'form-control success'
 } 