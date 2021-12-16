(this.webpackJsonpwindbnb=this.webpackJsonpwindbnb||[]).push([[0],{11:function(t,e,r){},12:function(t,e,r){"use strict";r.r(e);var i=r(1),o=r(5),s=r.n(o),a=r(2),n=r.p+"static/media/logo.beef9462.svg",l=r(0),c=function(t){var e=t.filterOptions,r=Object(i.useState)(""),o=Object(a.a)(r,2),s=o[0],c=o[1],u=Object(i.useState)(),p=Object(a.a)(u,2),d=p[0],m=p[1];return Object(l.jsxs)("div",{className:"flex flex-col mx-4 justify-center lg:flex-row lg:justify-between lg:w-full",children:[Object(l.jsx)("div",{className:"flex w-full lg:w-auto",children:Object(l.jsx)("img",{src:n,alt:"logo.svg",className:"py-2 px-2 lg:h-32 lg:w-32"})}),Object(l.jsx)("div",{className:"flex justify-center lg:mt-0",children:Object(l.jsxs)("div",{className:"flex flex-col w-full mt-8 lg:mt-0 lg:flex-row lg:items-center",children:[Object(l.jsx)("input",{value:s,type:"text",placeholder:"London",className:"border-2 border-gray-300 py-4 px-2 capitalize focus:outline-none rounded-tr-lg rounded-tl-lg lg:py-4 lg:px-2 lg:rounded-l-2xl lg:border-2 lg:border-r-1 lg:rounded-r-none",onChange:function(t){var e=t.target;return c(e.value)}}),Object(l.jsx)("input",{value:d,type:"number",min:"0",placeholder:"add guests",className:"border-2 border-t-0 border-gray-300 py-4 px-2 capitalize focus:outline-none rounded-br-lg rounded-bl-lg lg:py-4 lg:px-2 lg:rounded-none lg:border-2 lg:border-l-0 lg:border-r-1",onChange:function(t){var e=t.target;return m(e.value)}}),Object(l.jsxs)("button",{onClick:function(){return e(s,d)},type:"submit",className:" py-2 lg:px-2 lg:py-4 bg-red-400 relative mt-6 rounded-md lg:rounded-2xl flex justify-center items-center w-1/2 self-center lg:mt-0 lg:bg-transparent lg:border-2 lg:border-gray-300 lg:border-l-0 lg:rounded-l-none lg:bg-red-400 lg:text-white",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-6 w-6 mr-2 text-white",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(l.jsx)("span",{className:"text-xl text-white lg:hidden",children:"search"})]})]})})]})},u=function(t){var e=t.results;t.location;return Object(l.jsxs)("div",{className:"flex justify-between w-full mt-8 lg:mt-20 items-center",children:[Object(l.jsx)("p",{className:"capitalize font-extrabold\ttext-lg ml-4 font-montserrat",children:"stays in Britain"}),Object(l.jsx)("p",{className:"mr-4 font-light text-sm",children:e>10?"10+":e})]})},p=function(t){var e=t.photo,r=t.superHost,i=t.title,o=t.rating;return Object(l.jsxs)("div",{className:"flex flex-col mx-2 my-8",children:[Object(l.jsx)("img",{src:e,alt:"home.jpg",className:"object-cover rounded-xl h-60"}),Object(l.jsxs)("div",{className:"flex items-center justify-between w-full mt-2",children:[r&&Object(l.jsx)("p",{className:"border-2 rounded-xl border-gray-500 text-xs text-center font-semibold p-1",children:"super host"}),Object(l.jsx)("p",{className:r?"text-sm truncate w-3/5 text-center":"text-sm truncate",children:i}),Object(l.jsxs)("p",{className:"flex items-center",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 fill-current text-red-500 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),Object(l.jsx)("span",{className:"text-sm ml-2",children:o.toFixed(2)})]})]})]})},d=function(t){var e=t.data;return Object(l.jsx)("div",{className:"flex flex-col mt-8 lg:grid lg:grid-cols-3 lg:w-full lg:gap-4",children:e.map((function(t){var e=t.id,r=t.superHost,i=t.title,o=t.rating,s=t.photo;return Object(l.jsx)(p,{superHost:r,title:i,rating:o,photo:s},e)}))})},m=r(4),h=function(){var t=Object(i.useState)(m),e=Object(a.a)(t,2),r=e[0],o=e[1];return Object(l.jsxs)("div",{className:"flex flex-col lg:flex lg:justify-between lg:flex-row lg:items-center lg:mt-12 lg:mx-8 lg:flex-wrap",children:[Object(l.jsx)(c,{filterOptions:function(t,e){return function(t,e){o(m.filter((function(r){var i=r.city,o=r.maxGuests;return t.charAt(0).toUpperCase()+t.slice(1)===i&&parseInt(e)===o})))}(t,e)}}),Object(l.jsx)(u,{results:r.length}),Object(l.jsx)(d,{data:r})]})};r(11);s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))},4:function(t){t.exports=JSON.parse('[{"id":"1","city":"London","country":"Britain","superHost":false,"title":"Stylist apartment in center of the city","rating":4.4,"maxGuests":3,"type":"Entire apartment","beds":2,"photo":"https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"},{"id":"2","city":"Birmingham","country":"Britain","superHost":false,"title":"Nice apartment in center of Birmingham","rating":4.2,"maxGuests":5,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"id":"3","city":"London","country":"Britain","superHost":true,"title":"Arty interior in 1900 wooden house","rating":4.5,"maxGuests":10,"type":"Entire house","beds":6,"photo":"https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"id":"4","city":"London","country":"Britain","superHost":false,"title":"Apartment next to market spuare","rating":4.48,"maxGuests":3,"type":"Entire apartment","beds":null,"photo":"https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{"id":"5","city":"Birmingham","country":"Britain","superHost":true,"title":"Villa Aurora guest-house","rating":4.75,"maxGuests":9,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"},{"id":"6","city":"Liverpool","country":"Britain","superHost":true,"title":"A cosy family house","rating":4.95,"maxGuests":6,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"id":"7","city":"Liverpool","country":"Britain","superHost":false,"title":"Lovely Studio near Railway Station","rating":4.68,"maxGuests":2,"type":"Private room","beds":null,"photo":"https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"},{"id":"8","city":"Edinburgh","country":"Britain","superHost":false,"title":"Peaceful little home in city center","rating":4.12,"maxGuests":6,"type":"Entire house","beds":3,"photo":"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},{"id":"9","city":"Edinburgh","country":"Britain","superHost":false,"title":"Beautiful new studio apartment nearby the center","rating":4.49,"maxGuests":2,"type":"Entire apartment","beds":1,"photo":"https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"},{"id":"10","city":"Edinburgh","country":"Britain","superHost":true,"title":"Cozy woodhouse flat with wooden sauna","rating":4.38,"maxGuests":4,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"},{"id":"11","city":"Liverpool","country":"Britain","superHost":false,"title":"Brand new studio apartment near the harbour","rating":4.89,"maxGuests":6,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"},{"id":"12","city":"London","country":"Britain","superHost":false,"title":"Beautiful and comfortable old wooden house","rating":4.63,"maxGuests":10,"type":"Entire house","beds":null,"photo":"https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"},{"id":"13","city":"Birmingham","country":"Britain","superHost":false,"title":"Birmingham Nordic Home near city center","rating":4.24,"maxGuests":5,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"},{"id":"14","city":"Birmingham","country":"Britain","superHost":true,"title":"Nice 2 room apartment close to everything","rating":4.34,"maxGuests":6,"type":"Entire apartment","beds":3,"photo":"https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.e329b28f.chunk.js.map