function checkAnswer(exerciseNumber) {
    var correctAnswers = ["range", "+=", "*=", "*=", "+="];
    var inputField = document.querySelector('.exercise:nth-child(' + exerciseNumber + ') .input-field');
    var inputValue = inputField.value.trim().toLowerCase();
    var alertDiv = document.getElementById('alert-' + exerciseNumber);
    
    if (inputValue === correctAnswers[exerciseNumber - 1]) {
        alertDiv.textContent = '¡Respuesta correcta!';
        alertDiv.className = 'alert alert-success';
    } else {
        alertDiv.textContent = 'Respuesta incorrecta. Inténtalo de nuevo.';
        alertDiv.className = 'alert alert-error';
    }

    alertDiv.style.display = 'block';
}
