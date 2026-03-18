let idade = Number (prompt("Digite sua idade:"));
let temCNH = prompt("Possui CNH? (sim ou não)");

if (idade >= 18 && temCNH === "sim") {
    alert ("Você pode dirigir");
} else {
        alert ("Você não pode dirigir");
}