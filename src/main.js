import './style.css';
import { CONTACT_LINKS, PROJECT_LINKS } from './links.js';

function createEntry(link) {
  const item = document.createElement('li');
  item.className = 'entry-item';

  const anchor = document.createElement('a');
  anchor.className = 'editorial-link';
  anchor.href = link.href;

  const text = document.createElement('span');
  text.className = 'link-text mono';
  text.textContent = link.label;
  anchor.append(text);

  if (link.external) {
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    const arrow = document.createElement('span');
    arrow.className = 'link-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    anchor.append(arrow);
  }

  item.append(anchor);
  return item;
}

function renderList(name, links) {
  const list = document.querySelector(`[data-list="${name}"]`);
  if (!list) return;
  list.append(...links.filter((link) => link.href).map(createEntry));
}

renderList('projects', PROJECT_LINKS);
renderList('contact', CONTACT_LINKS);
