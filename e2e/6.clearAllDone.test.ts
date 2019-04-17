import { by, element } from 'detox'

describe('should verify of clear all done', () => {
  it('should check all checkbox', async () => {
    let error: boolean = false
    let index: number = 0
    while (!error) {
      try {
        // .withDescendant(by.id('checkboxInactive')
        await element(by.id('buttonCheckbox'))
          .atIndex(index)
          .tap()
        await expect(
          element(by.id('checkboxActive')).atIndex(index)
        ).toBeVisible()
        index++
      } catch (err) {
        error = true
      }
    }
  })

  it('should click clear all done button', async () => {
    await element(by.id('button')).tap()
  })

  it('should verify if all checkboxs are correcly all checkbox', async () => {
    await expect(element(by.id('checkboxActive'))).toNotExist()
  })
})
