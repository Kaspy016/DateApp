document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts');
    
    // Vytvoření 30 srdíček, která budou létat v pozadí
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heartsContainer.appendChild(heart);
    }
});
