import { compose, withStateHandlers } from 'recompose';
import { Colors } from '../../colors/Colors';

const withTitleHandlers = withStateHandlers(
  { title: '' },
  {
    onChangeTitle: state => (text: string) => ({
      title: text
    })
  }
);

const withDescriptionHandlers = withStateHandlers(
  { description: '' },
  {
    onChangeDescription: state => (text: string) => ({
      description: text
    })
  }
);

const withTitleColorHandler = withStateHandlers(
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
);

const withDescriptionColorHandler = withStateHandlers(
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
);

export const stateEnhacer = compose(
  withTitleHandlers,
  withDescriptionHandlers,
  withTitleColorHandler,
  withDescriptionColorHandler
);
