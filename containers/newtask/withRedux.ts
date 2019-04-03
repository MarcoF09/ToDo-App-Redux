import { connect } from 'react-redux';
import { mapDispatchToProps } from './mapDispatchToProps';

export const withRedux = connect(
  null,
  mapDispatchToProps
);
