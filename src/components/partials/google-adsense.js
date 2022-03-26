import {useEffect} from  'react';

const GoogleAdsense = () => {
  useEffect(() => {
    console.log('test run adsense');
    (window.AbstractRangeadsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      test
    <ins 
      className="adsbygoogle"
      style={{display: "block"}}
      data-ad-client="ca-pub-8201104557460939"
      data-ad-slot="4525430142"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    </div>
  );
};

export default GoogleAdsense;