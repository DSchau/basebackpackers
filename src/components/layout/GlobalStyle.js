import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  
html {
  font-family: 'PT Sans', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size:calc(14px + .25vw)!important
}



/* Misc - Todo - Most needs to be refactored out */

.video-responsive {
	position:relative;
	padding-bottom:45%;
	padding-top:30px;
	height:0;
  margin-bottom:2rem;
	overflow:hidden;
}

.video-responsive iframe, .video-responsive object, .video-responsive embed {
	position:absolute !important;
	top:0 !important;
	left:0 !important;
	width:100% !important;
	height:100% ;
}

.darker {
  filter: brightness(.7);
}

.includes li {
  list-style: none;
  margin-bottom: .5rem;
}
.includes ul {
  margin: .5rem 0;

}

.is-current {
  border-bottom:2px solid #13A7C1;
}

.room {text-transform: lowercase;
}

.room-0, span.room-1.show {
  display: none !important;
}

span.room-0.show {
  display: inline !important;
}
.accom-0.show {
  display: none !important;
}
.accom-0 {
  display: block !important;
}

.show {
  display: block !important;
}

.article1 {
  display: grid;
  max-width: 1000px;
  margin: 2rem auto;
  grid-gap: 10px 50px;
  grid-template-columns: 3fr 12fr 5fr;
}

.article1>* {
  grid-column: 2 / -2;
}

.article>* {
  grid-column: 2 / -2;
}


.gatsby-image-outer-wrapper, .article img, .image_block {
  grid-column: 2 / -2;
  
}

.topnav .icon {
  display: none;
}




/* Dropdown container - needed to position the dropdown content */
.dropdown {
    float: left;
    overflow: hidden;
}

/* Style the dropdown button to fit inside the topnav */
.dropdown .dropbtn {
    
    border: none;
    outline: none;
    color: white;
    padding: 5px 10px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Style the links inside the dropdown */
.dropdown-content a {
    float: none;
    color: black;
    padding: 3px 10px;
    text-decoration: none;
    display: block;
    text-align: right;
}


/* Add a grey background to dropdown links on hover */
.dropdown-content a:hover {
    background-color: #ddd;
    color: black;
}

/* Show the dropdown menu when the user moves the mouse over the dropdown button */
.dropdown:hover .dropdown-content {
    display: block;
}
/* Add a dark background on topnav links and the dropdown button on hover */
.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

@media screen and (max-width: 600px) {
  .topnav a, .dropdown .dropbtn, .menucta {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
    font-size:1.5rem;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative; padding:2rem; background:#000000ab; min-width: 200px;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
    font: size 1.4rem;
    line-height: 3rem;

  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative; font-size:1rem;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}




/* Typography */

h1 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.07rem;
  line-height: 2.314rem;
  font-family: 'PT Sans Narrow', sans-serif;
  letter-spacing: .1rem;
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.643rem;
  line-height: 2.643;
}
h3 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.286rem;
  line-height: 2.071;
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.714;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
}
hgroup {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
ol {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
dl {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
dd {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  line-height: 1.714
}
figure {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 0.85rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}
table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
}
fieldset {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
form {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
noscript {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
iframe {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
hr {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: calc(1.45rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
}
address {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
b {
  font-weight: bold;
}
strong {
  font-weight: bold;
}
dt {
  font-weight: bold;
}
th {
  font-weight: bold;
}
li {
  margin-bottom: calc(1.45rem / 2);
}
ol li {
  padding-left: 0;
}
ul li {
  padding-left: 0;
}
li > ol {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li > ul {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
blockquote *:last-child {
  margin-bottom: 0;
}
li *:last-child {
  margin-bottom: 0;
}
p *:last-child {
  margin-bottom: 0;
}
li > p {
  margin-bottom: calc(1.45rem / 2);
}
code {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
kbd {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
samp {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
abbr {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
acronym {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
abbr[title] {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
  text-decoration: none;
}
thead {
  text-align: left;
}
td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}
tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after,
tt:before,
tt:after {
  letter-spacing: -0.2em;
  content: " ";
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: "";
}






/* Changes to scroll nav styles  */


.ScrollNav {
  margin-Left: 0; margin-Bottom: 0;
}
 .scroll::-webkit-scrollbar-track
 {
   
   border-radius: 6px;
   background-color: #F5F5F5;
   padding:4px 0; 
   border:4px solid #fff;
 }
 
 .scroll::-webkit-scrollbar
 {
   width: 6px;
   background-color: #F5F5F5;
   border-color:#fff;
 }
 
 .scroll::-webkit-scrollbar-thumb
 {
   border-radius: 6px;
   background-color: #00a7c3;
   border:4px solid #fff;
 }

/* Resets */

body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  color: ${props => props.theme.secondaryColor};
}
a:active,
a:hover {
  outline-width: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}
dfn {
  font-style: italic;
}

.giant {
  font-size: 2.63;
}

mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: .7857rem;
  line-height:1.357
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -.25em;
}
sup {
  top: -.5em;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type=reset],
[type=submit],
button,
html [type=button] {
  -webkit-appearance: button;
}
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: .35em .625em .75em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  padding: 0;
}
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}
[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
html {
  
  box-sizing: border-box;
  overflow-y: scroll;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
body {
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}



`;
export { GlobalStyle };
