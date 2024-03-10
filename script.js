// Função para abrir o pop-up do vídeo
function openVideoPopup() {
    var videoSrc = "https://remakez.com/video/Trailer.mp4";
    var videoFrame = document.getElementById("video-frame");
    videoFrame.src = videoSrc;
    document.getElementById("video-popup").style.display = "block";
    document.getElementById("video-overlay").style.display = "block";
    
    // Adiciona um evento de escuta para quando o vídeo terminar
    videoFrame.addEventListener("ended", function() {
        closeVideoPopup();
    });

    
}

// Função para fechar o pop-up do vídeo
function closeVideoPopup() {
    var videoFrame = document.getElementById("video-frame");
    videoFrame.pause();
    videoFrame.currentTime = 0;
    document.getElementById("video-popup").style.display = "none";
    document.getElementById("video-overlay").style.display = "none";
}


closeVideoPopup()


// Script para desativar elementos após 10 segundos de inatividade
let idleTime = 0; // Tempo de inatividade em segundos
const classesDesativar = ["background-image", "cabecalho", "welcome-message"]; // Classes dos elementos CSS

document.addEventListener("mousemove", () => {
  idleTime = 0; // Reinicia o tempo de inatividade a cada movimento do mouse

  // Muta novamente o vídeo
  const video = document.querySelector('.caixa-video video');
  video.muted = true;
});

document.addEventListener("keydown", () => {
  idleTime = 0; // Reinicia o tempo de inatividade a cada pressionamento de tecla
});

setInterval(() => {
  idleTime++; // Incrementa o tempo de inatividade a cada segundo

  if (idleTime >= 3) { // Desativa elementos após 10 segundos de inatividade
    classesDesativar.forEach((className) => {
      const elements = document.getElementsByClassName(className);
      Array.from(elements).forEach((element) => {
        element.style.pointerEvents = "none"; // Desativa a interação com o elemento
        element.style.opacity = "0.0"; // Diminui a opacidade do elemento
        element.style.transition = "opacity 1s"; // Adiciona uma transição suave de 1 segundo
      });
    });

    // Ativar o som do vídeo
    const video = document.querySelector('.caixa-video video');
    video.muted = false;
  } else { // Reativa elementos se houver atividade
    classesDesativar.forEach((className) => {
      const elements = document.getElementsByClassName(className);
      Array.from(elements).forEach((element) => {
        element.style.pointerEvents = "auto"; // Reativa a interação com o elemento
        element.style.opacity = "1"; // Restaura a opacidade do elemento
        element.style.transition = "opacity 1s"; // Adiciona uma transição suave de 1 segundo
      });
    });
  }
}, 1000); // Verifica a cada segundo

