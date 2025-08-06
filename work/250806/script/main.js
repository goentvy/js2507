document.addEventListener('DOMContentLoaded', ()=>{
  // 슬라이드
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  setInterval(()=>{
    slides.forEach(s=> s.style.transform = `translateY(${ -100 * idx }%)`);
    idx = (idx + 1) % slides.length;
  }, 3000);

  // 탭
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelector('.tabs button.active').classList.remove('active');
      document.querySelector('.tab-content.active').classList.remove('active');

      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // 팝업
  document.querySelector('.open-popup').addEventListener('click', e=>{
    e.preventDefault();
    const layer = document.createElement('div');
    layer.className = 'popup-layer';
    layer.innerHTML = `
      <div class="popup">
        <h2>공지사항 제목</h2>
        <p>여기에 내용이 들어갑니다.</p>
        <button class="close">닫기</button>
      </div>`;
    document.body.appendChild(layer);

    layer.querySelector('.close').addEventListener('click', ()=>{
      document.body.removeChild(layer);
    });
  });
});