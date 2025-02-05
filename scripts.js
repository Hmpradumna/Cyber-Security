document.querySelector("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const formData = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value
    };
  
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error("Error submitting form:", error));
  });
