import axios from "axios";

const BASE_URL = "http://todo-backend-express.herokuapp.com/";

class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL
    });
    this.headerBuilders = [];
  }

  async get(url, params = {}) {
    const headers = await this._generateHeaders();
    return this.axios.get(url, {
      params,
      headers
    });
  }

  async post(url, body) {
    const headers = await this._generateHeaders();
    return this.axios.post(url, body, { headers });
  }

  async put(url, body) {
    const headers = await this._generateHeaders();
    return this.axios.put(url, body, { headers });
  }

  async patch(url, body) {
    const headers = await this._generateHeaders();
    return this.axios.patch(url, body, { headers });
  }

  async delete(url) {
    const headers = await this._generateHeaders();
    return this.axios.delete(url, { headers });
  }

  /*setHeaders(headers) {
    Object.assign(this.axios.defaults.headers.common, headers);
  }*/

  // Header builders are functions that are run for each request.
  // They must return an object, which will be merged with
  // the current headers. If builder is not a function, nothing will be done.
  // NOTE: Since builders can return a promise, there's no guarantee that
  // they will run in the order they were pushed.
  // FIXME: think of ways to fix the previous note.
  /*  addHeaderBuilder(name, builder) {
    if (typeof builder !== "function") {
      return;
    }
    this.headerBuilders.push({
      name: name,
      builder: builder
    });
  }*/

  /*clearHeaderBuilder(name) {
    this.headerBuilders = this.headerBuilders.filter(
      element => element.name !== name
    );
  }*/

  async _generateHeaders() {
    const generatedHeaders = {};
    // Builders can be async. Wait for all of them to finish.
    await Promise.all(
      this.headerBuilders.map(async element => {
        const headers = await element.builder();
        Object.assign(generatedHeaders, headers);
      })
    );
    return Object.assign(
      {},
      this.axios.defaults.headers.common,
      generatedHeaders
    );
  }
}

export default new HttpService();
