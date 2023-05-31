const navLoginContent = document.getElementById("navLoginContent");
const btnLogin = document.getElementById("btnLogin");

const checkUserInfo = () => {
    const userStorage = localStorage.getItem("user");
    const userInfo = JSON.parse(userStorage);
    if (userStorage === null) {
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
    } else {
        navLoginContent.innerHTML = `
            <li class="nav-item me-2">
                <a class="btn btn-outline-success" href="#"
                    >Halo, ${userInfo.name}</a
                >
            </li>
        `;
    }
};

btnLogin.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storage = localStorage.getItem("user");
    const data = JSON.parse(storage);
    if (data.username === username && data.password === password) {
        sessionStorage.setItem("authorize", "true");
        Toastify({
            text: "Login Berhasil",
            duration: 3000,
        }).showToast();
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    } else {
        Toastify({
            text: "username atau password salah",
            duration: 3000,
        }).showToast();
    }
});

window.onload = checkUserInfo;
