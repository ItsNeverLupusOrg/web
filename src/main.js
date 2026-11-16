import './style.css';
import { projects } from './projects.js';

function renderProjects(container, items) {
  for (const item of items) {
    const card = document.createElement(item.url ? 'a' : 'div');
    card.className = 'card';
    if (item.url) {
      card.href = item.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
    }

    const title = document.createElement('h3');
    title.textContent = item.title;

    const text = document.createElement('p');
    text.textContent = item.description;

    card.append(title, text);
    container.append(card);
  }
}

const list = document.getElementById('project-list');
if (list) renderProjects(list, projects);
