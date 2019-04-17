import { device, element } from 'detox'

describe('should delete todo', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should enable delete option', async () => {
    await element(by.id('deleteOrCancel')).tap()
  })

  it('should delete an item', async () => {
    await element(by.id('deleteButton'))
      .atIndex(0)
      .tap()
  })

  it('should disabled delete option', async () => {
    await element(by.id('deleteOrCancel')).tap()
  })
})
