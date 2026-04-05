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

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("loggedInUser", email);
          window.location.href = "welcome.html";
        } else {
          alert(data.error);
        }
      } catch (err) {
        console.error(err);
        alert("Server error");
      }
    }