//
// киньте fetch по адресу и получите данные по широте , долготе и городу
// сделать fetch запрос по адресу:
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
// нужно заменить координаты в строке на данные выше
// получите: температуру, скорость ветра.
// также забрать параметр "weathercode"
// забрать единицы измерения для вывода с извлечёнными параметрами
// напишите функцию расшифровщик для кода погоды
// выведите данные на странице, используйте current_weather_units
// используйте лоадер из классной работы или любой другой
// поставьте setTimeout на 1.5 сек, чтобы лоадер подольше крутился
// задеплойте на git pages
// скиньте ссылку на код и на деплой
const loader = document.querySelector('#loader');
const weatherInfo = document.getElementById('weatherInfo');

async function fetchWeatherData() {
    loader.style.display = 'block';
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json();
    const {city, latitude, longitude} = data;
    console.log(city, latitude, longitude);  
    const weather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const weatherResponse = await fetch(weather);
    const weatherData = await weatherResponse.json();


    setTimeout(() => {
        displayWeather(weatherData);
        loader.style.display = 'none'; 
    }, 1500);
}

function displayWeather(weatherData) {
    const { current_weather, current_weather_units } = weatherData;
    const { temperature, windspeed, weathercode } = current_weather;
    const { temperature: tempUnit, windspeed: speedUnit } = current_weather_units;
    const description = interpretWeatherCode(weathercode);

    weatherInfo.innerHTML = '';
    
    const tempItem = createWeatherItem(`Температура: ${temperature} ${tempUnit}`);
    const windItem = createWeatherItem(`Скорость ветра: ${windspeed} ${speedUnit}`);
    const codeItem = createWeatherItem(`Код погоды: ${description}`);
    weatherInfo.append(tempItem, windItem, codeItem);
    weatherInfo.classList.remove('hidden');  
}

function createWeatherItem(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function interpretWeatherCode(code) {
    switch (code) {
        case 0: return 'Ясное небо';
        case 1: return 'В основном ясно';
        case 2: return 'Переменная облачность';
        case 3: return 'Пасмурно';
        case 45:
        case 48: return 'Туман и изморозь';
        case 51: return 'Мелкий дождь: легкий';
        case 53: return 'Мелкий дождь: умеренный';
        case 55: return 'Мелкий дождь: сильный';
        case 56: return 'Ледяной дождь: легкий';
        case 57: return 'Ледяной дождь: сильный';
        case 61: return 'Дождь: легкий';
        case 63: return 'Дождь: умеренный';
        case 65: return 'Дождь: сильный';
        case 66: return 'Ледяной дождь: легкий';
        case 67: return 'Ледяной дождь: сильный';
        case 71: return 'Снег: легкий';
        case 73: return 'Снег: умеренный';
        case 75: return 'Снег: сильный';
        case 77: return 'Снежная крупа';
        case 80: return 'Ливневый дождь: легкий';
        case 81: return 'Ливневый дождь: умеренный';
        case 82: return 'Ливневый дождь: сильный';
        case 85: return 'Снегопад: легкий';
        case 86: return 'Снегопад: сильный';
        case 95: return 'Гроза: легкая или умеренная';
        case 96: return 'Гроза с градом: легкая';
        case 99: return 'Гроза с градом: сильная';
        default: return 'Данные отсутствуют';
            }
        }
    
fetchWeatherData();