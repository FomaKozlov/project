const ikonButton = document.querySelector('.ikon');
const iconButtons = document.getElementById('ikon1');

ikonButton.addEventListener('mouseenter', () => {
iconButtons.classList.add('visible'); // Добавляем класс для показа
});

ikonButton.addEventListener('mouseleave', () => {
iconButtons.classList.remove('visible'); // Убираем класс для скрытия
});

iconButtons.addEventListener('mouseenter', () => {
    iconButtons.classList.add('visible'); // Оставляем кнопки видимыми при наведении
});

iconButtons.addEventListener('mouseleave', () => {
    iconButtons.classList.remove('visible'); // Скрываем кнопки
});

function hideAllBlocks() {
var blocks = document.querySelectorAll('.myBlock');
    blocks.forEach(function(block) {
        block.style.display = 'none';
    });
};

// Скрываем все блоки и показываем блок "Доходы" при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    hideAllBlocks();
    var img = document.getElementById('myImage');
    img.style.display = 'block';
});

document.getElementById('showImageButton').addEventListener('click', function() {
    hideAllBlocks();
    var img = document.getElementById('myImage');
    img.style.display = 'block';
});

document.getElementById('showImageButton1').addEventListener('click', function() {
    hideAllBlocks();
    var img = document.getElementById('myImage1');
    img.style.display = 'block';
});

document.getElementById('showImageButton2').addEventListener('click', function() {
    hideAllBlocks();
    var img = document.getElementById('myImage2');
    img.style.display = 'block';
});

document.getElementById('showImageButton3').addEventListener('click', function() {
    hideAllBlocks();
    var img = document.getElementById('myImage3');
    img.style.display = 'block';
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    // Получаем значения из input
    const input1 = parseFloat(document.getElementById('input_1').value) || 0;
    const input2 = parseFloat(document.getElementById('input_2').value) || 0;
    const input3 = parseFloat(document.getElementById('input_3').value) || 0;
    const input4 = parseFloat(document.getElementById('input_4').value) || 0;
    const input5 = parseFloat(document.getElementById('input_5').value) || 0;
    const input6 = parseFloat(document.getElementById('input_6').value) || 0;
    const input7 = parseFloat(document.getElementById('input_7').value) || 0;
    const input8 = parseFloat(document.getElementById('input_8').value) || 0;
    const input9 = parseFloat(document.getElementById('input_9').value) || 0;
    const input10 = parseFloat(document.getElementById('input_10').value) || 0;
    const input11 = parseFloat(document.getElementById('input_11').value) || 0;
    const input12 = parseFloat(document.getElementById('input_12').value) || 0;

    // Считаем сумму
    const sum = input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10 + input11 + input12;

    // Выводим результат в поле "Результат"
    document.getElementById('result').value = sum.toFixed(2);
});

document.getElementById('calculateBtn1').addEventListener('click', function() {
    // Получаем значения из input
    const input1 = parseFloat(document.getElementById('input_1').value) || 0;
    const input2 = parseFloat(document.getElementById('input_2').value) || 0;
    const input3 = parseFloat(document.getElementById('input_3').value) || 0;
    const input4 = parseFloat(document.getElementById('input_4').value) || 0;
    const input5 = parseFloat(document.getElementById('input_5').value) || 0;
    const input6 = parseFloat(document.getElementById('input_6').value) || 0;
    const input7 = parseFloat(document.getElementById('input_7').value) || 0;
    const input8 = parseFloat(document.getElementById('input_8').value) || 0;
    const input9 = parseFloat(document.getElementById('input_9').value) || 0;
    const input10 = parseFloat(document.getElementById('input_10').value) || 0;
    const input11 = parseFloat(document.getElementById('input_11').value) || 0;
    const input12 = parseFloat(document.getElementById('input_12').value) || 0;

    // Считаем сумму
    const sum = input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10 + input11 + input12;

    // Выводим результат в поле "Результат"
    document.getElementById('result1').value = (sum / 12).toFixed(2);
});

document.getElementById('calculateBtn2').addEventListener('click', function() {
    // Получаем значения из input
    const input1 = parseFloat(document.getElementById('input1').value) || 0;
    const input2 = parseFloat(document.getElementById('input2').value) || 0;
    const input3 = parseFloat(document.getElementById('input3').value) || 0;
    const input4 = parseFloat(document.getElementById('input4').value) || 0;
    const input5 = parseFloat(document.getElementById('input5').value) || 0;
    const input6 = parseFloat(document.getElementById('input6').value) || 0;
    const input7 = parseFloat(document.getElementById('input7').value) || 0;
    const input8 = parseFloat(document.getElementById('input8').value) || 0;
    const input9 = parseFloat(document.getElementById('input9').value) || 0;
    const input10 = parseFloat(document.getElementById('input10').value) || 0;
    const input11 = parseFloat(document.getElementById('input11').value) || 0;
    const input12 = parseFloat(document.getElementById('input12').value) || 0;

    // Считаем сумму
    const sum = input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10 + input11 + input12;

    // Выводим результат в поле "Результат"
    document.getElementById('result2').value = sum.toFixed(2);
});

document.getElementById('calculateBtn3').addEventListener('click', function() {
    // Получаем значения из input
    const input1 = parseFloat(document.getElementById('input1').value) || 0;
    const input2 = parseFloat(document.getElementById('input2').value) || 0;
    const input3 = parseFloat(document.getElementById('input3').value) || 0;
    const input4 = parseFloat(document.getElementById('input4').value) || 0;
    const input5 = parseFloat(document.getElementById('input5').value) || 0;
    const input6 = parseFloat(document.getElementById('input6').value) || 0;
    const input7 = parseFloat(document.getElementById('input7').value) || 0;
    const input8 = parseFloat(document.getElementById('input8').value) || 0;
    const input9 = parseFloat(document.getElementById('input9').value) || 0;
    const input10 = parseFloat(document.getElementById('input10').value) || 0;
    const input11 = parseFloat(document.getElementById('input11').value) || 0;
    const input12 = parseFloat(document.getElementById('input12').value) || 0;

    // Считаем сумму
    const sum = input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10 + input11 + input12;

    // Выводим результат в поле "Результат"
    document.getElementById('result3').value = (sum / 12).toFixed(2);
});

document.getElementById('calculateBtn4').addEventListener('click', function() {
    // Получаем значения из input
    const input1 = parseFloat(document.getElementById('input_1').value) || 0;
    const input2 = parseFloat(document.getElementById('input_2').value) || 0;
    const input3 = parseFloat(document.getElementById('input_3').value) || 0;
    const input4 = parseFloat(document.getElementById('input_4').value) || 0;
    const input5 = parseFloat(document.getElementById('input_5').value) || 0;	
    const input6 = parseFloat(document.getElementById('input_6').value) || 0;
    const input7 = parseFloat(document.getElementById('input_7').value) || 0;
    const input8 = parseFloat(document.getElementById('input_8').value) || 0;
    const input9 = parseFloat(document.getElementById('input_9').value) || 0;
    const input10 = parseFloat(document.getElementById('input_10').value) || 0;
    const input11 = parseFloat(document.getElementById('input_11').value) || 0;
    const input12 = parseFloat(document.getElementById('input_12').value) || 0;
    const input13 = parseFloat(document.getElementById('input1').value) || 0;
    const input14 = parseFloat(document.getElementById('input2').value) || 0;
    const input15 = parseFloat(document.getElementById('input3').value) || 0;
    const input16 = parseFloat(document.getElementById('input4').value) || 0;
    const input17 = parseFloat(document.getElementById('input5').value) || 0;
    const input18 = parseFloat(document.getElementById('input6').value) || 0;
	const input19 = parseFloat(document.getElementById('input7').value) || 0;
    const input20 = parseFloat(document.getElementById('input8').value) || 0;
    const input21 = parseFloat(document.getElementById('input9').value) || 0;
    const input22 = parseFloat(document.getElementById('input10').value) || 0;
    const input23 = parseFloat(document.getElementById('input11').value) || 0;
    const input24 = parseFloat(document.getElementById('input12').value) || 0;

    // Считаем сумму
    const sum = input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10 + input11 + input12;
    const sum1 = input13 + input14 + input15 + input16 + input17 + input18 + input19 + input20 + input21 + input22 + input23 + input24;

    // Выводим результат в поле "Результат"
    document.getElementById('result4').value = (sum - sum1).toFixed(2);
});

document.getElementById('showPopup').addEventListener('click', function() {
    let data = [];
    for (let i = 1; i <= 12; i++) {
        let value = document.getElementById(`input_${i}`).value;
        data.push(value ? parseFloat(value) : 0);
    }

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',  // Здесь можно изменить тип диаграммы
        data: {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            datasets: [{
                label: 'Доходы',
                data: data,
                backgroundColor: 'rgba(131, 199, 247, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

document.getElementById('showPopup1').addEventListener('click', function() {
    let data = [];
    for (let i = 1; i <= 12; i++) {
        let value = document.getElementById(`input${i}`).value;
        data.push(value ? parseFloat(value) : 0);
    }

    const ctx = document.getElementById('myChart1').getContext('2d');

    new Chart(ctx, {
        type: 'bar',  // Здесь можно изменить тип диаграммы
        data: {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            datasets: [{
                label: 'Доходы',
                data: data,
                backgroundColor: 'rgba(131, 199, 247, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

document.querySelector('.button2').addEventListener('click', function() {
    const inputValue1 = document.getElementById('input_1').value;
    const inputValue2 = document.getElementById('input1').value;
    const inputValue3 = document.getElementById('input_2').value;
    const inputValue4 = document.getElementById('input2').value;
    const inputValue5 = document.getElementById('input_3').value;
    const inputValue6 = document.getElementById('input3').value;
    const inputValue7 = document.getElementById('input_4').value;
    const inputValue8 = document.getElementById('input4').value;
    const inputValue9 = document.getElementById('input_5').value;
    const inputValue10 = document.getElementById('input5').value;
    const inputValue11 = document.getElementById('input_6').value;
    const inputValue12 = document.getElementById('input6').value;
    const inputValue13 = document.getElementById('input_7').value;
    const inputValue14 = document.getElementById('input7').value;
    const inputValue15 = document.getElementById('input_8').value;
    const inputValue16 = document.getElementById('input8').value;
    const inputValue17 = document.getElementById('input_9').value;
    const inputValue18 = document.getElementById('input9').value;
    const inputValue19 = document.getElementById('input_10').value;
    const inputValue20 = document.getElementById('input10').value;
    const inputValue21 = document.getElementById('input_11').value;
    const inputValue22 = document.getElementById('input11').value;
    const inputValue23 = document.getElementById('input_12').value;
    const inputValue24 = document.getElementById('input12').value;

    let outputHtml = '';

    if (inputValue1) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue1} Январь</div>`;
    }

    if (inputValue2) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue2} Январь</div>`;
    }

    if (inputValue3) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue3} Февраль</div>`;
    }

    if (inputValue4) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue4} Февраль</div>`;
    }

    if (inputValue5) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue5} Март</div>`;
    }

    if (inputValue6) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue6} Март</div>`;
    }

    if (inputValue7) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue7} Апрель</div>`;
    }

    if (inputValue8) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue8} Апрель</div>`;
    }

    if (inputValue9) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue9} Май</div>`;
    }

    if (inputValue10) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue10} Май</div>`;
    }

    if (inputValue11) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue11} Июнь</div>`;
    }

    if (inputValue12) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue12} Июнь</div>`;
    }

    if (inputValue13) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue13} Июль</div>`;
    }

    if (inputValue14) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue14} Июль</div>`;
    }

    if (inputValue15) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue15} Август</div>`;
    }

    if (inputValue16) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue16} Август</div>`;
    }

    if (inputValue17) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue17} Сентябрь</div>`;
    }

    if (inputValue18) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue18} Сентябрь</div>`;
    }

    if (inputValue19) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue19} Октябрь</div>`;
    }

    if (inputValue20) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue20} Октябрь</div>`;
    }

    if (inputValue21) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue21} Ноябрь</div>`;
    }

    if (inputValue22) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue22} Ноябрь</div>`;
    }

    if (inputValue23) {
        outputHtml += `<div style="color: green; font-size: 30px;">+${inputValue23} Декабрь</div>`;
    }

    if (inputValue24) {
        outputHtml += `<div style="color: red; font-size: 30px;">-${inputValue24} Декабрь</div>`;
    }

    document.getElementById('output').innerHTML = outputHtml; // Сообщение, если оба инпута пустые
});