let typed = new Typed('.tp', {
  // Waits 1000ms after typing "First"
  strings: ['Топовый ^1000 Дизайнер', 'Лучший Разработчик','Создатель Игр','Отец русских Сайтов',],
  typeSpeed: 150,
  loop:true
});

let next = document.querySelector('.next')

next.addEventListener('click' , function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click' , function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length -1])
})
