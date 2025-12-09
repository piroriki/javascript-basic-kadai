const btn = document.getElementById('btn');

btn.addEventListener('click',() =>{
    const txt = document.getElementById('text');

    setTimeout(() =>{
        txt.textContent = 'ボタンをクリックしました';
    },2000);
});