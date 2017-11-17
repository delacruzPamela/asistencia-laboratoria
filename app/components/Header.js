import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ src, alt, idHd }) => {
  return (
    <div className='container-fluid margin-bottom-15' id={idHd}>
      <div className="row header">
        <div className='col-xs-6 col-sm-6 col-md-3 col-lg-2'>
          <img src={src} alt={alt}/>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  idHd: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default Header