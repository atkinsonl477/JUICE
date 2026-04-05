let loginAttempt = "";
async function login() {
      const email = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !email.includes("@") || password.length < 8) {
        alert("Invalid input!");
        return;
      }

      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        loginAttempt = await response.json();
        if (loginAttempt.rows.length === 0) {
          return res.status(401).json({ error: "Invalid credentials" });
        }
        
        console.log(loginAttempt.rows[0])
            
        const match = await bcrypt.compare(password, loginAttempt.rows[0].password)
            
        console.log(match)
        
        if (!match) {
            alert("Incorrect")
        }
        else {
            localStorage.setItem("loggedInUser", email);
            window.location.href = "welcome.html";
        }
        
      } catch (err) {
        console.error(err);
        alert("Server error");
      }
    };