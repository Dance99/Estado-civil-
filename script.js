let nombre =prompt("Ingresa tu nombre")

let Estado =prompt("Ingresa tu estado civil (1: Soltero, 2: Casado, 3: Separado, 4: Viudo, 5: Unión libre):" );

switch ("Estado") {
    case "1":
        mensajestadocivil ="Soltero";
        break;
    case "2":
        mensajestadocivil ="Casado";
         break;
    case "3":
        mensajestadocivil ="Separado";
        break;
    case "4":
        mensajestadocivil ="Viudo";
        break;
    case "5":
        mensajestadocivil ="Union libre";
        break;
    default: 
         mensajestadocivil = "Estado civil no reconocido.";
}
 
alert(`Hola ${nombre}, tu estado civil es: ${Estado}`);