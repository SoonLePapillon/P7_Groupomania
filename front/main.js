const submitButton = document.getElementById("order");

function valideForm () {
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                }),
            headers : {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    })
}

valideForm();