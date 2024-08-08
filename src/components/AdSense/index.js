import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

const AdSense = () => {
  useEffect(() => {
    const adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8845957273745682" crossorigin="anonymous"></script>
      </Helmet>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-8845957273745682"
           data-ad-slot="4348988983"
           data-ad-format="auto"
           data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;
