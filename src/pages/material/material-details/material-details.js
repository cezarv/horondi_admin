import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../material-add/material-add.styles';
import LoadingBar from '../../../components/loading-bar';
import MaterialForm from '../../../components/forms/material-form';
import { getMaterial } from '../../../redux/material/material.actions';
import { materialSelector } from '../../../redux/selectors/material.selectors';

const MaterialDetails = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();

  const { loading, material } = useSelector(materialSelector);
  const styles = useStyles();

  useEffect(() => {
    dispatch(getMaterial(id));
  }, [dispatch, id]);

  if (loading) {
    return <LoadingBar />;
  }
  return (
    <div className={styles.container}>
      {material !== null ? <MaterialForm id={id} material={material} /> : null}
    </div>
  );
};

const valueShape = PropTypes.shape({
  value: PropTypes.string
});

MaterialDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired,
  material: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.arrayOf(valueShape),
    description: PropTypes.arrayOf(valueShape),
    images: PropTypes.shape({
      thumbnail: PropTypes.string
    }),
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        colorHex: PropTypes.string,
        name: PropTypes.arrayOf(valueShape),
        simpleName: PropTypes.arrayOf(valueShape)
      })
    ),
    purpose: PropTypes.string,
    available: PropTypes.bool
  })
};

MaterialDetails.defaultProps = {
  material: {}
};

export default MaterialDetails;
