import React from 'react';
import PropTypes from 'prop-types';
import Brandcrumb from '../brandcrumb/Brandcrumb';
import AppSearch from '../app-search/AppSearch';

function Content(props) {
  const { children } = props;

  return (
    <section className="app-main__content">
      <Brandcrumb />
      <AppSearch />
      {children}
    </section>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
