/*Transicao da tela de login para a tela de formulario*/

const container = document.querySelector("#container-forms");

const registerButton = document.querySelector(".btn-register");
const loginButton = document.querySelector(".btn-login");

registerButton.addEventListener("click", () => {
    container.classList.add("register-mode");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("register-mode");
});



/*Configuracao dos campos de cpf*/

const cpfInputs = document.querySelectorAll("#cpf, #register-cpf");

cpfInputs.forEach(input => {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(0, 11);
    });
});