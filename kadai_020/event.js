// btnの要素取得
const btn = document.getElementById('btn');

// ①ボタンクリック、②テキスト変更、③変更後テキスト表示
btn.addEventListener('click', () =>{
    const txt = document.getElementById('text');

    txt.textContent =  'ボタンをクリックしました';

});