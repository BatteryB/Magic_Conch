var result = [
    '언젠가는',
    '가만히 있어.',
    '둘 다 안돼',
    '그럼',
    '다시 한 번 물어봐.',
    '안돼.'
]

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('input');
    var resultElement = document.getElementById('result');
    
    inputElement.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            displayResult();
        }
    });
    
    function displayResult() {
        var inputValue = inputElement.value;
        resultElement.textContent = result[Math.floor(Math.random() * result.length)];
        inputElement.value = ''; 
    }
});
