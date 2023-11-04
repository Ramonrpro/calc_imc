const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
   e.preventDefault();
   const peso = form.querySelector("#peso").value;
   const altura = form.querySelector("#altura").value;
   const resultado = document.querySelector("#resultado");
   let imc = peso / (((altura / 100) * altura) / 100);

   imc = imc.toFixed(2);
   if (imc < 18.5) {
      resultado.textContent = `Seu IMC é ${imc} você está abaixo do peso`;
   } else if (imc > 18.5 && imc < 24.8) {
      resultado.textContent = `Seu IMC é ${imc} você está no peso ideal.`;
   } else if (imc > 25 && imc < 29.5) {
      resultado.textContent = `Seu imc é ${imc} você está com sobrepeso`;
   } else if (imc > 30 && imc < 34.9) {
      resultado.textContent = `Seu imc é ${imc} você está com obesidade grau I`;
   } else if (imc > 35 && imc < 39.9) {
      resultado.textContent = `Seu imc é ${imc} você está com obesidade grau II`;
   } else if (imc > 40) {
      resultado.textContent = `Seu imc é ${imc} você está com obesidade grau III`;
   }
});
