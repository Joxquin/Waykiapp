document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('destino-search');
    const destinosList = document.getElementById('destinos-list');
    const distritoSelect = document.getElementById('distrito-select');
    if (!searchInput || !destinosList) return;

    const destinos = destinosList.querySelectorAll('a');
    destinos.forEach(a => {
        const caption = a.querySelector('.img-caption');
        if (!caption) return;
        const text = caption.textContent.trim().toLowerCase();
        if (text === 'plaza de cayma') a.dataset.distrito = 'cayma';
        else if (text === 'mirador de sachaca') a.dataset.distrito = 'sachaca';
        else if (text === 'ruta del sillar') a.dataset.distrito = 'cerrocolorado';
        else if (text === 'mirador de yanahuara') a.dataset.distrito = 'yanahuara';
        else if (text === 'las salinas') a.dataset.distrito = 'sanjuandetarucani';
        else a.dataset.distrito = 'otros';
    });

    function filtrarDestinos() {
        const filter = searchInput.value.toLowerCase();
        const distrito = distritoSelect ? distritoSelect.value : 'todos';
        destinos.forEach(a => {
            const caption = a.querySelector('.img-caption');
            const text = caption ? caption.textContent.toLowerCase() : '';
            const coincideDistrito = (distrito === 'todos') || (a.dataset.distrito === distrito);
            const coincideTexto = text.includes(filter);
            a.style.display = (coincideDistrito && coincideTexto) ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filtrarDestinos);
    if (distritoSelect) {
        distritoSelect.addEventListener('change', filtrarDestinos);
    }
});
