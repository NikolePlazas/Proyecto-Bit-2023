document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 
  
 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  

    if (username === "" || password === "") {
      alert("Por favor, ingrese un usuario y contraseña válidos.");
      return;
    }
  
  
    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }
  
      const data = await response.json();
  
      if (data.success) {
        alert("Inicio de sesión exitoso. ¡Bienvenido(a), " + username + "!");
      
      } else {
        alert("Usuario o contraseña incorrectos. Por favor, intente nuevamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error en el inicio de sesión. Por favor, intente nuevamente.");
    }
  });
  