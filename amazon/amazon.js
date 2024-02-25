const imgs=document.querySelectorAll('#heder-silaider ul img');
// const prev_btn = document.querySelector('.prev');
// const next_btn = document.querySelector('.next');

let n = 3;

function changesilaid() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = `none`;
  }
  imgs[n].style.display = `block`;
}
changesilaid();

document.querySelector(".prev").addEventListener('click', function (e){
  n = (n - 1 + imgs.length) % imgs.length;
  changesilaid();
});

document.querySelector(".next").addEventListener('click', function (e) {
  n = (n + 1) % imgs.length;
  changesilaid();
});

const scorllsilaider=document.querySelectorAll(".produts");
for(const item of scorllsilaider){
  item.addEventListener('wheel',(elem)=>{
    elem.preventDefault();
    item.scrollLeft=item.scrollLeft+elem.deltaY;
  })
}












