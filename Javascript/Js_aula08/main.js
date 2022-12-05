function calculo(a = 2, b = 4, c = -6) {

    const delta = b * b - 4 * a * c;

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(x1);
    console.log(x2);
}