// TimeLi homepage — 极简交互
(function () {
  'use strict';

  // 年份
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // 滚动进入视口时淡入
  var targets = document.querySelectorAll('.about__body, .facts, .entry');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('reveal', 'is-in'); });
    return;
  }

  targets.forEach(function (el) { el.classList.add('reveal'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (el) { io.observe(el); });
})();
