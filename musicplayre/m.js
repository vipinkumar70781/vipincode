var arr=[
    {songName:"Acha sila diya",time:"4:12",url:"https://cdnsongs.com/music/data/Haryanvi/202312/Jale_2/128/Jale_2_1.mp3",img:"https://i.ytimg.com/vi/OSF1k2pn4yI/maxresdefault.jpg"},
    {songName:"aae dil muslik",time:"4:00",url:"https://cdnsongs.com/music/data/Haryanvi/202312/Jale_2/128/Jale_2_1.mp3",img:"https://th.bing.com/th/id/OIP.9AxKAqx1GCCLBLZ-1nh7CwAAAA?rs=1&pid=ImgDetMain"},
    {songName:"tootr khauab",time:"4:56",url:"",img:"https://i.pinimg.com/originals/22/4a/d7/224ad7470f5eb48d2a0a1dfa15443570.jpg"},
    {songName:"asqh na ho majboor",time:"4:11",url:"https://cdnsongs.com/music/data/Haryanvi/202312/Jale_2/128/Jale_2_1.mp3",img:"https://th.bing.com/th/id/OIP.9AxKAqx1GCCLBLZ-1nh7CwAAAA?rs=1&pid=ImgDetMain"}
]
var allSong=document.querySelector("#allsong1")
var poster=document.querySelector("#image")
var play=document.querySelector("#play")
var back=document.querySelector("#back")
var next=document.querySelector("#next")



var audio= new Audio()

var selectedSong=0

function mainFunction(){
    var clutter=""
arr.forEach(function(elem,index){
    clutter=clutter +`<div class="allsong" id=${index}>
    <div class="song">
    <img src=${elem.img} alt="">
    <h4>${elem.songName}Acha sila diya</h4>
<div>
    <h5>${elem.time}</h5>
</div>
</div>
</div>`
})
allSong.innerHTML=clutter
 poster.style.backgroundImage=`url(${arr[selectedSong].img})`
 audio.src=arr[selectedSong].url

}
mainFunction()
allSong.addEventListener("click",function(dets){
     selectedSong=dets.target.id
     play.innerHTML=`<i class="ri-pause-fill"></i>`
     flag=1
     mainFunction()
    audio.play()
    console.log(audio.play)
})
var flag=0
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-fill"></i>`
        mainFunction()
        audio.play()
        flag=1
    }
    else{
        play.innerHTML=`<i class="ri-play-fill"></i>`
        mainFunction()
        audio.pause()
        flag=0

    }
})



back.addEventListener("click",function(){
    if(selectedSong<=arr.length-1){
        selectedSong++
        mainFunction()
        audio.play
      }//else{
    //     back.style.opacity=0.3
    //  }
    

})
next.addEventListener("click",function(){
    if(selectedSong>0){
        selectedSong--
        mainFunction()
        audio.play
    }//else{
//          next.style.opacity=0.3
//  }
})

