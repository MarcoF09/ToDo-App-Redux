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
