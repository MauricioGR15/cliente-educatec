export default (state, action) => {
    switch (action.type) {
        case "INICIAR_SESION":
            localStorage.setItem("Token", action.payload.token);
            return {
                ...state,
                token: localStorage.getItem("Token"),
                session: true,
            };
        case "SELECCIONAR_POST":
            return {
                ...state,
                selectedPost: action.payload,
            };
        default:
            return {};
    }
};
