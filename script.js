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