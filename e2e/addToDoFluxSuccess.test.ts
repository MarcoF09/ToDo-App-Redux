describe('should add a todo', () => {
  beforeAll(async () => {
    await device.reloadReactNative()
  })

  it('should got to New Task screen', async () => {
    // await expect(element(by.id('goToNewtask')).toBeVisible())
    await element(by.id('goToNewtask')).tap()
  })

  it('should verify if the view is visible', async () => {
    await expect(element(by.id('layout'))).toBeVisible()
  })
  it('should type the inputs texts', async () => {
    await element(by.id('title')).typeText('titleTest')
    await element(by.id('description')).typeText('descriptionTest')
  })

  it('should save todo', async () => {
    await element(by.id('saveTodo')).tap()
  })

  it('verify if the item was added', async () => {
    await expect(element(by.text('titleTest'))).toBeVisible()
  })
})

// describe('should add a todo', () => {
//   beforeAll(async () => {
//     await reloadApp()
//   })

//   it('should got to New Task screen', async () => {
//     await tap('goToNewTask', 'id')
//   })

//   it('should verify if the view is visible', async () => {
//     await asserElementIsVisible('layout', 'id')
//   })
//   it('should type the inputs texts', async () => {
//     await typeText('title', 'titleTest')
//     await typeText('description', 'descriptionTest')
//   })

//   it('should save todo', async () => {
//     await tap('saveTodo', 'id')
//   })

//   it('verify if the item was added', async () => {
//     await asserElementIsVisible('titleTest', 'text')
//   })
// })
