import axios from 'axios'
import HttpService from './httpService'

jest.mock('axios')

const getMock = axios.get as jest.Mock
const postMock = axios.post as jest.Mock
const putMock = axios.put as jest.Mock
const patchMock = axios.patch as jest.Mock
const deleteMock = axios.delete as jest.Mock

const mockEndpoint = '/test'
const mockHeaders = {
  headers: { Accept: 'application/json, text/plain, */*' },
  params: {}
}
const todo = {
  title: 'Title1',
  description: 'Description1',
  completed: false,
  url: ''
}

describe('should execute httpMethods', () => {
  const { params, ...headersWithoutParms } = mockHeaders
  it('gets correctly', async () => {
    await HttpService.get(mockEndpoint, {})
    expect(getMock).toHaveBeenCalledWith(mockEndpoint, mockHeaders)
  })
  it('posts correctly', async () => {
    await HttpService.post(mockEndpoint, todo)
    expect(postMock).toHaveBeenCalledWith(
      mockEndpoint,
      todo,
      headersWithoutParms
    )
  })
  it('patch correctly', async () => {
    await HttpService.patch(mockEndpoint, todo)
    expect(patchMock).toHaveBeenCalledWith(
      mockEndpoint,
      todo,
      headersWithoutParms
    )
  })
  it('put correctly', async () => {
    await HttpService.put(mockEndpoint, todo)
    expect(putMock).toHaveBeenCalledWith(
      mockEndpoint,
      todo,
      headersWithoutParms
    )
  })
  it('delete correctly', async () => {
    await HttpService.delete(mockEndpoint)
    expect(deleteMock).toHaveBeenCalledWith(mockEndpoint, headersWithoutParms)
  })
  it('generates headers', async () => {
    const headers = await HttpService._generateHeaders()
    expect(headers).toEqual(headersWithoutParms.headers)
  })
})
