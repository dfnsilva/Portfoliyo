//In the future, make this in another way
/*
function closePopUp() {
    document.getElementById("loginPopUp").style.display = "none";
}

function loginPopUp() {
    document.getElementById("loginPopUp").style.display = "block";
}*/

const loginPopUp = document.querySelector('.loginPopUp');
const registerLink = document.querySelector('.registerLink');
const loginPopUpButton = document.querySelector('.loginPopUpButton');
const closeIcon = document.querySelector('.closeIcon');
const loginSubmit = document.querySelector('.loginSubmit');

async function makeRequest(url, options) {
    try {
        const response = await fetch(url, options);
        return response;
    } catch (err) {
        console.log(err);
    }
}

async function register() {
    console.log("TESTE")
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const user = {
        username: username,
        email: email,
        password: password
    }

    console.log(username, email, password)
    
    const reply = await makeRequest("https://localhost:8000/api/user/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })

    json = await reply.json();
    switch (reply.status) {
        case 409:
            {
                document.getElementById("registerMessage").innerHTML = json.msg;
                break;
            }
        case 400:
            {
                document.getElementById("registerMessage").innerHTML = json.msg;
                break;
            }
        case 201:
            {
                document.getElementById("registerMessage").innerHTML = json.msg;
                break;
            }
    }
}

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = {
        email: email,
        password: password
    }

    const reply = await makeRequest("https://localhost:8000/api/user/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    json = await reply.json();
    switch (reply.status) {
        case 404:
            {
                document.getElementById("loginMessage").innerHTML = json.msg;
                break;
            }
        case 401:
            {
                document.getElementById("loginMessage").innerHTML = json.msg;
                break;
            }
        case 405:
            {
                document.getElementById("loginMessage").innerHTML = json.msg;
                break;
            }
        case 201:
            {
                document.getElementById("loginMessage").innerHTML = json.msg;
                //localStorage.setItem("token", json.token);
                break;
            }
    }
    document.getElementById("loginPopUp").classList.remove('activePopUp');
    document.getElementById("loginPopUpButton").style.display = "none";
    document.getElementById("logoutPopUpButton").style.display = "inline";
    document.getElementById("portfolio").style.display = "inline";
}

registerLink.addEventListener('click', ()=> {
    loginPopUp.classList.add('active');
});

loginPopUpButton.addEventListener('click', ()=> {
    loginPopUp.classList.add('activePopUp');
    document.getElementById("html").style.overflowY = "hidden";
});

closeIcon.addEventListener('click', ()=> {
    loginPopUp.classList.remove('activePopUp');
    document.getElementById("html").style.overflowY = "scroll";
});

// MOVER TEXTO QUANDO O FORM ABRE/FECHA

function moveHeaderTextOpen() {
    const headerTextElement = document.querySelector('.header-text');
    headerTextElement.classList.add('moveOpen');
    headerTextElement.classList.remove('moveClose');
}
  
function moveHeaderTextClose() {
    const headerTextElement = document.querySelector('.header-text');
    headerTextElement.classList.add('moveClose');
    headerTextElement.classList.remove('moveOpen');
}
  