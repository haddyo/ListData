import React from 'react';

const Footer = () => {
  const styles = {
    navbar: {
      flexDirection: 'row',
    },
    footer: {
      position: 'fixed',
      bottom: '0',
      width: '100vw',
      textAlign: 'center',
      backgroundColor: '#666666',
      color: 'white',
    },
    hyperlink: {
      color: 'white',
      textDecoration: 'underline',
    },
  },

    d = new Date();
  return (
    <div className="a-footer" style={styles.footer}>
      Please contact the admin Team
      &nbsp; for further details.
    </div>
  );
};

export default Footer;
