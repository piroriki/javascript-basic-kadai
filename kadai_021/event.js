const txtBtn = document.getElementById('btn');

txtBtn.addEventListener('click',() =>{
    const txt = document.getElementById('text');

    setTimeout(() =>{
        txt.textContent = 'ボタンをクリックしました';
    },2000);
});