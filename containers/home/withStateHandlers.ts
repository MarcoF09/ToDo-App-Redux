import { Animated } from 'react-native';
import { withStateHandlers } from 'recompose';

const animateDeleteButton = (
  deleteButtonState: boolean,
  moveAnimation: Animated.ValueXY
): boolean => {
  if (!deleteButtonState) {
    Animated.spring(moveAnimation, {
      toValue: { x: 6, y: 30 }
    }).start();
    return true;
  }
  Animated.spring(moveAnimation, {
    toValue: { x: -100, y: 30 }
  }).start();
  return false;
};

export const withDeleteButtonHandler = withStateHandlers(
  {
    deleteButtonState: false,
    moveAnimation: new Animated.ValueXY({ x: -100, y: 30 })
  },
  {
    animateDeleteButton: state => () => ({
      deleteButtonState: animateDeleteButton(
        state.deleteButtonState,
        state.moveAnimation
      )
    })
  }
);
