
(() => {
 const dialog=document.querySelector('#screen-dialog');
 const title=document.querySelector('#dialog-title');
 const image=document.querySelector('#dialog-image');
 document.querySelectorAll('[data-screen]').forEach(btn=>{
  btn.addEventListener('click',()=>{
   title.textContent=btn.dataset.title||'Zrzut ekranu RadioLOG';
   image.alt=btn.dataset.title||'Zrzut ekranu RadioLOG';
   image.src=btn.dataset.screen;
   if(typeof dialog.showModal==='function')dialog.showModal();
   else window.open(btn.dataset.screen,'_blank','noopener');
  });
 });
 document.querySelector('#dialog-close')?.addEventListener('click',()=>dialog.close());
 dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 dialog?.addEventListener('close',()=>image.removeAttribute('src'));
})();

(() => {
 const menu = document.querySelector('.nav-menu-btn');
 const nav = document.querySelector('#site-nav');
 menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
 });
 nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('is-open'); menu?.setAttribute('aria-expanded','false'); }));
 document.querySelectorAll('form[data-radiolog-form]').forEach(form => {
  if (location.protocol !== 'file:' && !window.__radiologPreview) return;
  form.addEventListener('submit', event => {
   event.preventDefault();
   const box = form.querySelector('.preview-feedback');
   if (box) {box.classList.add('active');box.textContent = 'To podgląd lokalny. Formularz wygląda i sprawdza pola poprawnie, ale nie wysyła wiadomości. Na opublikowanej stronie formularz prześle wiadomość do autora RadioLOG przez zewnętrzną usługę.';box.scrollIntoView({block:'nearest',behavior:'smooth'});}
  });
 });
})();
