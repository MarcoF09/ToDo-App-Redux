import { withNavigation } from 'react-navigation';
import { compose } from 'recompose';
import { Layout } from './Layout';
import { LayoutProps } from './types';
import { withLifecycleMethods } from './withLifecyclesMethods';
import { withNavigationHeader } from './withNavigationHeader';
import { withRedux } from './withRedux';
import { withDeleteButtonHandler } from './withStateHandlers';

export default compose<LayoutProps, LayoutProps>(
  withNavigationHeader,
  withNavigation,
  withRedux,
  withDeleteButtonHandler,
  withLifecycleMethods
)(Layout);
