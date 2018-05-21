/* font: 140% 'Open Sans', 'helvetica neue', helvetica, sans-serif; */

const style = `
html {
  /* background: #ebe9e4; */
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font: 400 2em / 1.5em 'Cardo', serif;

  color: #45484d;
  border-radius: 8px;
  margin: 0;

  letter-spacing: 0.01em;

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
  font-family: 'Open Sans', monospace;
  font-weight: 400;
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;
}

h1 {
  font-size: 4rem;
  line-height: 1.2;
}

h2 {
  line-height: 1.25;
}

h3 {
  line-height: 1.3;
}

/* Custom css */

h1 a,
h2 a,
h3 a {
  color: #000;
}

header h1 {
  position: relative;
  margin-bottom: 10px;
}

header a {
  color: #fff;
}

/*
header h1:after {
  border: 2px solid currentColor;
  position: absolute;
  left: -4px;
  bottom: -16px;
  width: 30px;
  content: '';
}
*/

h2,
h3 {
  font-size: 2.2rem;
  margin-top: 2em;
  margin-bottom: 0;
}

h3 {
  margin-top: 0;
  font-size: 1.8rem;
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

header > div,
main > div,
footer > div {
  max-width: 700px;
  margin: 0 auto;
}

main {
  padding: 50px 0;
  display: block;
}

header {
  background: #383545;
  color: #eeedea;
  padding: 50px 0;
}

header > div {
  grid-column: 1 / span 2;
  grid-row: 1;

  /* text-align: center; */
}

.contact {
  grid-column: 2;
  grid-row: 1;
}

.main > div {
  grid-column: 1;
  grid-row: 2;
}

aside {
  grid-column: 2;
  grid-row: 1;
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
  main > div {
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
