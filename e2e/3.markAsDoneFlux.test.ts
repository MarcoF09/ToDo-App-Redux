import { by, device, element } from 'detox'
import { Strings } from 'strings'

describe('should mark as done an item', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should got to Detail screen', async () => {
    await element(by.id('item0'))
      .atIndex(0)
      .tap()
  })

  it('verify if the screen is the detail', async () => {
    await expect(element(by.id('detailLayout'))).toBeVisible()
  })

  it('press mark as done button', async () => {
    await element(by.text(Strings.markAsDone)).tap()
  })

  it('verify if the screen is the home', async () => {
    await expect(element(by.id('homeLayout'))).toBeVisible()
  })
})
