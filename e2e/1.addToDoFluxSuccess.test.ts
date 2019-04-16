describe('should add a todo', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should got to New Task screen', async () => {
    await device.takeScreenshot('before go to new task')
    await element(by.id('goToNewtask')).tap()
  })

  it('should verify if the view is visible', async () => {
    await device.takeScreenshot('loading new task screen')
    await expect(element(by.id('newTaskLayout'))).toBeVisible()
  })
  it('should type the inputs texts', async () => {
    await element(by.id('title')).typeText('titleTest')
    await device.takeScreenshot('after type title input')
    await element(by.id('description')).typeText('descriptionTest')
    await device.takeScreenshot('after type description input')
  })

  it('should save todo', async () => {
    await element(by.id('saveTodo')).tap()
    await device.takeScreenshot('after click save')
  })

  it('verify if the item was added', async () => {
    await expect(element(by.text('titleTest')).atIndex(0)).toBeVisible()
  })
})
