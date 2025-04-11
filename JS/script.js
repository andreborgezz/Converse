document.addEventListener("DOMContentLoaded", function () {
    const fromBase = document.getElementById("fromBase");
    const toBase = document.getElementById("toBase");
    const inputSection = document.getElementById("inputSection");
  
    function verificarSelecao() {
      if (fromBase.value && toBase.value && fromBase.value !== toBase.value) {
        inputSection.classList.remove("hidden");
      } else {
        inputSection.classList.add("hidden");
      }
    }
  
    fromBase.addEventListener("change", verificarSelecao);
    toBase.addEventListener("change", verificarSelecao);
  
    document.getElementById("converterForm").addEventListener("submit", function (e) {
      e.preventDefault();
      converter();
    });
  
    function converter() {
      const input = document.getElementById("inputNumber").value.trim();
      const resultado = document.getElementById("resultado");
      const novaConta = document.getElementById("novaConta"); // Botão "Fazer outra conta"
  
      const from = parseInt(fromBase.value);
      const to = parseInt(toBase.value);
  
      if (!input) {
        resultado.innerText = "Por favor, digite um número.";
        novaConta.style.display = "none"; // Esconde o botão se houver erro
        return;
      }
  
      try {
        const decimal = parseInt(input, from);
        if (isNaN(decimal)) {
          resultado.innerText = "Número inválido para a base selecionada.";
          novaConta.style.display = "none"; // Esconde o botão se houver erro
          return;
        }
  
        const convertido = decimal.toString(to).toUpperCase();
        resultado.innerText = `Resultado: ${convertido}`;
        novaConta.style.display = "block"; // Exibe o botão após a conversão
      } catch (e) {
        resultado.innerText = "Erro na conversão.";
        novaConta.style.display = "none"; // Esconde o botão se houver erro
      }
    }

    document.getElementById('novaConta').addEventListener('click', () => {
      location.reload(); // Recarrega a página para realizar outra conta
    });
  });
