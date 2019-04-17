import { element } from 'detox'

describe('should add a todo', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should got to New Task screen', async () => {
    await element(by.id('goToNewtask')).tap()
  })

  it('should verify if the view is visible', async () => {
    await expect(element(by.id('newTaskLayout'))).toBeVisible()
  })
  it('should type the inputs texts', async () => {
    await element(by.id('title')).typeText('titleTest')
    await element(by.id('description')).typeText('descriptionTest')
  })

  it('should save todo', async () => {
    await element(by.id('saveTodo')).tap()
  })

  it('verify if the item was added', async () => {
    await expect(element(by.text('titleTest')).atIndex(0)).toBeVisible()
  })
})
