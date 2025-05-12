require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 1488;
const PAROL = require('./PAROL');

app.listen(PORT, () => {
	console.log(`Запустился прикольчик на http://localhost:1488/weather?city=Moscow`);
});

app.get('/weather', PAROL, async (req, res) => {
const city = req.query.city;
 if (!city) {
  res.status(401).json({ error: 'Город был введен кривовато' });
  return;
}

//Пошла в ход библиотека аксиос, взял урл с гпт
try {
  console.log('ТОТ САМЫЙ ИНВАЛИД КЕЙ:', process.env.WEATHER_API_KEY);

const response = await axios.get( 'https://api.openweathermap.org/data/2.5/weather',

{ params:{ 
	q: city,
	appid: process.env.WEATHER_API_KEY,
	units: 'metric',
    lang: 'ru'
}})
const data = response.data;
const name = data.name;
const temp = data.main.temp;
const humidity = data.main.humidity;
const wind = data.wind.speed;
res.json({ Город: name, 
	Темпа: temp, 
	Влажность: humidity,
    Скорость_ветра_мс: wind });
} catch (error) {
  console.error('В чем ошибка показа погоды:', error.response?.data || error.message);
  res.status(500).json({ error: 'Не получены данные о погоде!' });
}})