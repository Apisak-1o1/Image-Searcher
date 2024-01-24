function appendImage(keyword,index){
    const ImgElem = document.createElement('img');
    ImgElem.src=`https://source.unsplash.com/400x255/?${keyword}&sig=${index}`;
    
    const galleryElem=document.querySelector('.gallery');
    galleryElem.appendChild(ImgElem);

}

function oldsearch(){
    const galleryElem=document.querySelector('.gallery');
    galleryElem.innerHTML='';
}

function searchPhotos(event){
    const keyword =event.target.value;

    if (event.key=='Enter'&& keyword){
        oldsearch();

        for(let i=1;i<=9;i++){
            appendImage(keyword,i);
        }
    }
}



function run(){
    const inputElem=document.querySelector('input');
    inputElem.addEventListener('keydown',searchPhotos);
}

run();