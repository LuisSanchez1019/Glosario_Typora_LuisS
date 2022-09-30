function esSuficientementeGrande(elemento) {
    return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
  // filtrados es [12, 130, 44]