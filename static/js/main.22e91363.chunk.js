(this["webpackJsonpreact-tests"]=this["webpackJsonpreact-tests"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"UserForm_container__PcEiK",thumb:"UserForm_thumb__1AZOt",title:"UserForm_title__N3JQq",form:"UserForm_form__1Bxn9",formLabel:"UserForm_formLabel__2jf5X",formInput:"UserForm_formInput__2hTc2",submitBtn:"UserForm_submitBtn__3z6o6",bouncing:"UserForm_bouncing__1j4qe"}},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),s=a.n(r),c=a(4),l=a.n(c),o=a(5),i=a(6),m=a(7),h=a(9),b=a(8),u=a(1),j=a.n(u),d=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",tel:"",email:""},e.handlerNameChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(o.a)({},n,r))},e.handlerSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",tel:"",email:""})},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:j.a.container,children:[Object(n.jsx)("div",{className:j.a.thumb,children:Object(n.jsx)("p",{className:j.a.title,children:"Registration"})}),Object(n.jsxs)("form",{onSubmit:this.handlerSubmit,className:j.a.form,children:[Object(n.jsxs)("label",{className:j.a.formLabel,children:["Name",Object(n.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",className:j.a.formInput,value:this.state.name,onChange:this.handlerNameChange})]}),Object(n.jsxs)("label",{className:j.a.formLabel,children:["Telephone",Object(n.jsx)("input",{type:"tel",name:"tel",placeholder:"XXX XXX XXXX",className:j.a.formInput,value:this.state.tel,onChange:this.handlerNameChange,pattern:"\\d{3} \\d{3} \\d{4}"})]}),Object(n.jsxs)("label",{className:j.a.formLabel,children:["Email",Object(n.jsx)("input",{type:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:j.a.formInput,value:this.state.email,onChange:this.handlerNameChange})]}),Object(n.jsx)("button",{type:"submit",className:j.a.submitBtn,disabled:""===this.state.name||""===this.state.email,children:"send"})]})]})}}]),a}(r.Component);function f(){return Object(n.jsx)("div",{children:Object(n.jsx)(d,{onFormSubmit:function(e){console.log(e)}})})}function p(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"https://cloud.degoo.com/share/UbLXGGfOT9v3AO2EkfTPxw",target:"_blank",rel:"noreferrer",style:{marginLeft:"16px"},children:"Tanja Anna"}),Object(n.jsx)("a",{href:"https://cloud.degoo.com/share/Heky6dC72-Egfy8TNFOMUg",target:"_blank",rel:"noreferrer",style:{marginLeft:"16px"},children:"Horvatia 2019"}),Object(n.jsx)("a",{href:"https://drive.google.com/drive/folders/1EtpiXzfJhIQS_hwQXToiPmLKH4syDvbL?usp=sharing",target:"_blank",rel:"noreferrer",style:{marginLeft:"16px"},children:"X X X"})]})}function O(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsx)(p,{})]})}a(15),a(16);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.22e91363.chunk.js.map