const API_KEY = '22172ac1f678944fd350d758e2f927d5';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';

/* trending/all/day?api_key=<<api_key>> */

const getData = url => fetch(url)
	.then(response => {
		if (response.ok) {
			return response.json();
		}
		throw `Что-то пошло не так, ошибка ${response.status}`
	})
	.catch(err => console.error(err));


export const getTriends = async (type = 'all', period = 'day', page = 1) => {
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`;
	return await getData(url);
};