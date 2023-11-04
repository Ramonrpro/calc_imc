const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
   e.preventDefault();
   const peso = form.querySelector("#peso").value;
   const altura = form.querySelector("#altura").value;
   const resultado = document.querySelector("#resultado");
   
   function setResult(msg) {
      resultado.textContent = msg
   }

   if (!peso) {
      setResult("Peso inválido");
      return;
   }
   if (!altura) {
      setResult("Altura inválida");
      return;
   }
   let imc = peso / ((altura /100 )** 2 );

   imc = imc.toFixed(2);
   if (imc < 18.5) {
      setResult(`Seu IMC é ${imc} você está abaixo do peso`);
   } else if (imc > 18.5 && imc < 24.8) {
      setResult(`Seu IMC é ${imc} você está no peso ideal.`);
   } else if (imc > 25 && imc < 29.5) {
      setResult(`Seu imc é ${imc} você está com sobrepeso`);
   } else if (imc > 30 && imc < 34.9) {
      setResult(`Seu imc é ${imc} você está com obesidade grau I`);
   } else if (imc > 35 && imc < 39.9) {
      setResult(`Seu imc é ${imc} você está com obesidade grau II`);
   } else if (imc > 40) {
      setResult(`Seu imc é ${imc} você está com obesidade grau III`);
   }
});
