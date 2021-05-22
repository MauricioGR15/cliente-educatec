export function sortArrayAlphabetically(arreglo) {
    arreglo.sort(function (a, b) {
        let stringA = a.nombre.toUpperCase();
        let stringB = b.nombre.toUpperCase();

        if (stringA < stringB) return -1;
        if (stringA > stringB) return 1;
        return 0
    });
}
