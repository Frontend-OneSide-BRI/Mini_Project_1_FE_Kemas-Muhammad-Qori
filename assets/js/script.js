const navLoginContent = document.getElementById("navLoginContent");
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");

const checkUserInfo = () => {
    const userStorage = localStorage.getItem("user");
    const userInfo = JSON.parse(userStorage);
    const authorize = sessionStorage.getItem("authorize");

    if (!!authorize) {
        navLoginContent.innerHTML = `
            <li class="nav-item me-2">
                <a class="btn btn-outline-success" href="#"
                    >Halo, ${userInfo.name}</a
                >
            </li>
        `;
    } else {
        navLoginContent.innerHTML = `
            <li class="nav-item me-2">
                <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal"
                    >Sign In</
                >
            </li>
            <li class="nav-item me-2">
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</button>
            </li>
        `;
    }
};

btnLogin.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storage = localStorage.getItem("user");

    if (storage !== null) {
        if (storage.username === username && storage.password === password) {
            sessionStorage.setItem("authorize", "true");
            Toastify({
                text: "Login Berhasil",
                duration: 3000,
            }).showToast();
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    } else {
        Toastify({
            text: "Wrong username or password",
            duration: 3000,
        }).showToast();
    }
});

btnRegister.addEventListener("click", () => {
    const username = document.getElementById("usernameRegister").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("passwordRegister").value;

    const userData = {
        name: username,
        email: email,
        password: password,
    };
    if (username !== null && email !== null && password !== null) {
        localStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("authorize", "true");
        Toastify({
            text: "Register Successfully",
            duration: 3000,
        }).showToast();
        setTimeout(() => {
            location.reload();
        }, 1000);
    } else {
        Toastify({
            text: "Please fill all data",
            duration: 3000,
        }).showToast();
    }
});

window.onload = checkUserInfo;
