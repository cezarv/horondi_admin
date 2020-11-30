import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Box, Grid, Avatar } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import { useStyles } from './product-add-images.styles';

import StepperButtons from '../../../../components/stepper-control-buttons';
import { setFilesToUpload } from '../../../../redux/products/products.actions';

import { productsTranslations } from '../../../../translations/product.translations';
import ImageUploadContainer from '../../../../containers/image-upload-container';

const { MAIN_PHOTO, ADDITIONAL_PHOTOS, REQUIRED_PHOTOS } = productsTranslations;

const ProductAddImages = ({
  activeStep,
  handleNext,
  handleBack,
  setAdditionalImages,
  additionalImages,
  setPrimaryImage,
  primaryImage
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [shouldValidate, setShouldValidate] = useState(false);

  const handlePrimaryImageLoad = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPrimaryImage(event.target.result);
        console.log(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAdditionalImagesLoad = (e) => {
    // if (e.target.files && e.target.files[0]) {
    //   const reader = new FileReader();
    //   reader.onload = (event) => {
    //     setAdditionalImages(event.target.result);
    //     console.log(event.target.result);
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    // }

    const { files } = e.target;
    if (e.target.files && e.target.files[0]) {
      // const reader = new FileReader();
      const imagesNames = additionalImages.map(({ name }) => name);
      console.log(imagesNames);
      const newImages = Array.from(files).filter(
        ({ name }) => !imagesNames.includes(name) && name !== primaryImage.name
      );
      console.log(newImages);
      setAdditionalImages((prevImages) => [...prevImages, ...newImages]);
      console.log(additionalImages);

      // reader.onload = (event) => {
      //   setAdditionalImages((prevImages) => [...prevImages, ...newImages]);
      //   console.log(event.target.result);
      // };
    }
  };

  const handleImagesLoad = () => {
    setShouldValidate(true);
    if (primaryImage && additionalImages.length) {
      dispatch(setFilesToUpload([primaryImage, ...additionalImages]));
      handleNext();
    } else if (primaryImage) {
      dispatch(setFilesToUpload([primaryImage, null]));
      handleNext();
    }
  };

  // const handleDeletePrimaryImage = () => {
  //   setPrimaryImage('');
  // };

  // const handleDeleteAdditionalImage = (name) => {
  //   const newImages = additionalImages.filter((image) => image.name !== name);
  //   setAdditionalImages(newImages);
  // };

  return (
    <div className={styles.container}>
      <Box my={3}>
        <Grid container spacing={1}>
          <Grid item>
            <ImageUploadContainer
              handler={handlePrimaryImageLoad}
              buttonLabel={MAIN_PHOTO}
            />
            {primaryImage && (
              <Avatar src={primaryImage}>
                <Image />
              </Avatar>
            )}
          </Grid>
        </Grid>
        {shouldValidate && !primaryImage && (
          <div className={styles.error}>{REQUIRED_PHOTOS}</div>
        )}
      </Box>
      <Box my={3}>
        <Grid container spacing={1}>
          <Grid item>
            <ImageUploadContainer
              handler={handleAdditionalImagesLoad}
              buttonLabel={ADDITIONAL_PHOTOS}
            />
            {additionalImages.map((e, { name }) => (
              <Avatar key={name} label={name} src={e}>
                <Image />
              </Avatar>
            ))}
          </Grid>
        </Grid>
      </Box>
      <StepperButtons
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleImagesLoad}
      />
    </div>
  );
};

ProductAddImages.propTypes = {
  activeStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  setAdditionalImages: PropTypes.func.isRequired,
  setPrimaryImage: PropTypes.func.isRequired,
  additionalImages: PropTypes.arrayOf(PropTypes.object),
  primaryImage: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.object),
    PropTypes.string
  ])
};

ProductAddImages.defaultProps = {
  primaryImage: '',
  additionalImages: []
};

export default ProductAddImages;
