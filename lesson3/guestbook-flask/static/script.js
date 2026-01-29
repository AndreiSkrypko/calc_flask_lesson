document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addForm');
    const author = document.getElementById('author');
    const message = document.getElementById('message');
    const container = document.getElementById('entries');

    function escapeHtml(s) {
        const div = document.createElement('div');
        div.textContent = s;
        return div.innerHTML;
    }

    function formatTime(s) {
        if (!s) return '';
        return s.replace('T', ' ').slice(0, 19);
    }

    function renderEntry(e) {
        const div = document.createElement('div');
        div.className = 'entry';
        div.innerHTML = `
            <div class="author">${escapeHtml(e.author)}</div>
            <div class="message">${escapeHtml(e.message)}</div>
            <div class="time">${formatTime(e.created_at)}</div>
        `;
        return div;
    }

    function load() {
        fetch('/api/entries')
            .then(r => r.json())
            .then(data => {
                container.innerHTML = '';
                if (!data.entries.length) {
                    container.innerHTML = '<p class="empty">Пока нет записей. Оставьте первое!</p>';
                    return;
                }
                data.entries.forEach(e => container.appendChild(renderEntry(e)));
            });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const a = author.value.trim();
        const m = message.value.trim();
        if (!a || !m) return;
        fetch('/api/entries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: a, message: m })
        })
            .then(r => r.json())
            .then(data => {
                if (data.success) {
                    author.value = '';
                    message.value = '';
                    const el = container.querySelector('.empty');
                    if (el) el.remove();
                    container.insertBefore(renderEntry(data.entry), container.firstChild);
                } else {
                    alert(data.error || 'Ошибка');
                }
            });
    });

    load();
});
