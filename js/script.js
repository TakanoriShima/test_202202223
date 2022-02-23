/* global $ */

$(function(){
  
  // ハンバーガーメニュー
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  // メニューバーをクリックして表示させる処理
  open.addEventListener('click' , () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  
  // メニューバーをクリックして閉じるときの処理
  close.addEventListener('click' , () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  // Topのテキストアニメーション
  const title = $('h1').text();
  $('h1').text('','<br><br>');
  let count = 1;
  // h1のアニメーションの関数を定義
  const text_animation = () => {
    const word1 = title.substr(0, count);
    $('h1').text(word1);
    count++;
    if(count > title.length) {
      clearInterval(timer);
      count = 1;
    }
  };
  
  const timer = setInterval(text_animation, 100);
  

});

