import { by, element } from 'detox'

describe('should verify the beavior of checkbox', () => {
  it('should check checkbox', async () => {
    await element(
      by.id('buttonCheckbox').withDescendant(by.id('checkboxInactive'))
    )
      .atIndex(0)
      .tap()

    await expect(element(by.id('checkboxActive')).atIndex(0)).toBeVisible()
  })

  it('should uncheck checkbox', async () => {
    await element(
      by.id('buttonCheckbox').withDescendant(by.id('checkboxActive'))
    )
      .atIndex(0)
      .tap()

    await expect(element(by.id('checkboxInactive')).atIndex(0)).toBeVisible()
  })
})
