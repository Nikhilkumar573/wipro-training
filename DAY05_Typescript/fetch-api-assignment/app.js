/**
 * AppModule — Revealing Module Pattern
 * Fetches posts & todos using Fetch API with error handling and timeout.
 */
const AppModule = (function () {
  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
  const DEFAULT_LIMIT = 20;

  const dom = {
    status: document.getElementById('status'),
    postsList: document.getElementById('postsList'),
    todosList: document.getElementById('todosList'),
    postsMessage: document.getElementById('postsMessage'),
    todosMessage: document.getElementById('todosMessage'),
    loadAllBtn: document.getElementById('loadAllBtn'),
    loadPostsBtn: document.getElementById('loadPostsBtn'),
    loadTodosBtn: document.getElementById('loadTodosBtn'),
    clearBtn: document.getElementById('clearBtn'),
  };

  function makeLoader(text = 'Loading...') {
    const span = document.createElement('span');
    span.innerHTML = '<span class="loader"></span>' + text;
    return span;
  }

  async function fetchWithTimeout(url, options = {}, timeout = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const res = await fetch(url, { signal: controller.signal, ...options });
      clearTimeout(id);
      return res;
    } catch (err) {
      clearTimeout(id);
      throw err;
    }
  }

  function clearList(ul) {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
  }

  function showStatus(message, isError = false) {
    dom.status.textContent = message;
    dom.status.style.color = isError ? '#b91c1c' : '#065f46';
  }

  function renderPosts(posts) {
    clearList(dom.postsList);
    dom.postsMessage.innerHTML = '';
    if (!Array.isArray(posts) || posts.length === 0) {
      dom.postsMessage.innerHTML = '<div class="info">No posts available.</div>';
      return;
    }
    const fragment = document.createDocumentFragment();
    posts.slice(0, DEFAULT_LIMIT).forEach(p => {
      const li = document.createElement('li');
      li.className = 'post';
      li.innerHTML = `
        <div class="meta">Post #${p.id} · User ${p.userId}</div>
        <h3>${escapeHtml(p.title)}</h3>
        <div>${escapeHtml(truncate(p.body, 240))}</div>
      `;
      fragment.appendChild(li);
    });
    dom.postsList.appendChild(fragment);
  }

  function renderTodos(todos) {
    clearList(dom.todosList);
    dom.todosMessage.innerHTML = '';
    if (!Array.isArray(todos) || todos.length === 0) {
      dom.todosMessage.innerHTML = '<div class="info">No todos available.</div>';
      return;
    }
    const fragment = document.createDocumentFragment();
    todos.slice(0, DEFAULT_LIMIT).forEach(t => {
      const li = document.createElement('li');
      li.className = 'todo';
      li.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div class="meta">Todo #${t.id} · User ${t.userId}</div>
            <div class="${t.completed ? 'toggle-checked' : ''}">${escapeHtml(truncate(t.title, 160))}</div>
          </div>
          <div style="margin-left:12px">
            <input type="checkbox" ${t.completed ? 'checked' : ''} aria-label="todo-${t.id}" />
          </div>
        </div>
      `;
      fragment.appendChild(li);
    });
    dom.todosList.appendChild(fragment);
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return String(str);
    return str.replace(/[&<>"']/g, (m) => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[m]));
  }

  function truncate(str, n) {
    if (typeof str !== 'string') return str;
    return str.length > n ? str.slice(0, n) + '…' : str;
  }

  function showErrorIn(container, message) {
    container.innerHTML = `<div class="error" role="alert">${escapeHtml(message)}</div>`;
  }

  async function loadPosts() {
    dom.postsMessage.innerHTML = '';
    dom.postsList.innerHTML = '';
    dom.postsMessage.appendChild(makeLoader('Fetching posts...'));
    showStatus('Fetching posts...');
    try {
      const res = await fetchWithTimeout(POSTS_URL, {}, 10000);
      if (!res.ok) {
        showErrorIn(dom.postsMessage, `Posts fetch failed: ${res.status} ${res.statusText}`);
        showStatus('Failed to fetch posts.', true);
        return;
      }
      const data = await res.json();
      if (!Array.isArray(data)) {
        showErrorIn(dom.postsMessage, 'Unexpected posts response format.');
        showStatus('Invalid posts response.', true);
        return;
      }
      renderPosts(data);
      showStatus(`Loaded ${Math.min(data.length, DEFAULT_LIMIT)} posts.`);
    } catch (err) {
      const message = formatFetchError(err, 'posts');
      showErrorIn(dom.postsMessage, message);
      showStatus('Failed to fetch posts.', true);
    }
  }

  async function loadTodos() {
    dom.todosMessage.innerHTML = '';
    dom.todosList.innerHTML = '';
    dom.todosMessage.appendChild(makeLoader('Fetching todos...'));
    showStatus('Fetching todos...');
    try {
      const res = await fetchWithTimeout(TODOS_URL, {}, 10000);
      if (!res.ok) {
        showErrorIn(dom.todosMessage, `Todos fetch failed: ${res.status} ${res.statusText}`);
        showStatus('Failed to fetch todos.', true);
        return;
      }
      const data = await res.json();
      if (!Array.isArray(data)) {
        showErrorIn(dom.todosMessage, 'Unexpected todos response format.');
        showStatus('Invalid todos response.', true);
        return;
      }
      renderTodos(data);
      showStatus(`Loaded ${Math.min(data.length, DEFAULT_LIMIT)} todos.`);
    } catch (err) {
      const message = formatFetchError(err, 'todos');
      showErrorIn(dom.todosMessage, message);
      showStatus('Failed to fetch todos.', true);
    }
  }

  function formatFetchError(err, label) {
    if (err.name === 'AbortError') return `Request timed out while fetching ${label}. Please try again.`;
    if (err instanceof TypeError) return `Network error while fetching ${label}. Check your connection.`;
    return `Error while fetching ${label}: ${err.message || err}`;
  }

  function clearAll() {
    clearList(dom.postsList);
    clearList(dom.todosList);
    dom.postsMessage.innerHTML = '';
    dom.todosMessage.innerHTML = '';
    showStatus('Cleared.');
  }

  function attachListeners() {
    dom.loadAllBtn.addEventListener('click', () => {
      loadPosts();
      loadTodos();
    });
    dom.loadPostsBtn.addEventListener('click', loadPosts);
    dom.loadTodosBtn.addEventListener('click', loadTodos);
    dom.clearBtn.addEventListener('click', clearAll);
  }

  function init() {
    attachListeners();
    showStatus('Ready. Click "Load Posts & Todos".');
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => AppModule.init());
