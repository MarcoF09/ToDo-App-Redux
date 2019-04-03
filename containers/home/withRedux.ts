import { connect } from 'react-redux';
import { mapDispatchToProps } from './mapDispatchToProps';
import { mapStateToProps } from './mapStateToProps';

export const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps
);
