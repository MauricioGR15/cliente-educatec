export default (state, action) => {
    switch (action.type) {
        case "INICIAR_SESION":
            localStorage.setItem("Token", action.payload.token);
            return {
                ...state,
                token: localStorage.getItem("Token"),
                session: true,
            };
        case "OBTENER_USUARIO":
            return{
                ...state,
                usuario: action.payload
            }
        case "SELECCIONAR_POST":
            return {
                ...state,
                selectedPost: action.payload,
            };
        case "INICIALIZAR_MATERIAS":
            return {
                ...state,
                materias: action.payload
            }
        default:
            return {};
    }
};
