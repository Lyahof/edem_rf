function timeout(ms) {
	return new Promise((_, reject) => {
	  setTimeout(() => {
		 reject(new Error('Превышено ожидание ответа от сервера при загрузке данных⛔. Проверьте интернет соединение и попробуйте ещё раз'));
	  }, ms);
	});
 }
 
 export default timeout;