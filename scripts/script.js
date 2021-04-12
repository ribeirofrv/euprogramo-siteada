function validar() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let telefone = document.getElementById("telefone");

  if (nome.value == ""){
    alert("Por favor, preencha todos os campos :)");
    form.nome.focus();
    return false;
  }

  if (email.value == ""){
    alert("Por favor, preencha todos os campos :)");
    form.email.focus();
    return false;
  }

  if (telefone.value == ""){
    alert("Por favor, preencha todos os campos :)");
    form.telefone.focus();
    return false;
  }

  // form.submit();

  alert("Prontinho! Você receberá as novidades por email.");
}