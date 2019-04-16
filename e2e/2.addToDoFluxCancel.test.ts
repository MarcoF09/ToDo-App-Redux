describe('should cancel and not add the add todo', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should got to New Task screen', async () => {
    await device.takeScreenshot('before go to new task')
    await element(by.id('goToNewtask')).tap()
  })

  it('should verify if the view is visible', async () => {
    await expect(element(by.id('newTaskLayout'))).toBeVisible()
    await device.takeScreenshot('loading new task screen')
  })

  it('should cancel', async () => {
    await element(by.id('cancelAddTodo')).tap()
  })

  it('verify if returns to home', async () => {
    await expect(element(by.id('homeLayout'))).toBeVisible()
  })
})
