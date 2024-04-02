const Linked = document.querySelector('.Linked');

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG' && e.target.alt === '링크드인') {
    const ProfileUrl = 'https://kr.linkedin.com/';
    window.location.href = ProfileUrl;
  } else if (e.target.tagName === 'IMG' && e.target.alt === '인스타') {
    const ProfileUrl = 'https://www.instagram.com/';
    window.location.href = ProfileUrl;
  } else if (e.target.tagName === 'IMG' && e.target.alt === '페이스북') {
    const ProfileUrl = 'https://ko-kr.facebook.com/login.php/';
    window.location.href = ProfileUrl;
  } else if (e.target.tagName === 'IMG' && e.target.alt === '틱톡') {
    const ProfileUrl = 'https://www.tiktok.com/ko-KR/';
    window.location.href = ProfileUrl;
  } else {
    return;
  }
});

// 햄버거버튼
const $ham = document.querySelector('.ham');
const $footNav = document.querySelector('.footNav');
const $li = document.querySelectorAll('.footNav > ul > li');

$ham.addEventListener('click', (e) => {
  e.preventDefault();
  $footNav.classList.toggle('on');
  $li.forEach((el) => {
    el.classList.remove('on');
  });
});

document.addEventListener('click', (e) => {
  let closestA = e.target.closest('a');
  let closetLI = e.target.closest('ul > li');
  if (!closestA) return;

  if (closestA.parentElement === $nav1 || closestA.parentElement === $nav2) {
    e.preventDefault();
  } else {
    $li.forEach((el) => {
      el.classList.remove('on');
    });
    $nav1.classList.remove('on');
    $nav2.classList.remove('on');
  }
  $li.forEach((el) => {
    if (el != closetLI) {
      closetLI.classList.toggle('on');
    }
  });
});
