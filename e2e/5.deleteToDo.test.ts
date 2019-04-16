describe('should delete todo', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should enable delete option', async () => {
    await device.takeScreenshot('home screen without delete buttons')
    await element(by.id('deleteOrCancel')).tap()
    await device.takeScreenshot('home screen with delete buttons')
  })

  it('should delete an item', async () => {
    await device.takeScreenshot('before delete an item')
    await element(by.id('deleteButton'))
      .atIndex(0)
      .tap()
    await device.takeScreenshot('after delete an item')
  })

  it('should disabled delete option', async () => {
    await element(by.id('deleteOrCancel')).tap()
    await device.takeScreenshot('home screen without delete buttons')
  })
})
