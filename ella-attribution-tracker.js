(function(){
var W='https://script.google.com/macros/s/AKfycbxJBUDUeTuZLZRDlyN3xncRkMNB54s80FWQCKWr_E4abham32r29rcR5L8eigEOmbdhew/exec';
var WA='972503088644';
var K='ella_attribution_v1';
var D=30;
var M='ella-name-modal-v5';

function cap(){try{var p=new URLSearchParams(location.search);var u={source:p.get('utm_source')||null,medium:p.get('utm_medium')||null,campaign:p.get('utm_campaign')||null,content:p.get('utm_content')||null,term:p.get('utm_term')||null,fbclid:p.get('fbclid')||null,landing:location.href,ts:Date.now()};if(u.source||u.fbclid||u.content){u.expires=Date.now()+D*86400000;localStorage.setItem(K,JSON.stringify(u));}}catch(e){}}

function gA(){try{var r=localStorage.getItem(K);if(!r)return{};var d=JSON.parse(r);if(d.expires&&d.expires<Date.now()){localStorage.removeItem(K);return{};}return d;}catch(e){return{};}}

function snd(p){try{if(navigator.sendBeacon){var blob=new Blob([JSON.stringify(p)],{type:'text/plain;charset=UTF-8'});navigator.sendBeacon(W,blob);}else{fetch(W,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(p)}).catch(function(){});}}catch(e){}}

function classify(msg){msg=(msg||'').toLowerCase();if(msg.indexOf('עיצוב')>-1||msg.indexOf('פריהנד')>-1)return'A';if(msg.indexOf('תיקון')>-1||msg.indexOf('כיסוי')>-1||msg.indexOf('cover')>-1)return'B';return'C';}

function fp(b,a,name){if(typeof window.fbq==='function'){try{window.fbq('track','Lead',{content_name:'WhatsApp_Button_'+b,content_category:a.campaign||'direct'});window.fbq('trackCustom','Lead_'+b,{lead_name:name||''});}catch(e){}}if(typeof window.clarity==='function'){try{window.clarity('event','WhatsApp_Click_'+b);}catch(e){}}}

function loadFont(){try{if(document.getElementById('ella-assistant-font'))return;var l=document.createElement('link');l.id='ella-assistant-font';l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap';document.head.appendChild(l);}catch(e){}}

function normPhone(p){p=(p||'').replace(/[^\d]/g,'');if(!p)return'';if(p.indexOf('0')===0)p='972'+p.substring(1);return p;}

function iS(){if(document.getElementById(M+'-s'))return;var s=document.createElement('style');s.id=M+'-s';s.textContent='#'+M+'{position:fixed;inset:0;z-index:2147483646;background:rgba(20,18,16,.82);display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .2s ease;direction:rtl;font-family:Assistant,system-ui,sans-serif;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}#'+M+'.show{opacity:1}#'+M+' .emb{background:#373532;color:#fff;border:1px solid rgba(240,232,212,.12);border-radius:16px;padding:28px 24px 22px;max-width:420px;width:100%;box-shadow:0 24px 80px rgba(0,0,0,.5);transform:translateY(8px) scale(.98);transition:transform .25s ease;text-align:right;max-height:90vh;overflow-y:auto;font-family:Assistant,system-ui,sans-serif}#'+M+'.show .emb{transform:none}#'+M+' h3{margin:0 0 6px;font-size:22px;font-weight:700;line-height:1.3;background:linear-gradient(135deg,#F0E8D4 0%,#D4C7A8 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}#'+M+' p.sub{margin:0 0 18px;font-size:14px;line-height:1.55;color:rgba(255,255,255,.75);font-weight:400}#'+M+' input[type=text],#'+M+' input[type=tel]{width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid rgba(240,232,212,.22);background:rgba(255,255,255,.04);color:#fff;border-radius:10px;font-size:16px;font-family:Assistant,system-ui,sans-serif;direction:rtl;text-align:right;outline:none;transition:border-color .15s ease;margin-bottom:10px}#'+M+' input::placeholder{color:rgba(255,255,255,.4)}#'+M+' input[type=text]:focus,#'+M+' input[type=tel]:focus{border-color:#F0E8D4;background:rgba(255,255,255,.06)}#'+M+' .img-row{margin-top:8px}#'+M+' .img-label{display:block;padding:11px 12px;background:rgba(255,255,255,.04);border:1.5px dashed rgba(240,232,212,.28);border-radius:10px;cursor:pointer;font-size:14px;color:rgba(255,255,255,.78);text-align:center;transition:all .15s;font-family:Assistant,system-ui,sans-serif}#'+M+' .img-label:hover{border-color:#F0E8D4;color:#F0E8D4;background:rgba(255,255,255,.06)}#'+M+' .img-label .ico{font-size:18px;margin-left:6px}#'+M+' input[type=file]{display:none}#'+M+' .img-preview{display:none;margin-top:10px;text-align:center}#'+M+' .img-preview.show{display:block}#'+M+' .img-preview img{max-width:100%;max-height:140px;border-radius:8px;margin-bottom:6px}#'+M+' .img-preview .rm{background:transparent;border:none;color:#E8B4A0;font-size:13px;text-decoration:underline;cursor:pointer;padding:2px 6px;font-family:Assistant,system-ui,sans-serif}#'+M+' .ea{display:flex;flex-direction:column;gap:8px;margin-top:18px}#'+M+' button.action{font-family:Assistant,system-ui,sans-serif;font-size:15px;border:none;cursor:pointer;border-radius:10px;padding:14px;font-weight:600;transition:opacity .15s ease,transform .1s}#'+M+' .ep{background:linear-gradient(135deg,#F0E8D4 0%,#D4C7A8 100%);color:#1a1a1a}#'+M+' .ep:hover:not(:disabled){opacity:.92;transform:translateY(-1px)}#'+M+' .ep:disabled{opacity:.4;cursor:not-allowed}#'+M+' .es{background:transparent;color:rgba(255,255,255,.6);font-size:13px;padding:8px;text-decoration:underline;font-weight:400}#'+M+' .es:hover{color:#F0E8D4}#'+M+' .loading{display:none;text-align:center;color:rgba(255,255,255,.6);font-size:13px;margin-top:8px}#'+M+' .loading.show{display:block}';document.head.appendChild(s);}

function compressImage(file,maxKB){return new Promise(function(res,rej){var reader=new FileReader();reader.onload=function(){var img=new Image();img.onload=function(){var canvas=document.createElement('canvas');var maxDim=1024;var w=img.width,h=img.height;if(w>h&&w>maxDim){h*=maxDim/w;w=maxDim;}else if(h>maxDim){w*=maxDim/h;h=maxDim;}canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(img,0,0,w,h);var q=0.85;var dataUrl;do{dataUrl=canvas.toDataURL('image/jpeg',q);q-=0.1;}while(dataUrl.length>maxKB*1024*1.4&&q>0.2);res(dataUrl);};img.onerror=rej;img.src=reader.result;};reader.onerror=rej;reader.readAsDataURL(file);});}

function sM(b,label){return new Promise(function(res){loadFont();iS();var ex=document.getElementById(M);if(ex)ex.remove();var o=document.createElement('div');o.id=M;o.innerHTML='<div class="emb" role="dialog" aria-modal="true"><h3>פרט אחרון לפני הצעת המחיר</h3><p class="sub">השאר/י שם וטלפון כדי שאלה תוכל לחזור אליך עם הצעת מחיר ופרטים נוספים. אפשר גם להוסיף תמונה כדוגמה (לא חובה).</p><input id="eni" type="text" autocomplete="name" placeholder="שם מלא" maxlength="80" /><input id="ephn" type="tel" autocomplete="tel" placeholder="מספר טלפון" maxlength="20" inputmode="tel" /><div class="img-row"><label class="img-label" for="emi"><span class="ico">📷</span>הוספת תמונה לדוגמה (לא חובה)</label><input id="emi" type="file" accept="image/*" /></div><div class="img-preview" id="epv"><img id="epi" alt="" /><br><button type="button" class="rm" id="erm">הסר תמונה</button></div><div class="loading" id="elp">מעלה תמונה…</div><div class="ea"><button class="action ep" id="esb" type="button" disabled>המשך לקבלת הצעת מחיר ←</button><button class="action es" type="button" id="ebk">חזרה</button></div></div>';document.body.appendChild(o);requestAnimationFrame(function(){o.classList.add('show');});var i=o.querySelector('#eni'),ph=o.querySelector('#ephn'),sb=o.querySelector('#esb'),bk=o.querySelector('#ebk'),mi=o.querySelector('#emi'),pv=o.querySelector('#epv'),pi=o.querySelector('#epi'),rm=o.querySelector('#erm'),lp=o.querySelector('#elp');var imgData=null;setTimeout(function(){try{i.focus();}catch(e){}},100);function upd(){var nameOk=i.value.trim().length>=2;var phoneOk=ph.value.replace(/[^\d]/g,'').length>=9;sb.disabled=!(nameOk&&phoneOk);}i.addEventListener('input',upd);ph.addEventListener('input',upd);i.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();ph.focus();}if(e.key==='Escape')bk.click();});ph.addEventListener('keydown',function(e){if(e.key==='Enter'&&!sb.disabled)sb.click();if(e.key==='Escape')bk.click();});mi.addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;lp.classList.add('show');compressImage(f,200).then(function(d){imgData=d;pi.src=d;pv.classList.add('show');lp.classList.remove('show');}).catch(function(){lp.classList.remove('show');alert('שגיאה בעיבוד התמונה');});});rm.addEventListener('click',function(){imgData=null;mi.value='';pv.classList.remove('show');});function fin(n,p){o.classList.remove('show');setTimeout(function(){try{o.remove();}catch(e){}},200);res({name:n,phone:p,image:imgData});}sb.addEventListener('click',function(){var n=i.value.trim();var p=ph.value.trim();if(n.length>=2&&p.replace(/[^\d]/g,'').length>=9)fin(n,p);});bk.addEventListener('click',function(){fin(null,null);});o.addEventListener('click',function(e){if(e.target===o)fin(null,null);});});}

function pN(h,n,p,imgInfo){if(!n&&!p&&!imgInfo)return h;try{var u=new URL(h);var c=u.searchParams.get('text')||'';c=c.replace(/^\s*היי\s+אלה[,،]?\s*/,'').trim();var greeting='היי אלה, ';if(n)greeting+='שמי '+n+'. ';var extra='';if(imgInfo)extra=' (צרפתי תמונה לדוגמה)';u.searchParams.set('text',greeting+c+extra);return u.toString();}catch(e){return h;}}

function hc(e){
  var t=e.target.closest('a[href*="wa.me"],a[href*="api.whatsapp.com"],a[href*="whatsapp"],button.cta-opt,.cta-opt');
  if(!t)return;
  if(t.dataset.ellaHandled==='1')return;

  var dataMsg=t.dataset?t.dataset.msg:(t.getAttribute&&t.getAttribute('data-msg'));
  var b=t.getAttribute('data-button')||t.getAttribute('data-cta');
  if(!b&&dataMsg){b=classify(dataMsg);}
  if(!b){var c=t.closest('.cta-opts,.cta-list,[class*="opt"]')||document.body;var s=Array.from(c.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"],button.cta-opt'));b=['A','B','C','D','E'][s.indexOf(t)]||'X';}
  b=String(b).toUpperCase().slice(0,2);

  e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();

  var lbl=(t.innerText||t.textContent||'').trim().slice(0,80);
  var a=gA();
  var h=t.getAttribute('href')||'';
  if(!h&&dataMsg){h='https://wa.me/'+WA+'?text='+encodeURIComponent(dataMsg);}
  var tgt=t.getAttribute('target')||'_blank';

  sM(b,lbl).then(function(result){
    if(!result||(!result.name&&!result.phone&&!result.image))return;

    var normalizedPhone=normPhone(result.phone);

    snd({
      leadName:result.name||'',
      name:result.name||'',
      phone:result.phone||'',
      phoneNormalized:normalizedPhone,
      button:b,
      buttonLabel:lbl,
      image_data:result.image||'',
      image_name:result.image?'lead-'+Date.now()+'.jpg':'',
      utm_content:a.content||'',
      utm_campaign:a.campaign||'',
      utm_source:a.source||'direct',
      utm_medium:a.medium||'',
      utm_term:a.term||'',
      fbclid:a.fbclid||'',
      pageUrl:location.href,
      referrer:document.referrer||'',
      userAgent:navigator.userAgent||''
    });

    fp(b,a,result.name);

    var fh=pN(h,result.name,result.phone,result.image);
    t.dataset.ellaHandled='1';

    if(typeof window.closeCtaModal==='function'){try{window.closeCtaModal();}catch(e){}}

    try{window.open(fh,tgt);}catch(err){location.href=fh;}
    setTimeout(function(){delete t.dataset.ellaHandled;},1500);
  });
}

function init(){cap();loadFont();document.body.addEventListener('click',hc,true);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
