const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");

const app = express();
const port = 3000; 

app.use(express.json());


const mongoClient = mongodb.MongoClient;
const mongoUrl = "mongodb+srv://Nikole_11:<Gaby12061+>@cluster0.dnzjpdg.mongodb.net/test"; 
const dbName = "crm";


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Por favor, ingrese un usuario y contraseña válidos." });
  }

  const client = await mongoClient.connect(mongoUrl);
  const db = client.db(dbName);


  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne({ username });


  if (!user || !bcrypt.compareSync(password, user.password)) {
    client.close();
    return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos." });
  }

  client.close();
  res.status(200).json({ success: true, message: "Inicio de sesión exitoso." });
});


app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

//homeeeeeee

document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    
    if (!username || !password) {
      alert("Por favor, ingrese un usuario y contraseña válidos.");
      return;
    }
  
 
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
  
  
    const data = await response.json();
  

    if (data.success) {
      alert("Inicio de sesión exitoso.");
     
      window.location.href = "/dashboard"; 
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
  