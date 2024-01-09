import Script from 'next/script'
import React from 'react'

function Analytics() {
  return (
    <>
    <Script async strategy="lazyOnload"  src="https://www.googletagmanager.com/gtag/js?id=G-R0RR6G0308" />
    <Script async strategy="lazyOnload" id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-R0RR6G0308');
      `}
    </Script>
    </>

  )
}

export default Analytics;