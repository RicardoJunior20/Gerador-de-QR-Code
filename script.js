const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
        color: "#000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#fff",
    }
});

document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('input-text').value;
    if (text) {
        qrCode.update({
            data: text
        });
        const qrCodeElement = document.getElementById('qr-code');
        qrCodeElement.innerHTML = '';
        qrCode.append(qrCodeElement);
        
        // Remover a classe 'show' e forçar uma reflow para reiniciar a animação
        qrCodeElement.classList.remove('show');
        void qrCodeElement.offsetWidth; // Força o reflow
        
        // Adicionar a classe 'show' para iniciar a animação
        qrCodeElement.classList.add('show');

        // Mostrar o botão de download
        document.getElementById('download-btn').classList.remove('hidden');
    } else {
        alert('Por favor, insira um texto ou URL.');
    }
});

document.getElementById('download-btn').addEventListener('click', () => {
    qrCode.download({
        name: "qrcode",
        extension: "png"
    });
});
