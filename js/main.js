const inputbtn = document.querySelector('#md5');
inputbtn.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const hash = CryptoJS.MD5(inputText.value);
    // const hash = CryptoJS.Sha256(inputText.value);
    const outputText = document.querySelector('#output-text');
    outputText.style.display = 'inline';
    outputText.value = hash;
});
