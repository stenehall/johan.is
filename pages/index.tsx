import Head from 'next/head'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default () => [
  <Head>
    <link rel="amphtml" href="https://johan.is/amp/" />
  </Head>,
  <Main />,
  <Footer>
    <script
      dangerouslySetInnerHTML={{
        __html: `
              WebFontConfig = {
                google: {
                  //Fanwood+Text:400,400i|Quattrocento:400,700
                  families: ['Quattrocento:400', 'Fanwood Text:400']
                }
              };
          
              (function(d) {
                  var wf = d.createElement('script'), s = d.scripts[0];
                  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
                  wf.async = true;
                  s.parentNode.insertBefore(wf, s);
              })(document)

      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
      `
      }}
    />
  </Footer>
]
