const style = `
html {
  background: #ebe9e4;
  margin: 100px;
}

body {
  font: 140% monaco, 'Open Sans', 'helvetica neue', helvetica, sans-serif;
  color: #444;
  background: #fff;
  border-radius: 8px;
  margin: 0;
  padding: 4rem 2rem;

  font-size: 1.6em;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 1.6;

  /* Reset AMPs delay in showing content */
  -webkit-animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;
  -moz-animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;
  -ms-animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;
  animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 75%;
  /* 62.5%; */
}

a {
  color: #000;
  text-decoration: none;
}

a:focus,
a:hover {
  color: #606c76;
}

p {
  margin-top: 0;
}

h1,
h2,
h3 {
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;
}

h1 {
  font-size: 4.6rem;
  line-height: 1.2;
}

h2 {
  font-size: 3.6rem;
  line-height: 1.25;
}

h3 {
  font-size: 2.8rem;
  line-height: 1.3;
}

/* Custom css */

/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

h1 a,
h2 a,
h3 a {
  color: #000;
}

header h1 {
  position: relative;
  margin-bottom: 20px;
  font-size: 28px;
  font-family: 'Roboto', monospace;
  font-weight: 300;
}

header h1:after {
  border: 2px solid currentColor;
  position: absolute;
  left: -4px;
  bottom: -16px;
  width: 30px;
  content: '';
}

h2,
h3 {
  font-family: 'Roboto', monospace;
  font-weight: 300;
}

h2,
h3 {
  font-size: 2rem;
  margin-top: 2em;
  margin-bottom: 0;
}

h3 {
  margin-top: 0;
  font-size: 1.6rem;
}

time {
  display: block;
  margin-bottom: 1rem;
  font-size: 0.8em;
}

h2:after {
  content: '_';
}

p a {
  color: #000;
  text-decoration: underline;
  text-underline-position: under;
}

.inline {
  font-size: 1.2rem;
  padding: 0;
}

.inline li {
  display: inline;
}

.inline li:after {
  content: ', ';
}

.inline li:last-child:after {
  content: '';
}

main,
footer {
  max-width: 700px;
  margin: 0 auto;
}

main {
  display: block;
}

header {
  grid-column: 1;
  grid-row: 1;
}

.contact {
  grid-column: 2;
  grid-row: 1;
}

.main {
  grid-column: 1;
  grid-row: 2;
}

aside {
  grid-column: 2;
  grid-row: 2;
}

.sub-grid h2 {
  grid-column: 1 / span 2;
}

ul,
address {
  margin: 1rem 0 3rem;
}

address {
  font-style: inherit;
}

footer {
  margin-top: 3rem;
}

@media screen and (min-width: 900px) {
  main,
  footer {
    margin: 0 auto;
  }
}

@media screen and (min-width: 650px) {
  main {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-gap: 20px;
  }
  .sub-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
`

export default style
