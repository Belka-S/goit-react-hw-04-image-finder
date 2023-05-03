import PropTypes from 'prop-types';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import css from 'styles/Styles.module.scss';

export const Gallery = ({ normalData, toggleModal }) => (
  <ul className={css.ImageGallery}>
    <GalleryItem normalData={normalData} toggleModal={toggleModal} />
  </ul>
);

Gallery.propTypes = {
  normalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
