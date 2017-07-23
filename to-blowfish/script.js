var data = document.getElementById('data'),
    key = document.getElementById('key'),
    result = document.getElementById('result'),
    encrypt = document.getElementById('encrypt');

encrypt.addEventListener('click', function () {
    crypt('encrypt');
}, false);

function crypt (mode) {
    var d = (data.value).replace("'", "\'");
    result.value = blowfish[mode](data.value, key.value, {outputType: +outputtype.value});
}