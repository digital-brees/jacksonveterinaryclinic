/* ============================================================
   Jackson Veterinary Clinic — Accessibility enhancements
   WCAG 2.2.2 (Pause, Stop, Hide): give every autoplaying hero
   video a keyboard-operable pause/play control.
   Reduced-motion users never see the video (CSS hides it), so
   we skip the control for them too.
   ============================================================ */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>';
  var PLAY  = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>';

  document.querySelectorAll('.hero').forEach(function (hero) {
    var vid = hero.querySelector('video.hero-video');
    if (!vid) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hero-pause';
    btn.innerHTML = PAUSE;
    btn.setAttribute('aria-label', 'Pause background video');

    btn.addEventListener('click', function () {
      if (vid.paused) {
        vid.play();
        btn.innerHTML = PAUSE;
        btn.setAttribute('aria-label', 'Pause background video');
      } else {
        vid.pause();
        btn.innerHTML = PLAY;
        btn.setAttribute('aria-label', 'Play background video');
      }
    });

    hero.appendChild(btn);
  });
})();
