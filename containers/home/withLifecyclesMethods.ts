import { lifecycle } from 'recompose';
import { LayoutProps } from './types';

export const withLifecycleMethods = lifecycle<LayoutProps, LayoutProps>({
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      animation: this.props.animateDeleteButton
    });
    this.props.getToDoData();
  }
});
