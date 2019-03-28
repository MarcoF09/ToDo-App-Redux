import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Todo } from '../types/globalTypes';

const BASE_URL = 'http://todo-backend-express.herokuapp.com/';

class HttpService {
  private axios: AxiosInstance | undefined;
  private headerBuilders: [] = [];

  public async get(url: string, params = {}): Promise<AxiosResponse<any>> {
    const headers: Promise<any> = await this._generateHeaders();
    return axios.get(url, {
      params,
      headers
    });
  }

  public async post(url: string, body: Todo): Promise<AxiosResponse<any>> {
    const headers: Promise<any> = await this._generateHeaders();
    return axios.post(url, body, { headers });
  }

  public async put(url: string, body: Todo): Promise<AxiosResponse<any>> {
    const headers: Promise<any> = await this._generateHeaders();
    return axios.put(url, body, { headers });
  }

  public async patch(url: string, body: Todo): Promise<AxiosResponse<any>> {
    const headers: Promise<any> = await this._generateHeaders();
    return axios.patch(url, body, { headers });
  }

  public async delete(url: string): Promise<AxiosResponse<any>> {
    const headers: Promise<any> = await this._generateHeaders();
    return axios.delete(url, { headers });
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

  public async _generateHeaders(): Promise<any> {
    const generatedHeaders = {};
    // Builders can be async. Wait for all of them to finish.
    await Promise.all(
      this.headerBuilders.map(async (element: any) => {
        const headers = await element.builder();
        Object.assign(generatedHeaders, headers);
      })
    );
    return Object.assign({}, axios.defaults.headers.common, generatedHeaders);
  }
}

export default new HttpService();
