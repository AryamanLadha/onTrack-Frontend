import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

function Profile({ getData, storeData }) {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>Profile</div>
  )
}

const mapStateToProps = (store) => {
  return {
    storeData: store.data,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
