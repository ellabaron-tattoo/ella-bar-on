/* ===========================================================================
   Ella Bar On — Lead Attribution Tracker (v3 — עם תפיסת שם)
   ===========================================================================
   זרימה:
   1. גולש נוחת מהמודעה → נשמר UTM ב-localStorage ל-30 יום.
   2. גולש לוחץ על אחד מ-3 כפתורי WhatsApp:
      - הסקריפט עוצר את הקליק
      - פותח מודאל קטן: "מה השם שלך?"
      - הגולש מקליד שם → לוחץ "המשך לוואטסאפ"
      - השם + UTM נשלחים לשיטס
      - השם נדחף לתחילת ההודעה ב-WhatsApp
   3. גולש יכול לדלג ("המשך בלי שם") — אז נשלחים רק UTM, ההודעה לא נוגעת.
   =========================================================================== */

(function ellaAttribution() {
  'use strict';

  const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxt8_xxEv9auW9-RQRYDvQcDH1aMkNVW8nwubnd7mjb_Kzej4kkADbw8oNmPZgfcUjg/exec';
  const STORAGE_KEY = 'ella_attribution_v1';
  const STORAGE_DAYS = 30;
  const MODAL_ID = 'ella-name-modal-v3';

  /* ========== UTM capture ========== */
  function captureUtmFromUrl() {
    try {
      const p = new URLSearchParams(window.location.search);
      const u = {
        source: p.get('utm_source') || null,
        medium: p.get('utm_medium') || null,
        campaign: p.get('utm_campaign') || null,
        content: p.get('utm_content') || null,
        term: p.get('utm_term') || null,
        fbclid: p.get('fbclid') || null,
        landing: location.href,
        ts: Date.now()
      };
      if (u.source || u.fbclid || u.content) {
        u.expires = Date.now() + STORAGE_DAYS * 86400000;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      }
    } catch (e) {}
  }

  function getAttr() {
    try {
      const r = localStorage.getItem(STORAGE_KEY);
      if (!r) return {};
      const d = JSON.parse(r);
      if (d.expires && d.expires < Date.now()) {
        localStorage.removeItem(STORAGE_KEY);
        return {};
      }
      return d;
    } catch (e) { return {}; }
  }

  /* ========== webhook ========== */
  function send(payload) {
    try {
      fetch(SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (e) {}
  }

  /* ========== Pixel events ========== */
  function firePixel(b, a) {
    const ep = {
      content_name: 'WhatsApp_Button_' + b,
      content_category: a.campaign || 'direct',
      source: a.source || 'direct',
      ad_name: a.content || 'none'
    };
    if (typeof window.fbq === 'function') {
      try { window.fbq('track', 'Lead', ep); window.fbq('trackCustom', 'Lead_' + b, ep); } catch (e) {}
    }
    if (typeof window.clarity === 'function') {
      try {
        window.clarity('event', 'WhatsApp_Click_' + b);
        window.clarity('set', 'ad_source', a.content || 'direct');
        window.clarity('set', 'button_clicked', b);
      } catch (e) {}
    }
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'whatsapp_click', {
          button: b, ad_name: a.content || 'direct', campaign: a.campaign || 'none'
        });
      } catch (e) {}
    }
  }

  /* ========== Modal ========== */
  function injectModalStyles() {
    if (document.getElementById(MODAL_ID + '-styles')) return;
    const s = document.createElement('style');
    s.id = MODAL_ID + '-styles';
    s.textContent =
      '#' + MODAL_ID + '{position:fixed;inset:0;z-index:2147483646;background:rgba(20,18,16,.78);' +
      'display:flex;align-items:center;justify-content:center;padding:20px;' +
      'opacity:0;transition:opacity .2s ease;direction:rtl;font-family:inherit;' +
      'backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);}' +
      '#' + MODAL_ID + '.show{opacity:1;}' +
      '#' + MODAL_ID + ' .ella-modal-box{background:#f8f5ee;color:#1a1a1a;border-radius:14px;' +
      'padding:28px 24px 22px;max-width:380px;width:100%;box-shadow:0 18px 60px rgba(0,0,0,.25);' +
      'transform:translateY(8px) scale(.98);transition:transform .25s ease;text-align:right;}' +
      '#' + MODAL_ID + '.show .ella-modal-box{transform:none;}' +
      '#' + MODAL_ID + ' h3{margin:0 0 6px;font-size:20px;font-weight:600;line-height:1.3;}' +
      '#' + MODAL_ID + ' p{margin:0 0 18px;font-size:14px;line-height:1.5;color:#5a5550;}' +
      '#' + MODAL_ID + ' input{width:100%;box-sizing:border-box;padding:13px 14px;' +
      'border:1.5px solid #d8d2c5;background:#fff;border-radius:10px;font-size:16px;' +
      'font-family:inherit;direction:rtl;text-align:right;outline:none;' +
      'transition:border-color .15s ease;}' +
      '#' + MODAL_ID + ' input:focus{border-color:#1a1a1a;}' +
      '#' + MODAL_ID + ' .ella-modal-actions{display:flex;flex-direction:column;gap:8px;margin-top:16px;}' +
      '#' + MODAL_ID + ' button{font-family:inherit;font-size:15px;border:none;cursor:pointer;' +
      'border-radius:10px;padding:13px;font-weight:500;transition:opacity .15s ease;}' +
      '#' + MODAL_ID + ' .ella-btn-primary{background:#1a1a1a;color:#fff;}' +
      '#' + MODAL_ID + ' .ella-btn-primary:hover{opacity:.88;}' +
      '#' + MODAL_ID + ' .ella-btn-skip{background:transparent;color:#5a5550;font-size:13px;' +
      'padding:8px;text-decoration:underline;}' +
      '#' + MODAL_ID + ' .ella-btn-skip:hover{color:#1a1a1a;}';
    document.head.appendChild(s);
  }

  function showNameModal(buttonLetter) {
    return new Promise(function (resolve) {
      injectModalStyles();
      // Remove existing modal if any
      const existing = document.getElementById(MODAL_ID);
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = MODAL_ID;
      overlay.innerHTML =
        '<div class="ella-modal-box" role="dialog" aria-modal="true" aria-labelledby="ella-modal-title">' +
        '  <h3 id="ella-modal-title">רק רגע לפני שאת ממשיכה</h3>' +
        '  <p>איך קוראים לך? ככה אלה תדע מי לרשום ביומן.</p>' +
        '  <input id="ella-name-input" type="text" autocomplete="given-name" ' +
        '         placeholder="השם הפרטי שלך" maxlength="80" />' +
        '  <div class="ella-modal-actions">' +
        '    <button class="ella-btn-primary" type="button">המשך לוואטסאפ ←</button>' +
        '    <button class="ella-btn-skip" type="button">המשך בלי שם</button>' +
        '  </div>' +
        '</div>';
      document.body.appendChild(overlay);
      // animate in
      requestAnimationFrame(function () { overlay.classList.add('show'); });

      const input = overlay.querySelector('#ella-name-input');
      const primaryBtn = overlay.querySelector('.ella-btn-primary');
      const skipBtn = overlay.querySelector('.ella-btn-skip');
      setTimeout(function () { try { input.focus(); } catch (e) {} }, 100);

      function finish(name) {
        overlay.classList.remove('show');
        setTimeout(function () { try { overlay.remove(); } catch (e) {} }, 200);
        resolve(name);
      }
      primaryBtn.addEventListener('click', function () { finish((input.value || '').trim()); });
      skipBtn.addEventListener('click', function () { finish(''); });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); finish((input.value || '').trim()); }
        if (e.key === 'Escape') finish('');
      });
      // close on backdrop click (counts as skip)
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) finish('');
      });
    });
  }

  /* ========== WhatsApp link helper ========== */
  function prependNameToWaUrl(href, name) {
    if (!name) return href;
    try {
      const url = new URL(href);
      const cur = url.searchParams.get('text') || '';
      const greeting = 'היי אלה, אני ' + name + '. ';
      // Avoid double-prepending if name already present
      if (cur.indexOf(greeting) === 0) return href;
      url.searchParams.set('text', greeting + cur);
      return url.toString();
    } catch (e) { return href; }
  }

  /* ========== Click interceptor ========== */
  function handleClick(e) {
    const target = e.target.closest(
      'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp"]'
    );
    if (!target) return;

    // Identify which button
    let b = target.getAttribute('data-button') || target.getAttribute('data-cta');
    if (!b) {
      const container = target.closest('.cta-opts, .cta-list, [class*="opt"]') || document.body;
      const siblings = Array.from(
        container.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]')
      );
      b = ['A', 'B', 'C', 'D', 'E'][siblings.indexOf(target)] || 'X';
    }
    b = String(b).toUpperCase().slice(0, 2);

    // Skip if already processed (avoid loop)
    if (target.dataset.ellaHandled === '1') return;

    // Intercept the click
    e.preventDefault();
    e.stopPropagation();

    const lbl = (target.innerText || target.textContent || '').trim().slice(0, 80);
    const attr = getAttr();
    const targetHref = target.getAttribute('href') || '';
    const targetTarget = target.getAttribute('target') || '_blank';

    showNameModal(b).then(function (name) {
      // Send tracking with name (or empty if skipped)
      send({
        leadName: name || '',
        button: b,
        buttonLabel: lbl,
        utm_content: attr.content || '',
        utm_campaign: attr.campaign || '',
        utm_source: attr.source || 'direct',
        utm_medium: attr.medium || '',
        utm_term: attr.term || '',
        fbclid: attr.fbclid || '',
        pageUrl: location.href,
        referrer: document.referrer || '',
        userAgent: navigator.userAgent || ''
      });
      firePixel(b, attr);

      // Build final URL: prepend name to text if provided
      const finalHref = prependNameToWaUrl(targetHref, name);

      // Navigate to WhatsApp
      target.dataset.ellaHandled = '1';
      try {
        window.open(finalHref, targetTarget);
      } catch (err) {
        location.href = finalHref;
      }
      // Reset flag for future clicks
      setTimeout(function () { delete target.dataset.ellaHandled; }, 1500);
    });
  }

  /* ========== Init ========== */
  function init() {
    captureUtmFromUrl();
    document.body.addEventListener('click', handleClick, true);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
