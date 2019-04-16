import { Strings } from 'strings'

describe('should mark as done an item', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should got to Detail screen', async () => {
    await device.takeScreenshot('before go to detail')
    await element(by.id('item').withDescendant(by.text('titleTest')))
      .atIndex(0)
      .tap()
  })

  it('verify if the screen is the detail', async () => {
    await device.takeScreenshot('detail screen')
    await expect(element(by.id('detailLayout'))).toBeVisible()
  })

  it('press mark as done button', async () => {
    await element(by.text(Strings.markAsDone)).tap()
  })

  it('verify if the screen is the home', async () => {
    await device.takeScreenshot('home screen')
    await expect(element(by.id('homeLayout'))).toBeVisible()
  })
})
