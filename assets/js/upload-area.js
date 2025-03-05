const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");

// Estilizar ao arrastar um arquivo sobre a área
uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadArea.classList.add("dragover");
});

// Remover o efeito quando o arquivo sai da área
uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover");
});

// Processar o arquivo ao soltá-lo
uploadArea.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadArea.classList.remove("dragover");

    // Capturar os arquivos arrastados
    const files = event.dataTransfer.files;
    fileInput.files = files; // Adiciona os arquivos ao input
});
