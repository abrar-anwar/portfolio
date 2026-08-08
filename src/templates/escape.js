'use strict';

const ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escapes text for safe insertion into HTML content or attribute values. */
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ESCAPE_MAP[char]);
}

module.exports = { escapeHtml };
