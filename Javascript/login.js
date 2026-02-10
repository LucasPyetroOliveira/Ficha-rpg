// "Banco de dados" fake
const usuarios = [
  { usuario: "admin", senha: "1234" },
  { usuario: "lucas", senha: "abcd" }
];

// salva no localStorage
localStorage.setItem("usuarios", JSON.stringify(usuarios));

function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("senha").value;
  const msg = document.getElementById("msg");

  const db = JSON.parse(localStorage.getItem("usuarios"));

  const encontrado = db.find(u => 
    u.usuario === user && u.senha === pass
  );

  if (encontrado) {
    window.location.href = "Ficha/ficha-rpg.html";
  } else {
    msg.innerText = "Usuário ou senha incorretos";
  }
}