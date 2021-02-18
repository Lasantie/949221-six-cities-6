import PropTypes from 'prop-types';

const ReviewPropTypes = PropTypes.shape({
  comment: PropTypes.string,
  data: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
});

export default ReviewPropTypes;
