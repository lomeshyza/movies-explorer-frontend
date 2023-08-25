export class MoviesApi {
    constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
    
    //приходит ли ответ с сервера
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
   return Promise.reject(`Ошибка: ${res.status} `);
}
      // Movies
      getMovies() {
        
        return fetch(`${this.baseUrl}`, {
          method: "GET",
          headers: this.headers,
        }).then(this._handleResponse);
      }
     
}
const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    // baseUrl: "http://localhost:3000",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
  });
  export { moviesApi };
