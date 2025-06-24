// Variável para armazenar a instância da animação
let lottieAnimation;

// Função para carregar animação do arquivo externo
function initLottieAnimation() {
  const container = document.getElementById('item466'); // incluir o ID do elemento onde a animação será renderizada
  if (container) {
    lottieAnimation = lottie.loadAnimation({
      container: container,
      renderer: 'svg', // 'svg', 'canvas' ou 'html'
      loop: false,
      autoplay: true,
      path: './assets/capa.json' // Carrega do arquivo capa.json
    });
    
    // Opcional: Adicionar listeners para eventos
    lottieAnimation.addEventListener('DOMLoaded', function() {
      console.log('Animação Lottie carregada com sucesso!');
    });
    
    lottieAnimation.addEventListener('error', function(error) {
      console.error('Erro ao carregar a animação:', error);
    });
  }
}

// Inicializar a animação quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  // Aguardar um pouco para garantir que todos os scripts carregaram
  setTimeout(initLottieAnimation, 150);
});

// Funções opcionais para controlar a animação
function playAnimation() {
  if (lottieAnimation) lottieAnimation.play();
}

function pauseAnimation() {
  if (lottieAnimation) lottieAnimation.pause();
}

function stopAnimation() {
  if (lottieAnimation) lottieAnimation.stop();
}