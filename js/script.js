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
  const title_first = $('h1').text();
  const title_second = $('h2').text();
  $('h1').text('');
  $('h2').text('');
  let count = 1;
  let second_timer;
  // h1のアニメーションの関数を定義
  const first_text_animation = () => {
    const word1 = title_first.substr(0, count);
    $('h1').text(word1);
    count++;
    if(count > title_first.length) {
      clearInterval(first_timer);
      count = 1;
      setTimeout(() => {
        second_timer = setInterval(second_text_animation, 100);
      }, 1000);
    }
  };
  
  const second_text_animation = () => {
    const word2 = title_second.substr(0, count);
    $('h2').text(word2);
    count++;
    if(count > title_second.length) {
      clearInterval(second_timer);
      count = 1;
    }
  };
  
  const first_timer = setInterval(first_text_animation, 100);
  

});

