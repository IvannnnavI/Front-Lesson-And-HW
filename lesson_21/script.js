// Обработчик для отображения текущего значения ползунка
document.getElementById('friendsCount').addEventListener('input', function() {
    document.getElementById('friendsCountValue').textContent = this.value;
});

// Обработчик для отправки формы
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Проверяем, все ли поля заполнены
    var allFilled = true;
    document.querySelectorAll('input[required], select[required]').forEach(function(input) {
        if (!input.value.trim()) allFilled = false;
    });

    if (allFilled) {
        alert('Форма успешно отправлена!');
        this.submit(); // Отправляем форму, если все хорошо
    } else {
        alert('Пожалуйста, заполните все обязательные поля.');
    }
});

