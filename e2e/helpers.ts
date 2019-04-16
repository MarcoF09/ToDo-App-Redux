export const reloadApp = () => {
  return device.reloadReactNative()
}

export const tap = (elementId: string, type: string = 'id') => {
  switch (type) {
    case 'id':
      return element(by.id(elementId)).tap()
    case 'text':
      return element(by.text(elementId)).tap()
  }
}

export const asserElementIsVisible = (
  elementId: string,
  type: string = 'id'
) => {
  switch (type) {
    case 'id':
      return expect(element(by.id(elementId))).toBeVisible()
    case 'text':
      return expect(element(by.text(elementId))).toBeVisible()
  }
}

export const assertElementIsNotVisible = (labelElementName: string) => {
  return expect(element(by.id(labelElementName))).toBeNotVisible()
}

export const textIsVisible = (label: string) => {
  return expect(element(by.label(label))).toBeVisible()
}

export const typeText = (elementId: string, text: string) => {
  return element(by.id(elementId)).typeText(text)
}
