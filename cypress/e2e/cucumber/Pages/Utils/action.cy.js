
class UTILS {

validarValorNulo(field) {
  if (field.toLowerCase() === "null") {
    return "{backspace}";
  } else {
    return field;
  }
}
}
export default new UTILS();