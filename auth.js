// auth.js
// Credentials (sementara, hanya untuk demo)
const ADMIN = {
  username: "admin",
  password: "phet123"
};

// Cek login saat halaman dimuat
if (window.location.pathname.includes("tambah-eksperimen.html")) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// Handle form login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === ADMIN.username && password === ADMIN.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "tambah-eksperimen.html";
  } else {
    alert("Username atau password salah!");
  }
});