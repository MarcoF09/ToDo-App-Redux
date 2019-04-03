import { lifecycle } from 'recompose';
import { LayoutProps } from './types';

export const withLifecycleMethods = lifecycle<LayoutProps, LayoutProps>({
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      addToDo: this.props.addToDo
    });
  }
});
