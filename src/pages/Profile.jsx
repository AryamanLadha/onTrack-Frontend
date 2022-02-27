import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getData } from '../actions/actions';
import { PageButton } from '../components';

function Profile({ getData, storeData }) {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PageButton
        page="profile"
        text="Edit"
        size="short"
      />
    </div>
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
