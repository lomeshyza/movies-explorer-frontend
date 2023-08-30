export class MainApi {
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
    // return Promise.reject(`Ошибка: ${JSON.stringify(res)}`);
  }

  // Profile
  updateUserInfo({ name, email }) {
    console.log(`updateUserInfo: ${JSON.stringify({ name, email })}`);
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name, email }),
    }).then(this._handleResponse);
  }
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then(this._handleResponse);
  }
  // Movies
  getMovies() {
    console.log(`${this.baseUrl}/movies`);
    return fetch(`${this.baseUrl}/movies`, {
      method: "GET",
      headers: this.headers,
    }).then(this._handleResponse);
  }
  deleteMovie(movieId) {
    console.log(movieId);
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._handleResponse);
  }
  saveCard = (data) => {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        director: data.director,
        country: data.country,
        duration: JSON.stringify(data.duration),
        year: data.year,
        description: data.description,
        image: "https://api.nomoreparties.co" + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
        movieId: data.id,
        name: data.country,
      }),
    }).then(this._handleResponse);
  };
}
const mainApi = new MainApi({
  baseUrl: "https://api.starts.movies.nomoredomains.xyz",
  //baseUrl: "http://localhost:3000",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
export { mainApi };
