function verificarResposta(correta) {
      if (correta) {
        alert("✅ Parabéns! Resposta correta.");
      } else {
        alert("❌ Ops! Tente novamente.");
       } 
}
function verificarResposta2(correta) {
    if (correta) {
      alert("✅ Isso aí! Caminhada é uma ótima atividade.");
    } else {
      alert("❌ Essa não é uma atividade física. Tente de novo!");
    }
}
 function verificarResposta3(correta) {
    if (correta) {
      alert("✅ Certo! As pernas são fundamentais na corrida.");
    } else {
      alert("❌ Não exatamente. Pense no que mais se move ao correr.");
    }
}
function verificarResposta4(correta) {
    if (correta) {
      alert("✅ Muito bem! O objetivo é promover saúde e socialização.");
    } else {
      alert("❌ Essa não é a resposta certa. Tente de novo!");
    }
}
 function alternarTexto() {
      const texto = document.getElementById('texto');
      texto.style.display = (texto.style.display === 'none' || texto.style.display === 'none') ? 'block' : 'none';
 }