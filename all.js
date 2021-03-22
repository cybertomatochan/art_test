const allQue =[
    {
        que:'請問該圖作者是哪位藝術家?',
        title:'Wheat Field with Cypresses',
        painter:'梵谷',
        img:'img/testPic1.png',
        a:'高更',
        b:'莫內',
        c:'米開朗基羅',
        d:'梵谷',
        ans:'d',
        color:'right',
    },{
        que:'請問該圖作者是哪位藝術家?',
        title:'The Monet Family in Their Garden at Argenteuil',
        painter:'莫內',
        img:'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436965/796062/main-image',
        a:'高更',
        b:'畢卡索',
        c:'莫內',
        d:'梵谷',
        ans:'c',
        color:'right',
    },{
        que:'請問該圖作者是哪位藝術家?',
        title:'Storm below Mount Fuji',
        painter:'葛飾北齋',
        img:'https://collectionapi.metmuseum.org/api/collection/v1/iiif/36492/140125/main-image',
        a:'葛飾北齋',
        b:'畢卡索',
        c:'歌川國貞',
        d:'莫內',
        ans:'a',
        color:'right',
    },{
        que:'請問該圖作者是哪位藝術家?',
        title:'The Rehearsal of the Ballet Onstage',
        painter:'竇加',
        img:'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436155/796065/main-image',
        a:'高更',
        b:'畢卡索',
        c:'米開朗基羅',
        d:'竇加',
        ans:'d',
        color:'right',
    },{
        que:'請問該圖作者是哪位藝術家?',
        title:'Mäda Primavesi',
        painter:'克林姆',
        img:'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436819/801225/main-image',
        a:'馬提斯',
        b:'克林姆',
        c:'達文西',
        d:'梵谷',
        ans:'b',
        color:'right',
    },
];

const test = document.getElementById('test');
const learnMore = document.getElementById('learnMore')

const que_text =document.getElementById('que_text');
const que_img =document.getElementById('que_img');

const selectedAns = document.querySelectorAll('.ans');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitButton = document.getElementById('submitButton');

const finalScore = document.getElementById('finalScore');

const analyzes = document.querySelectorAll('.analyze');
const data = document.querySelectorAll('.data');

let queNum = 0;
let answer = undefined;
let score = 0;

function loadQ(){
    cancelSelect()
    const currentQue=allQue[queNum];
    que_text.innerText =`${queNum+1}. `+currentQue.que;
    que_img.innerHTML=`<img src="${currentQue.img}" >`
    a_text.innerText = currentQue.a;
    b_text.innerText = currentQue.b;
    c_text.innerText = currentQue.c;
    d_text.innerText = currentQue.d;


}

function getSelected(){
    selectedAns.forEach((selectedAns)=>{
        if(selectedAns.checked){
            answer =selectedAns.id;
        }
    });
}

function cancelSelect(){
    selectedAns.forEach((selectedAns)=>{
        selectedAns.checked=false;
    });
}

submitButton.addEventListener('click',()=>{

    getSelected();
    if(answer){
        if(answer == allQue[queNum].ans){
            score++;  
        }else{
           allQue[queNum].color='wrong'
        }
        answer = undefined;
        queNum++;
    }else{  
        alert('請選擇答案');
    }
      
    


    if(queNum < allQue.length){
        loadQ();
    } else{
        test.classList.add("hide");
        learnMore.classList.remove("hide");
        finalScore.innerText =score;
        loadimg();
    }
    
})
function loadimg(){
    analyzes.forEach((item,index)=>{
        item.setAttribute('style', `background-image:url('${allQue[index].img}'`);
        
    });
    analyzes.forEach((item,index)=>{
        item.setAttribute('class',`analyze ${allQue[index].color}`);
    })
    data.forEach((item,index)=>{
        item.innerHTML=`<h2><i>${allQue[index].title}</i> ${allQue[index].painter}</h2>`
    })
};

    

loadQ();








