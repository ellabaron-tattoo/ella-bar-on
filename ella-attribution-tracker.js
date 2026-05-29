(function(){
var W='https://script.google.com/macros/s/AKfycbxt8_xxEv9auW9-RQRYDvQcDH1aMkNVW8nwubnd7mjb_Kzej4kkADbw8oNmPZgfcUjg/exec';
var WA='972503088644';
var K='ella_attribution_v1';
var D=30;
var M='ella-name-modal-v4';

function cap(){try{var p=new URLSearchParams(location.search);var u={source:p.get('utm_source')||null,medium:p.get('utm_medium')||null,campaign:p.get('utm_campaign')||null,content:p.get('utm_content')||null,term:p.get('utm_term')||null,fbclid:p.get('fbclid')||null,landing:location.href,ts:Date.now()};if(u.source||u.fbclid||u.content){u.expires=Date.now()+D*86400000;localStorage.setItem(K,JSON.stringify(u));}}catch(e){}}

function gA(){try{var r=localStorage.getItem(K);if(!r)return{};var d=JSON.parse(r);if(d.expires&&d.expires<Date.now()){localStorage.removeItem(K);return{};}return d;}catch(e){return{};}}

function snd(p){try{if(navigator.sendBeacon){var blob=new Blob([JSON.stringify(p)],{type:'text/plain;charset=UTF-8'});navigator.sendBeacon(W,blob);}else{fetch(W,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(p)}).catch(function(){});}}catch(e){}}

function classify(msg){msg=(msg||'').toLowerCase();if(msg.indexOf('עיצוב')>-1||msg.indexOf('פריהנד')>-1)return'A';if(msg.indexOf('תיקון')>-1||msg.indexOf('כיסוי')>-1||msg.indexOf('cover')>-1)return'B';return'C';}

function fp(b,a,name){if(typeof window.fbq==='function'){try{window.fbq('track','Lead',{content_name:'WhatsApp_Button_'+b,content_category:a.campaign||'direct'});window.fbq('trackCustom','Lead_'+b,{lead_name:name||''});}catch(e){}}if(typeof window.clarity==='function'){try{window.clarity('event','WhatsApp_Click_'+b);}catch(e){}}}

function compressImage(file,maxKB){return new Promise(function(res,rej){var reader=new FileReader();reader.onload=function(){var img=new Image();img.onload=function(){var canvas=document.createElement('canvas');var maxDim=1024;var w=img.width,h=img.height;if(w>h&&w>maxDim){h*=maxDim/w;w=maxDim;}else if(h>maxDim){w*=maxDim/h;h=maxDim;}canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(img,0,0,w,h);var q=0.85;var dataUrl;do{dataUrl=canvas.toDataURL('image/jpeg',q);q-=0.1;}while(dataUrl.length>maxKB*1024*1.4&&q>0.2);res(dataUrl);};img.onerror=rej;img.src=reader.result;};reader.onerror=rej;reader.readAsDataURL(file);});}

function iS(){if(document.getElementById(M+'-s'))return;var s=document.createElement('style');s.id=M+'-s';s.textContent='#'+M+'{position:fixed;inset:0;z-index:2147483646;background:rgba(20,18,16,.78);display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .2s ease;direction:rtl;font-family:inherit;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}#'+M+'.show{opacity:1}#'+M+' .emb{background:#f8f5ee;color:#1a1a1a;border-radius:14px;padding:24px 22px 20px;max-width:420px;width:100%;box-shadow:0 18px 60px rgba(0,0,0,.25);transform:translateY(8px) scale(.98);transition:transform .25s ease;text-align:right;max-height:90vh;overflow-y:auto}#'+M+'.show .emb{transform:none}#'+M+' h3{margin:0 0 6px;font-size:20px;font-weight:600;line-height:1.3}#'+M+' p.sub{margin:0 0 16px;font-size:14px;line-height:1.5;color:#5a5550}#'+M+' input[type=text]{width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid #d8d2c5;background:#fff;border-radius:10px;font-size:16px;font-family:inherit;direction:rtl;text-align:right;outline:none;transition:border-color .15s ease}#'+M+' input[type=text]:focus{border-color:#1a1a1a}#'+M+' .img-row{margin-top:12px}#'+M+' .img-label{display:block;padding:10px 12px;background:#fff;border:1.5px dashed #d8d2c5;border-radius:10px;cursor:pointer;font-size:14px;color:#5a5550;text-align:center;transition:border-color .15s}#'+M+' .img-label:hover{border-color:#1a1a1a;color:#1a1a1a}#'+M+' .img-label .ico{font-size:18px;margin-left:6px}#'+M+' input[type=file]{display:none}#'+M+' .img-preview{display:none;margin-top:10px;text-align:center}#'+M+' .img-preview.show{display:block}#'+M+' .img-preview img{max-width:100%;max-height:140px;border-radius:8px;margin-bottom:6px}#'+M+' .img-preview .rm{background:transparent;border:none;color:#a44;font-size:13px;text-decoration:underline;cursor:pointer;padding:2px 6px}#'+M+' .ea{display:flex;flex-direction:column;gap:8px;margin-top:16px}#'+M+' button.action{font-family:inherit;font-size:15px;border:none;cursor:pointer;border-radius:10px;padding:13px;font-weight:500;transition:opacity .15s ease}#'+M+' .ep{background:#1a1a1a;color:#fff}#'+M+' .ep:hover{opacity:.88}#'+M+' .ep:disabled{opacity:.5;cursor:not-allowed}#'+M+' .es{background:transparent;color:#5a5550;font-size:13px;padding:8px;text-decoration:underline}#'+M+' .es:hover{color:#1a1a1a}#'+M+' .loading{display:none;text-align:center;color:#5a5550;font-size:13px;margin-top:8px}#'+M+' .loading.show{display:block}@keyframes mlfFade{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}.cta-opts-inline .cta-opt:hover{transform:translateY(-2px)!important;box-shadow:0 12px 32px rgba(0,0,0,0.5),0 4px 10px rgba(0,0,0,0.4)!important;}';document.head.appendChild(s);}

function sM(b,label){return new Promise(function(res){iS();var ex=document.getElementById(M);if(ex)ex.remove();var o=document.createElement('div');o.id=M;o.innerHTML='<div class="emb" role="dialog" aria-modal="true"><h3>רגע לפני שנדבר</h3><p class="sub">איך לפנות אליך? (אפשר גם להוסיף תמונה כדוגמה — לא חובה)</p><input id="eni" type="text" autocomplete="name" placeholder="השם שלך" maxlength="80" /><div class="img-row"><label class="img-label" for="emi"><span class="ico">📷</span>הוספת תמונה לדוגמה (לא חובה)</label><input id="emi" type="file" accept="image/*" /></div><div class="img-preview" id="epv"><img id="epi" alt="" /><br><button type="button" class="rm" id="erm">הסר תמונה</button></div><div class="loading" id="elp">מעלה תמונה…</div><div class="ea"><button class="action ep" id="esb" type="button" disabled>המשך לוואטסאפ ←</button><button class="action es" type="button" id="ebk">חזרה</button></div></div>';document.body.appendChild(o);requestAnimationFrame(function(){o.classList.add('show');});var i=o.querySelector('#eni'),sb=o.querySelector('#esb'),bk=o.querySelector('#ebk'),mi=o.querySelector('#emi'),pv=o.querySelector('#epv'),pi=o.querySelector('#epi'),rm=o.querySelector('#erm'),lp=o.querySelector('#elp');var imgData=null;setTimeout(function(){try{i.focus();}catch(e){}},100);function upd(){sb.disabled=i.value.trim().length<2;}i.addEventListener('input',upd);i.addEventListener('keydown',function(e){if(e.key==='Enter'&&!sb.disabled)sb.click();if(e.key==='Escape')bk.click();});mi.addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;lp.classList.add('show');compressImage(f,200).then(function(d){imgData=d;pi.src=d;pv.classList.add('show');lp.classList.remove('show');}).catch(function(){lp.classList.remove('show');alert('שגיאה בעיבוד התמונה');});});rm.addEventListener('click',function(){imgData=null;mi.value='';pv.classList.remove('show');});function fin(n){o.classList.remove('show');setTimeout(function(){try{o.remove();}catch(e){}},200);res({name:n,image:imgData});}sb.addEventListener('click',function(){var n=i.value.trim();if(n.length>=2)fin(n);});bk.addEventListener('click',function(){fin(null);});o.addEventListener('click',function(e){if(e.target===o)fin(null);});});}

function pN(h,n,imgInfo){if(!n&&!imgInfo)return h;try{var u=new URL(h);var c=u.searchParams.get('text')||'';var cleanMsg=c.replace(/^היי\s*אלה,?\s*/,'');var greeting=n?('היי אלה, קוראים לי '+n+'. '):'היי אלה, ';var extra=imgInfo?' (צרפתי תמונה לדוגמה)':'';u.searchParams.set('text',greeting+cleanMsg+extra);return u.toString();}catch(e){return h;}}

function hc(e){
  var t=e.target.closest('a[href*="wa.me"],a[href*="api.whatsapp.com"],a[href*="whatsapp"],button.cta-opt,.cta-opt');
  if(!t)return;
  if(t.dataset.ellaHandled==='1')return;

  var dataMsg=t.dataset?t.dataset.msg:(t.getAttribute&&t.getAttribute('data-msg'));
  var b=t.getAttribute('data-button')||t.getAttribute('data-cta');
  if(!b&&dataMsg){b=classify(dataMsg);}
  if(!b){var c=t.closest('.cta-opts,.cta-list,.cta-opts-inline,[class*="opt"]')||document.body;var s=Array.from(c.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"],button.cta-opt,.cta-opt'));b=['A','B','C','D','E'][s.indexOf(t)]||'X';}
  b=String(b).toUpperCase().slice(0,2);

  e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();

  var lbl=(t.innerText||t.textContent||'').trim().slice(0,80);
  var a=gA();
  var h=t.getAttribute('href')||'';
  if(!h&&dataMsg){h='https://wa.me/'+WA+'?text='+encodeURIComponent(dataMsg);}
  var tgt=t.getAttribute('target')||'_blank';

  sM(b,lbl).then(function(result){
    if(!result||(!result.name&&!result.image))return;

    snd({
      leadName:result.name||'',
      name:result.name||'',
      button:b,
      buttonLabel:lbl,
      image_data:result.image||'',
      image_name:'lead-'+Date.now()+'.jpg',
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

    var fh=pN(h,result.name,result.image);
    t.dataset.ellaHandled='1';

    if(typeof window.closeCtaModal==='function'){try{window.closeCtaModal();}catch(e){}}

    try{window.open(fh,tgt);}catch(err){location.href=fh;}
    setTimeout(function(){delete t.dataset.ellaHandled;},1500);
  });
}

function inlineOpts(){try{var modal=document.querySelector('.cta-modal');var main=document.querySelector('.cta-main');var opts=modal?modal.querySelectorAll('.cta-opt'):[];if(!opts.length||!main)return;if(document.querySelector('.cta-opts-inline'))return;main.style.display='none';var wrap=document.createElement('div');wrap.className='cta-opts-inline';wrap.style.cssText='display:flex;flex-direction:column;gap:12px;max-width:560px;width:100%;margin:8px auto 32px;padding:0 20px;box-sizing:border-box;direction:rtl;';var hint=document.createElement('h2');hint.style.cssText='text-align:center;font-family:"Cormorant Garamond",Georgia,serif;font-size:clamp(30px,5.5vw,46px);font-weight:900;background:linear-gradient(135deg,#f0e8d4 0%,#d4c7a8 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;margin:0 0 22px;letter-spacing:0.5px;line-height:1.25;';hint.textContent='בחר/י את האפשרות המתאימה';wrap.appendChild(hint);opts.forEach(function(o){var c=o.cloneNode(true);c.style.cssText+=';box-shadow:0 8px 24px rgba(0,0,0,0.4),0 2px 6px rgba(0,0,0,0.3)!important;border:1.5px solid rgba(240,232,212,0.35)!important;transition:all .25s ease!important;cursor:pointer;position:relative;';wrap.appendChild(c);});main.parentElement.insertBefore(wrap,main.nextSibling);var fl=document.querySelector('.cta-float');if(fl){fl.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();wrap.scrollIntoView({behavior:'smooth',block:'center'});},true);}}catch(e){}}

function init(){cap();inlineOpts();setTimeout(inlineOpts,500);setTimeout(inlineOpts,1500);document.body.addEventListener('click',hc,true);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
