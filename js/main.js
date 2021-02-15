const md5 = document.querySelector('#md5');
const sha1 = document.querySelector('#sha1');
const sha256 = document.querySelector('#sha256');
const sha512 = document.querySelector('#sha512');
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.querySelector('#input-text').value = '';
    document.querySelector('#output-text').value = '';
});
md5.addEventListener('click', () => {
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
sha1.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const hash = CryptoJS.SHA1(inputText.value);
    // const hash = CryptoJS.Sha256(inputText.value);
    const outputText = document.querySelector('#output-text');
    outputText.style.display = 'inline';
    outputText.value = hash;
});
sha256.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const hash = CryptoJS.SHA256(inputText.value);
    // const hash = CryptoJS.Sha256(inputText.value);
    const outputText = document.querySelector('#output-text');
    outputText.style.display = 'inline';
    outputText.value = hash;
});
sha512.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const hash = CryptoJS.SHA512(inputText.value);
    // const hash = CryptoJS.Sha256(inputText.value);
    const outputText = document.querySelector('#output-text');
    outputText.style.display = 'inline';
    outputText.value = hash;
});
