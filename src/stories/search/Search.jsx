import React from 'react'
import styles from "./search.module.css";
import PropTypes from 'prop-types';

export const Search = ({ searchText, onChange, size, variant }) => {

  return (
    <input
      type="text"
      className={[styles["searchInput"], styles[`${size}`], styles[`${variant}`]].join(" ")}
      placeholder="search..."
      value={searchText}
      onChange={onChange}
    />
  );
};

Search.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small','medium','large'])
}

Search.defaultProps={
  variant: 'dark',
  size:'medium'
}