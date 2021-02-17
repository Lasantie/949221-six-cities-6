import PropTypes from 'prop-types';

const CardPropTypes = PropTypes.shape({
  id: PropTypes.string,
  previewImage: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  isPremium: PropTypes.bool,
  rating: PropTypes.number,
  isFavorite: PropTypes.bool,
}
);

export default CardPropTypes;
