const uploadArea = document.querySelectorAll(".upload-area");
const fileInput = document.querySelectorAll(".file-input");

function colorInUploadArea(areas, inputs) {
    for (let i = 0; i < areas.length; i++) {
        const area = areas[i];
        const input = inputs[i];

        area.addEventListener("dragover", (event) => {
            event.preventDefault();
            area.classList.add("dragover");
        });
        
        // Remover o efeito quando o arquivo sai da área
        area.addEventListener("dragleave", () => {
            area.classList.remove("dragover");
        });
        
        // Processar o arquivo ao soltá-lo
        area.addEventListener("drop", (event) => {
            event.preventDefault();
            area.classList.remove("dragover");
        
            // Capturar os arquivos arrastados
            const files = event.dataTransfer.files;
            input.files = files; // Adiciona os arquivos ao input
        });
    }
}

colorInUploadArea(uploadArea, fileInput);

console.log(uploadArea);
console.log(fileInput);