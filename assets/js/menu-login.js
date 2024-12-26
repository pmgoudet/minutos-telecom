const input = document.getElementById("cpf-cnpj");

input.addEventListener("input", function () {
    let value = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (value.length <= 11) {
        // Formata como CPF
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        // Formata como CNPJ
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }

    input.value = value;
});
