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



let idleTime = 5; // Tempo de inatividade em segundos
const elementosDesativar = ["background-image", "cabecalho", "welcome-message"]; // IDs dos elementos CSS

document.addEventListener("mousemove", () => {
  idleTime = 0; // Reinicia o tempo de inatividade a cada movimento do mouse
});

document.addEventListener("keydown", () => {
  idleTime = 0; // Reinicia o tempo de inatividade a cada pressionamento de tecla
});

setInterval(() => {
  idleTime++; // Incrementa o tempo de inatividade a cada segundo

  if (idleTime >= 5) { // Desativa elementos após 5 segundos de inatividade
    elementosDesativar.forEach((id) => {
      document.getElementById(id).style.pointerEvents = "none"; // Desativa a interação com o elemento
      document.getElementById(id).style.opacity = "0.5"; // Reduz a opacidade do elemento
    });
  } else {
    elementosDesativar.forEach((id) => {
      document.getElementById(id).style.pointerEvents = "auto"; // Reativa a interação com o elemento
      document.getElementById(id).style.opacity = "1"; // Restaura a opacidade do elemento
    });
  }
}, 1000); // Verifica a cada segundo
