(this["webpackJsonpreact-tests"]=this["webpackJsonpreact-tests"]||[]).push([[0],{1:function(e,t,n){e.exports={title:"Feedback_title__36XKl",btnContainer:"Feedback_btnContainer__Dl-5d",btn:"Feedback_btn__2w-tO",text:"Feedback_text__1qvil"}},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),i=n(4),s=n.n(i),o=n(5),l=n(6),d=n(8),b=n(7),u=n(1),j=n.n(u);function h(e){var t=e.title,n=e.children;return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h2",{className:j.a.title,children:t}),n]})}function x(e){var t=e.good,n=e.neutral,r=e.bad,i=e.total,s=void 0===i?0:i,o=e.positivePercentage,l=void 0===o?0:o;return Object(c.jsx)(a.Fragment,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsxs)("p",{className:j.a.text,children:["Good : ",t]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{className:j.a.text,children:["Neutral : ",n]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{className:j.a.text,children:["Bad : ",r," "]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{className:j.a.text,children:["Total : ",s," "]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{className:j.a.text,children:["Positive feedback : ",l," %"]})})]})})}function O(e){var t=e.incrementGood,n=e.incrementNeutral,r=e.incrementBad;return Object(c.jsx)(a.Fragment,{children:Object(c.jsxs)("div",{className:j.a.btnContainer,children:[Object(c.jsx)("button",{type:"button",className:j.a.btn,onClick:t,children:"good"}),Object(c.jsx)("button",{type:"button",className:j.a.btn,onClick:n,children:"neutral"}),Object(c.jsx)("button",{type:"button",className:j.a.btn,onClick:r,children:"bad"})]})})}var m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementGood=function(t){e.setState((function(e){return{good:e.good+1}}))},e.incrementNeutral=function(t){e.setState((function(e){return{neutral:e.neutral+1}}))},e.incrementBad=function(t){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){for(var t=0,n=0,c=Object.values(e.state);n<c.length;n++){t+=c[n]}return t},e.countPositiveFeedbackPercentage=function(){for(var t=0,n=0,c=Object.values(e.state);n<c.length;n++){t+=c[n]}return Math.round(Number.parseFloat(100/t)*[e.state.good])},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{title:"Please leave feedback",children:Object(c.jsx)(O,{incrementGood:this.incrementGood,incrementNeutral:this.incrementNeutral,incrementBad:this.incrementBad})}),Object(c.jsx)(h,{title:"Statistics",children:0===this.countTotalFeedback()?"No feedback given":Object(c.jsx)(x,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component);function v(){return Object(c.jsx)("div",{children:Object(c.jsx)(m,{})})}n(14),n(15);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3242f472.chunk.js.map