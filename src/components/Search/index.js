import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

const Search = ({ onSearchType }) => (
      <div className="search--container">
        <input className="search--container-input" type="text" onChange={event => { onSearchType(event) }} />
      </div>
);

Search.propTypes = {
  onSearchType: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
