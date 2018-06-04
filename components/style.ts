/* font: 140% 'Open Sans', 'helvetica neue', helvetica, sans-serif; */

const style = `
:root {
  --heading: 400 2rem / 1.2 "EB Garamond", Serif;
  --body: 400 1.4em / 1.5em "Roboto", Sans-Serif;
  --color-accent: #fffdc3;
  --color-accent2: #f1ffff;
  --color-accent3: #b9c3c5;
}
html {
  /* background: #ebe9e4; */
  /* background: linear-gradient(to bottom, #d65861 0%,#ec8d95 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background: #f5f5f5; //#fffdc3;

  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font: var(--body); //400 2em / 1.5em 'Cardo', serif;
  color: #45484d;

  letter-spacing: 0.01em;

  /* Reset AMPs delay in showing content */
  -webkit-animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;
  -moz-animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;
  -ms-animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;
  animation: -amp-start 0.01s steps(1, end) 0s 1 normal both;

  // font-family: 'Roboto', sans-serif;
  color: #545E6C;
  // font-size: 14px;
  margin: 0;
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
  font: var(--heading);
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;

  text-rendering: optimizeLegibility;
  font-feature-settings: "kern" 1,"kern";
  font-kerning: normal;
  letter-spacing: .02em;
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

header p {
  margin: 0;
}

header p a {
  color: #000;
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

// header > div,
// main > article,
// footer > div {
//   max-width: 700px;
//   margin: 0 auto;
//   padding: 50px 20px;
// }

main {
  background: #fff; //#f5f5f5;
  display: block;
}

header {
  /* background: var(--color-accent); //#383545; */
  background: var(--color-accent2);
  padding: 6rem 6rem 3rem 3rem;
  color: #555;
}

article, aside {
  padding: 3rem;
}


.contact {
  grid-column: 2;
  grid-row: 1;
}

aside > h2 {
  margin-top: 0;
}

.sub-grid h2 {
  grid-column: 1 / span 2;
}

ul,
address {
  margin: 1rem 0 3rem;
}

ul:last-child {
  margin-bottom: 0;
}

address {
  font-style: inherit;
}

footer {
  margin-top: 3rem;
  text-align: center;
}

.skills {
  padding: 0;
}

.skills li {
  position: relative;
  list-style: none;
}

.skills li + li {
  margin-top: 1.5rem;
}

.skills span {
  display: block;
  background: var(--color-accent3);
  height: 1.5rem;
}

.skills span:after {
  content: '';
  border: 1px solid var(--color-accent3);
  width: 100%;
  height: 1.5rem;
  position: absolute;
}

@media screen and (min-width: 650px) {
  main,
  footer {
    margin: 0 auto;
  }

  main {
    margin: 30px auto;
    max-width: 900px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);  
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-gap: 0;
  }

  header {
    grid-column: 2;
    grid-row: 1;
  }

  article {
    grid-row: 1 / span 2;
    grid-column: 1;
  }

  aside {
    grid-row: 2;
    grid-column: 2;
  }

  article {
    padding: 6rem 3rem 6rem 6rem;
  }
  
  aside {
    background: var(--color-accent2);
    padding: 0 6rem 6rem 3rem;
  }

  .sub-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
`

export default style
