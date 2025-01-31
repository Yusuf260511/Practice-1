const body = document.body;
const firstinput = document.getElementById('firstinput');
const secondinput = document.getElementById('secondinput');
const count = document.getElementById('count');
const thirdinput = document.getElementById('thirdinput');
const percent = document.getElementById('percent');
const vtoroy = document.getElementById('vtoroy');
const vtoroyp = document.getElementById('vtoroyp');
const perviy = document.getElementById('perviy');
const perviyp = document.getElementById('perviyp');
const oknop = document.getElementById('okno_p');
const rubl = document.getElementById('rubl');



perviy.addEventListener("click", () => {
    firstinput.value = "";
    secondinput.value = "?????";
    thirdinput.value = "?????";


    perviy.style.backgroundColor = '#00BDA0';
    perviyp.style.color = 'white';
    vtoroy.style.backgroundColor = '#F5F7FA';
    vtoroyp.style.color = '#607D8B';

    oknop.innerHTML = 'Если вы здесь не впервые, и вы выжили после комиссионого шока (что очень удивительно), выберите раздел "Повторить комиссионный адреналин" <br>(Для справки: говорят, что следующая комиссия гораздо жоще чем первая)*';

    rubl.textContent = 'рублей';

    count.addEventListener("click", () => {
        let random = Math.floor(Math.random()*(74-51+1)+51);
        if (random>50 && random<75) {
            secondinput.value = `${firstinput.value}`/100*random;
            secondinput.className = 'boom';
            const newfirst = parseInt(firstinput.value);
            thirdinput.value = `${secondinput.value}`*100+newfirst;
            thirdinput.className = 'boom';
            percent.textContent = `Процент коммиссии: ${random}%`
    
            count.textContent = "Я ОБОСРАЛСЯ!";
    
            setTimeout(() => {
                count.addEventListener("click", () => {
                    firstinput.value = "";
                    secondinput.value = "";
                    thirdinput.value = "";
                    count.textContent = "Второй раз обосраться платно братан";
                    percent.textContent = 'Процент коммиссии: ???';
                }, { once: true });
            }, 500);
        };
    });
})

vtoroy.addEventListener("click", () => {


    vtoroy.style.backgroundColor = '#00BDA0';
    vtoroyp.style.color = 'white';
    perviy.style.backgroundColor = '#F5F7FA';
    perviyp.style.color = '#607D8B';

    oknop.innerHTML = 'Вижу ты любишь рисковать! Ну ладно, попробуй на себе этот адреналино-комиссионный треш! К слову, здесь коммиссии ОТ 75 ПРОЦЕНТОВ! И кстати, будь готов платить долларами! А да, ещё одно, будь добр заплатить за то что ты нажал на кнопку и перешел сюда!';

    rubl.textContent = 'долларов';

    count.addEventListener("click", () => {
        let random = Math.floor(Math.random()*(100-75+1)+75);
        if (random>=75) {
            secondinput.value = `${firstinput.value}`/100*random;
            secondinput.className = 'boom';
            const newfirst = parseInt(firstinput.value);
            const newsecond = parseInt(secondinput.value);
            thirdinput.value = newfirst/100+newsecond;
            thirdinput.className = 'boom';
            percent.textContent = `Процент коммиссии: ${random}%`
    
            count.textContent = "Я ОБОСРАЛСЯ!";
    
            setTimeout(() => {
                count.addEventListener("click", () => {
                    firstinput.value = "";
                    secondinput.value = "?????";
                    thirdinput.value = "?????";
                    count.textContent = "Второй раз обосраться платно братан";
                    percent.textContent = 'Процент коммиссии: ???';
                }, { once: true });
            }, 500);
        };
    });
})

