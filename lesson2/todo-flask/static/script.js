document.addEventListener('DOMContentLoaded', function() {
    const newTodo = document.getElementById('newTodo');
    const addBtn = document.getElementById('addBtn');
    const list = document.getElementById('todoList');
    const emptyMsg = document.getElementById('emptyMsg');

    function showEmpty(show) {
        emptyMsg.classList.toggle('visible', show);
    }

    function renderItem(t) {
        const li = document.createElement('li');
        if (t.done) li.classList.add('done');
        li.dataset.id = t.id;
        li.innerHTML = `
            <span class="text">${escapeHtml(t.text)}</span>
            <button type="button" class="toggle">${t.done ? '↩ Вернуть' : '✓ Готово'}</button>
            <button type="button" class="del">✕</button>
        `;
        li.querySelector('.toggle').addEventListener('click', () => toggle(t.id));
        li.querySelector('.del').addEventListener('click', () => remove(t.id));
        return li;
    }

    function escapeHtml(s) {
        const div = document.createElement('div');
        div.textContent = s;
        return div.innerHTML;
    }

    function load() {
        fetch('/api/todos')
            .then(r => r.json())
            .then(data => {
                list.innerHTML = '';
                data.todos.forEach(t => list.appendChild(renderItem(t)));
                showEmpty(data.todos.length === 0);
            });
    }

    function add() {
        const text = newTodo.value.trim();
        if (!text) return;
        fetch('/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text })
        })
            .then(r => r.json())
            .then(data => {
                if (data.success) {
                    newTodo.value = '';
                    list.appendChild(renderItem(data.todo));
                    showEmpty(false);
                }
            });
    }

    function toggle(id) {
        fetch(`/api/todos/${id}/toggle`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                if (data.success) load();
            });
    }

    function remove(id) {
        fetch(`/api/todos/${id}`, { method: 'DELETE' })
            .then(r => r.json())
            .then(data => {
                if (data.success) {
                    const li = list.querySelector(`[data-id="${id}"]`);
                    if (li) li.remove();
                    showEmpty(list.children.length === 0);
                }
            });
    }

    addBtn.addEventListener('click', add);
    newTodo.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') add();
    });

    load();
});
