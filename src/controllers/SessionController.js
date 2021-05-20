export function handleLogin(e, matricula, password, login) {
    e.preventDefault();
    login({
        matricula,
        password,
    });
}
