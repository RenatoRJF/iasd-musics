import React from 'react';
import PropTypes from 'prop-types';

function ContentBox(props) {
  const { children } = props;

  return (
    <div className="content-box">
      <ul>
        {children}
      </ul>
    </div>
  );
}

ContentBox.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentBox;
