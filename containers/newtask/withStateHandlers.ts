import { compose, withStateHandlers } from 'recompose'
import { Colors } from '../../colors/Colors'

export const withTitleHandlers = withStateHandlers(
  { title: '' },
  {
    onChangeTitle: state => (text: string) => ({
      title: text
    })
  }
)

export const withDescriptionHandlers = withStateHandlers(
  { description: '' },
  {
    onChangeDescription: state => (text: string) => ({
      description: text
    })
  }
)

export const withTitleColorHandler = withStateHandlers(
  {
    firstInputColor: Colors.lightGrey
  },
  {
    onFocusTitle: state => () => ({
      firstInputColor: Colors.pink
    }),
    onBlurTitle: state => () => ({
      firstInputColor: Colors.lightGrey
    })
  }
)

export const withDescriptionColorHandler = withStateHandlers(
  {
    secondInputColor: Colors.lightGrey
  },
  {
    onFocusDescription: state => () => ({
      secondInputColor: Colors.pink
    }),
    onBlurDescription: state => () => ({
      secondInputColor: Colors.lightGrey
    })
  }
)

export const stateEnhacer = compose(
  withTitleHandlers,
  withDescriptionHandlers,
  withTitleColorHandler,
  withDescriptionColorHandler
)
