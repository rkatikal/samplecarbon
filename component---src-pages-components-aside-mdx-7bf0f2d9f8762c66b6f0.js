(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LvKH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return g}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},b=i("PageDescription"),s=i("InlineNotification"),c=i("Row"),p=i("Column"),d=i("Aside"),m={_frontmatter:l},u=r.a;function g(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(u,o({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(b,{mdxType:"PageDescription"},Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"<Aside>")," component is a wrapper component that adds styling to make the text display smaller than the default body text; using ",Object(a.b)("inlineCode",{parentName:"p"},"body-long-01")," and adds the correct top border styles."),Object(a.b)("p",null,"It should only be used within a ",Object(a.b)("inlineCode",{parentName:"p"},"<Column>")," component with specific parameters. ",Object(a.b)("inlineCode",{parentName:"p"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>"))),Object(a.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Warning:")," If you use more than one ",Object(a.b)("inlineCode",{parentName:"p"},"<Aside>")," component on a single page, you need to provide an accessibility label so that someone using assistive technology can quickly understand the purpose of the landmark. See ",Object(a.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role#Labeling_landmarks"}),"Mozilla Developer Network’s documentation")," for more information. Props for accessibility labels are described in the ",Object(a.b)("a",o({parentName:"p"},{href:"#props"}),"Props section")," below.")),Object(a.b)("h2",null,"Example"),Object(a.b)(c,{mdxType:"Row"},Object(a.b)(p,{colMd:5,colLg:8,mdxType:"Column"},Object(a.b)("p",null,"It is more important than ever that we own our own ethos, make palpable our brand values, and incorporate an instantly identifiable IBMness in everything we do."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés or a wild scramble for novelty. Without aesthetic, the computer is but a mindless speed machine, producing effects without substance, form without relevant content, or content without meaningful form."),Object(a.b)("cite",null,"– Paul Rand")),Object(a.b)("p",null,"Aesthetic is defined as the philosophical theory or set of principles governing outward appearance or actions.")),Object(a.b)(p,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},Object(a.b)(d,{"aria-label":"Example aside",mdxType:"Aside"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Good design is always good design.")),Object(a.b)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in stylistic terms, but the modernist attitudes and approach used at the time.")))),Object(a.b)("h2",null,"Code"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Aside/Aside.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Aside",path:"components/Aside/Aside.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Aside"}),"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>\n  <Aside>\n    **Good design is always good design.** What we borrow from our own design\n    history is not a mid-century aesthetic in stylistic terms, but the modernist\n    attitudes and approach used at the time.\n  </Aside>\n</Column>\n")),Object(a.b)("h3",null,"Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"property"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"propType"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"required"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"default"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"aria-label"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify an ",Object(a.b)("inlineCode",{parentName:"td"},"aria-label")," value to provide a label to the inner aside element.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"aria-labelledBy"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Specify an ",Object(a.b)("inlineCode",{parentName:"td"},"aria-labelledby")," value that references the id of an existing element to serve as a label for the inner aside element.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"children"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"node"),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"className"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null})),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Add custom class name")))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-aside-mdx-7bf0f2d9f8762c66b6f0.js.map