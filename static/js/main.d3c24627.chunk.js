(this["webpackJsonpsmoky-potato"]=this["webpackJsonpsmoky-potato"]||[]).push([[0],{105:function(e,a,s){},106:function(e,a,s){},164:function(e,a,s){},172:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),l=s(6),i=s.n(l),r=(s(104),s(105),s(65)),c=s(83),o=s(84),m=s(96),p=s(94),d=(s(106),s(173)),S={"-2":"mutate","-1":"low",0:"normal",1:"high",2:"oe"},u={"-2":"Mutate","-1":"Low",0:"Normal"},C={0:"Normal",1:"25%",2:"40%",3:"100%",4:"110%",5:"180%",6:"250%"},h={0:"",1:"",2:"",3:"",4:"",5:"",6:""},g={"-2":"-60%","-1":"-42%",0:"Normal"},b={"-1":"Very Low",0:"Normal",1:"Increased Aggregation"},y={0:"Normal",1:"High intracellular"},P={"-1":"Decreased",0:"Normal"},N={"-1":"",0:""},f={0:"Normal",1:"Increased"},E={0:"",1:""},I={"-2":"","-1":"",0:""},k={"-3":"-60%","-2":"-50%","-1":"-45%",0:"Normal",1:"26%"},v={"-3":"","-2":"","-1":"",0:"",1:""},O={"-2":"Oxidized","-1":"Low",0:"Normal",1:"High"},D={0:"Absent",1:"Present"},A={0:"Normal",1:"Pathological"},x={"-6":"-70%","-5":"-63%","-4":"-50%","-3":"-41%","-2":"-36%","-1":"-25%",0:"Normal"},F={"-6":"","-5":"","-4":"","-3":"","-2":"","-1":"",0:""},w={dJ1:0,mPP:0,htrA2:0,trap1:0,uchl1:0,pink1:0,parkin:0,dopamine:0,c1Slider:0,h2O2Slider:0,atpSlider:0,rosSlider:0,apopSlider:0,memPotSlider:0,alphaSynSlider:0,ptpSlider:0,calciumSlider:0,dopaNSlider:0,oxygenSlider:0,uPSlider:0,fissionFusionSlider:0,isResetAllDisabled:!0,dJ1Status:"",dopamineStatus:"",mppStatus:"",htrA2Status:"",parkinStatus:"",c1:"",ptp:"",up:"",atp:"",rOS:"",h2O2:"",dopaN:"",oxygen:"",calcium:"",alphaSyn:"",apoptosis:"",mtIntegrity:"",fissionFusion:"",membranePotential:"",c1Class:"",upClass:"",ptpClass:"",atpClass:"",rOSClass:"",h2O2Class:"",dopaNClass:"",oxygenClass:"",calciumClass:"",alphaSynClass:"",apoptosisClass:"",mtIntegrityClass:"",fissionFusionClass:"",membranePotentialClass:""},R=function(e){var a=e.value,s=e.onChange,t=e.name,l=e.status;return n.a.createElement("div",{className:"box p4 ".concat(S[a])},n.a.createElement("div",{className:"factor-name p5"},t),n.a.createElement("div",{className:"status"},l),n.a.createElement(d.a,{range:!0,max:0,min:-2,value:[a],included:!0,onChange:s,marks:u,tooltipVisible:!1}))},J=function(e){var a=e.value,s=e.onChange,t=e.name,l=e.status;return n.a.createElement("div",{className:"box p2 ".concat(t," ").concat(S[a])},n.a.createElement("span",{className:"factor-name "},t),n.a.createElement("div",{className:"status"},l),n.a.createElement(d.a,{range:!0,max:1,min:0,included:!0,value:[a],onChange:s,marks:D,tooltipVisible:!1}))},H=function(e){var a=e.value,s=e.onChange,t=e.name,l=e.status;return n.a.createElement("div",{className:"box p4 oxidized ".concat(S[a])},n.a.createElement("div",{className:"factor-name p5"},t),n.a.createElement("div",{className:"status"},l),n.a.createElement(d.a,{range:!0,max:1,min:-2,value:[a],included:!0,onChange:s,tooltipVisible:!1,marks:O}))},V=(s(164),function(e){var a=e.dJ1,s=e.mPP,t=e.htrA2,l=e.trap1,i=e.uchl1,r=e.pink1,c=e.parkin,o=e.dopamine,m=e.mppStatus,p=e.onDJ1Change,d=e.onDopChange,S=e.htrA2Status,u=e.dJ1Status,C=e.onMPPChange,h=e.parkinStatus,g=e.onPink1Change,b=e.onTrap1Change,y=e.onHtrA2Change,P=e.onUCHL1Change,N=e.dopamineStatus,f=e.onParkinChange;return n.a.createElement("div",{className:"col-1 box-container"},n.a.createElement(R,{name:"PINK1",onChange:g,value:r}),n.a.createElement(R,{name:"PARKIN",onChange:f,value:c,status:h}),n.a.createElement(R,{name:"DJ1",onChange:p,value:a,status:u}),n.a.createElement(R,{name:"TRAP1",onChange:b,value:l}),n.a.createElement(R,{name:"HTRA2",onChange:y,value:t,status:S}),n.a.createElement(R,{name:"UCHL1",onChange:P,value:i}),n.a.createElement(H,{name:"Dopamine",onChange:d,value:o,status:N}),n.a.createElement(J,{name:"MPP\u207a",onChange:C,value:s,status:m}))}),L=function(e){var a=e.name,s=e.status,t=e.className;return n.a.createElement("div",{className:"effects-box ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s))},M=s(176),T=s(180),U=s(177),j=s(179),W=function(e){var a=e.className,s=e.type;return"dec"===s?n.a.createElement(U.a,{className:"status-icon ".concat(a," ").concat(s)}):"inc"===s?n.a.createElement(j.a,{className:"status-icon ".concat(a," ").concat(s)}):null},z=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:20},n.a.createElement(d.a,{range:!0,min:-3,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:v})),n.a.createElement(T.a,{span:4},n.a.createElement("span",{className:"slider-label"},!s&&k[l]))),n.a.createElement(W,{type:t}))},B=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:20},n.a.createElement(d.a,{range:!0,min:-2,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:I})),n.a.createElement(T.a,{span:4},n.a.createElement("span",{className:"slider-label"},!s&&g[l]))),n.a.createElement(W,{type:t}))},K=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider ros ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:20},n.a.createElement(d.a,{range:!0,min:0,max:6,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:h})),n.a.createElement(T.a,{span:4},n.a.createElement("span",{className:"slider-label"},!s&&C[l]))),n.a.createElement(W,{type:t}))},$=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:16},n.a.createElement(d.a,{range:!0,min:-1,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:I})),n.a.createElement(T.a,{span:8},n.a.createElement("span",{className:"slider-label"},!s&&b[l]))),n.a.createElement(W,{type:t}))},q=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider calcium ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:14},n.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),n.a.createElement(T.a,{span:10},n.a.createElement("span",{className:"slider-label"},!s&&y[l]))),n.a.createElement(W,{type:t}))},G=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider dopaN ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:14},n.a.createElement(d.a,{range:!0,min:-1,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:N})),n.a.createElement(T.a,{span:10},n.a.createElement("span",{className:"slider-label"},!s&&P[l]))),n.a.createElement(W,{type:t}))},Q=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:16},n.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),n.a.createElement(T.a,{span:7,offset:1},n.a.createElement("span",{className:"slider-label"},!s&&f[l]))),n.a.createElement(W,{type:t}))},X=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider h2o2 ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:14},n.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),n.a.createElement(T.a,{span:10},n.a.createElement("span",{className:"slider-label"},!s&&f[l]))),n.a.createElement(W,{type:t}))},Y=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider dopaN ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:14},n.a.createElement(d.a,{range:!0,min:-1,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:N})),n.a.createElement(T.a,{span:10},n.a.createElement("span",{className:"slider-label"},!s&&P[l]))),n.a.createElement(W,{type:t}))},Z=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:16},n.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),n.a.createElement(T.a,{span:7,offset:1},n.a.createElement("span",{className:"slider-label"},!s&&f[l]))),n.a.createElement(W,{type:t}))},_=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:16},n.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),n.a.createElement(T.a,{span:7,offset:1},n.a.createElement("span",{className:"slider-label"},!s&&f[l]))),n.a.createElement(W,{type:t}))},ee=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange;return n.a.createElement("div",{className:"effects-box with-slider ptp ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("span",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:16},n.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),n.a.createElement(T.a,{span:7,offset:1},n.a.createElement("span",{className:"slider-label"},!s&&A[l]))),n.a.createElement(W,{type:t}))},ae=function(e){var a=e.up,s=e.atp,t=e.rOS,l=e.h2O2,i=e.ptp,r=e.dopaN,c=e.oxygen,o=e.calcium,m=e.alphaSyn,p=e.uPSlider,d=e.rosSlider,S=e.apoptosis,u=e.apopSlider,C=e.dopaNSlider,h=e.mtIntegrity,g=e.memPotSlider,b=e.h2O2Slider,y=e.fissionFusionSlider,P=e.oxygenSlider,N=e.ptpSlider,f=e.calciumSlider,E=e.fissionFusion,I=e.alphaSynSlider,k=e.membranePotential,v=e.onH2O2SliderChange,O=e.onUPSliderChange,D=e.onDopaNChange,A=e.onPTPChange,x=e.onApopSliderChange,F=e.onCalciumSliderChange,w=e.onOxygenSliderChange,R=e.onMemPotChange,J=e.onRosChange,H=e.atpSlider,V=e.onAlphaSChange,M=e.onAtpSliderChange,T=e.onFissionFusionChange,U=e.upClass,j=e.atpClass,W=e.rOSClass,ae=e.h2O2Class,se=e.dopaNClass,te=e.oxygenClass,ne=e.calciumClass,le=e.alphaSynClass,ie=e.apoptosisClass,re=e.ptpClass,ce=e.mtIntegrityClass,oe=e.fissionFusionClass,me=e.membranePotentialClass;return n.a.createElement("div",{className:"col-2 box-container",style:{float:"right"}},n.a.createElement(z,{name:"\u0394\u03a8m",status:k,value:g,className:me,onChange:R}),n.a.createElement(B,{name:"ATP",status:s,className:j,value:H,onChange:M}),n.a.createElement(K,{name:"ROS",status:t,value:d,className:W,onChange:J}),n.a.createElement($,{name:"\u03b1-Synuclein",status:m,value:I,onChange:V,className:le}),n.a.createElement(q,{name:"Calcium",status:o,className:ne,onChange:F,value:f}),n.a.createElement(Q,{name:"Apoptosis",status:S,value:u,onChange:x,className:ie}),n.a.createElement(G,{name:"Dopaminergic Neuron",status:r,className:se,value:C,onChange:D}),n.a.createElement(X,{name:"H\u2082O\u2082",status:l,className:ae,value:b,onChange:v}),n.a.createElement(Y,{name:"Oxygen Consumption",status:c,className:te,value:P,onChange:w}),n.a.createElement(Z,{name:"Unfolded Protein",onChange:O,status:a,className:U,value:p}),n.a.createElement(ee,{name:"PTP Opening",onChange:A,status:i,className:re,value:N}),n.a.createElement(_,{name:"Fission-Fusion",onChange:T,status:E,className:oe,value:y}),n.a.createElement(L,{name:"Mitochondrial Integrity",status:h,className:ce}))},se=s(175),te=s(178),ne=function(e){var a=e.onClick,s=e.isResetAllDisabled;return n.a.createElement(se.a,{className:"reset-all",type:"primary",shape:"round",disabled:s,icon:n.a.createElement(te.a,{spin:!s}),onClick:a},"ResetAll")},le=function(e){var a=e.name,s=e.status,t=e.className,l=e.value,i=e.onChange,r=e.onReset,c=e.isResetAllDisabled;return n.a.createElement("div",{className:"c1-wrp"},n.a.createElement("div",{className:" box with-slider effects-box ".concat(a," ").concat(t)},n.a.createElement("div",{className:"name"},a),n.a.createElement("div",{className:"status"},s),n.a.createElement(M.a,{gutter:16},n.a.createElement(T.a,{span:20},n.a.createElement(d.a,{range:!0,min:-6,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:F})),n.a.createElement(T.a,{span:4},n.a.createElement("span",{className:"slider-label"},x[l])))),n.a.createElement(ne,{onClick:r,isResetAllDisabled:c}))},ie=function(e){Object(p.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=a.call(this,e)).onPink1Change=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-2:t.setState({pink1:e,atpSlider:[-2],atp:"Decreases by 60%",atpClass:"dec",oxygen:"Decreases by 60%",oxygenClass:"dec",membranePotential:"Decreases by 50%",membranePotentialClass:"dec",apoptosis:"Increases",apoptosisClass:"inc",mtIntegrity:"Decreases",mtIntegrityClass:"dec",rOS:"Increases",rOSClass:"inc",calcium:"Efflux decreases",calciumClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",apopSlider:[1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],memPotSlider:[-2],fissionFusionSlider:[1],rosSlider:[4],c1Slider:[-4]});break;case-1:t.setState({pink1:e,atp:"Decreases",atpClass:"dec",oxygen:"Decreases",oxygenClass:"dec",apoptosis:"Increases",apoptosisClass:"inc",mtIntegrity:"Decreases",mtIntegrityClass:"dec",rOS:"Increases by 180%",rOSClass:"inc",calcium:"Efflux decreases",calciumClass:"dec",membranePotential:"Decreases",membranePotentialClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",C1:"Decreases",c1Class:"dec",c1Slider:[-3],rosSlider:[4],atpSlider:[-1],apopSlider:[1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],memPotSlider:[-1]});break;default:t.setState({pink1:e})}},t.onDJ1Change=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-2:t.setState({dJ1:e,atp:"Decreases by 42%",atpClass:"dec",h2O2:"Increases by 100%",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",membranePotential:"Decreases by 44%",membranePotentialClass:"dec",calcium:"Increases",calciumClass:"inc",rOS:"Increases",rOSClass:"inc",atpSlider:[-1],apopSlider:[1],calciumSlider:[1],memPotSlider:[-1],rosSlider:[2],c1Slider:[-6],h2O2Slider:[1]});break;case-1:t.setState({dJ1:e,atp:"Decreases",atpClass:"dec",h2O2:"Increases",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",calcium:"Increases",calciumClass:"inc",rOS:"Increases",rOSClass:"inc",C1:"Decreases",c1Class:"dec",apopSlider:[1],calciumSlider:[1],memPotSlider:[-1],rosSlider:[4],c1Slider:[-3]});break;default:t.setState({dJ1:e})}},t.onDopChange=function(e,a){switch(!a&&t.resetAll(),e[0]){case-2:t.setState({dopamine:e,calcium:"Increased permeability",calciumClass:"inc",h2O2:"Increases",h2O2Class:"inc",calciumSlider:[1],h2O2Slider:[1]});break;case-1:t.setState({dopamine:e,alphaSyn:"Increases (If Dopamine is below 30%)",alphaSynClass:"inc",alphaSynSlider:[1]});break;case 1:t.setState({dopamine:e,rOS:"Increases",rOSClass:"inc",rosSlider:[3]});break;default:t.setState({dopamine:e})}},t.onHtrA2Change=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-2:case-1:t.setState({htrA2:e,alphaSyn:"Decreases",alphaSynClass:"dec",rOS:"Increases",rOSClass:"inc",apoptosis:"Increases",apoptosisClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",apopSlider:[1],alphaSynSlider:[1],rosSlider:[2],h2O2Slider:[1],uPSlider:[1],dopaNSlider:[-1]});break;default:t.setState({htrA2:e})}},t.onParkinChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-2:t.setState({parkin:e,atp:"Decreases",atpClass:"dec",dopaN:"Decreases by 20%",dopaNClass:"dec",up:"Increases",upClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",rOS:"Increases",rOSClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",apopSlider:[1],atpSlider:[-1],memPotSlider:[-1],alphaSynSlider:[1],rosSlider:[3],uPSlider:[1],dopaNSlider:[-1],fissionFusionSlider:[1],c1Slider:[-5]});break;case-1:t.setState({membranePotential:"Decreases",membranePotentialClass:"dec",atp:"Decreases",atpClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",up:"Increases",upClass:"inc",rOS:"Increases",rOSClass:"inc",alphaSynSlider:[1],memPotSlider:[-1],atpSlider:[-1],rosSlider:[2],uPSlider:[1],fissionFusionSlider:[1],parkin:e});break;default:t.setState({parkin:e})}},t.onTrap1Change=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-2:t.setState({trap1:e,membranePotential:"Decreases by 45%",membranePotentialClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",rOS:"Increases",rOSClass:"inc",rosSlider:[4],alphaSynSlider:[1],memPotSlider:[-1]});break;case-1:t.setState({trap1:e,rOS:"Increases by 100%",rOSClass:"inc",alphaSyn:"Increases",alphaSynClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",rosSlider:[3],alphaSynSlider:[1],memPotSlider:[-1]});break;default:t.setState({trap1:e})}},t.onUCHL1Change=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-1:t.setState({uchl1:e,alphaSyn:"Increases",alphaSynClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",alphaSynSlider:[1],dopaNSlider:[-1],uPSlider:[1]});break;default:t.setState({uchl1:e})}},t.onMPPChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case 1:t.setState({mPP:e,atp:"Decreases (Impaired)",atpClass:"dec",atpSlider:[-1],rOS:"Increases by 40%",rOSClass:"inc",rosSlider:[4],membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-1],calcium:"Increases (Intra-cellular)",calciumClass:"inc",calciumSlider:[1],h2O2:"Increases",h2O2Class:"inc",h2O2Slider:[1],dopaN:"Decreases by 25%",dopaNClass:"dec",dopaNSlider:[-1],apoptosis:"Increases by 60%",apoptosisClass:"inc",apopSlider:[1]}),t.onDopChange([1],!0);break;default:t.setState({mPP:e})}},t.onRosChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case 0:t.resetAll();break;case 1:t.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 50%"});break;case 2:t.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 60%"});break;case 3:t.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 95%",trap1:[-1]});break;case 4:t.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 100%",trap1:[-1]});break;case 5:t.setState({mPP:[1],dJ1:[-1],pink1:[-1],uchl1:[-1],htrA2:[-1],trap1:[-1],parkin:[-1],dopamine:[1],rosSlider:e,up:"Increases",uPSlider:[1],atp:"Decreases",atpSlider:[-1],h2O2:"increases",h2O2Slider:[1],dopaN:"Decreases",dopaNSlider:[-1],oxygen:"Decreases",oxygenSlider:[-1],alphaSyn:"Increases",alphaSynSlider:[1],apoptosis:"Increases",apopSlider:[1],fissionFusion:"Alter",fissionFusionSlider:[1],mtIntegrity:"Decreases",calcium:"Decrease in efflux",calciumSlider:[1],membranePotential:"Decreases",memPotSlider:[-1],ptpSlider:[1],upClass:"inc",atpClass:"dec",h2O2Class:"inc",dopaNClass:"dec",oxygenClass:"dec",calciumClass:"dec",alphaSynClass:"inc",apoptosisClass:"inc",mtIntegrityClass:"dec",fissionFusionClass:"dec",membranePotentialClass:"dec",mppStatus:"Increases by 200%"});break;case 6:t.setState({mPP:[1],dJ1:[-1],pink1:[-1],htrA2:[-1],uchl1:[-1],trap1:[-1],parkin:[-1],dopamine:[1],rosSlider:e,up:"Increases",atp:"Decreases",h2O2:"increases",dopaN:"Decreases",oxygen:"Decreases",alphaSyn:"Increases",apoptosis:"Increases",fissionFusion:"Alter",mtIntegrity:"Decreases",calcium:"Decrease in efflux",membranePotential:"Decreases",upClass:"inc",atpClass:"dec",atpSlider:[-1],uPSlider:[1],h2O2Slider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],memPotSlider:[-1],ptpSlider:[1],fissionFusionSlider:[1],h2O2Class:"inc",dopaNClass:"dec",oxygenClass:"dec",calciumClass:"dec",alphaSynClass:"inc",apoptosisClass:"inc",mtIntegrityClass:"dec",fissionFusionClass:"dec",membranePotentialClass:"dec",mppStatus:"Increases by 500%"});break;default:t.setState({rosSlider:e})}},t.onMemPotChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-3:t.setState({memPotSlider:e,pink1:[-2],dJ1:[-2],trap1:[-2],parkin:[-1],mPP:[1],rOS:"Increases",rOSClass:"inc",parkinStatus:"Less Phosphorylation",atp:"Decreases (Impaired)",atpClass:"dec",atpSlider:[-2],uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],ptpSlider:[1],rosSlider:[4],alphaSyn:"Increases",alphaSynClass:"inc",calcium:"Increases",calciumClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",oxygen:"Decreases",oxygenClass:"dec",fissionFusion:"Altered",fissionFusionClass:"alter",apoptosis:"Increases",apoptosisClass:"inc"});break;case-2:t.setState({memPotSlider:e,pink1:[-2],parkin:[-1],dJ1:[-2],trap1:[-2],mPP:[1],rOS:"Increases",rOSClass:"inc",parkinStatus:"Less Phosphorylation",atp:"Decreases by 60%",atpClass:"dec",atpSlider:[-1],uPSlider:[1],ptpSlider:[1],rosSlider:[4],apopSlider:[1],dopaNSlider:[-1],calciumSlider:[1],oxygenSlider:[-1],alphaSynSlider:[1],alphaSyn:"Increases",alphaSynClass:"inc",calcium:"Increases",calciumClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",oxygen:"Decreases by 60%",oxygenClass:"dec",fissionFusion:"Altered",fissionFusionClass:"alter",apoptosis:"Increases",apoptosisClass:"inc"});break;case-1:t.setState({memPotSlider:e,pink1:[-1],parkin:[-1],dJ1:[-2],trap1:[-2],rOS:"Increases",rOSClass:"inc",mPP:[1],parkinStatus:"Less Phosphorylation",atp:"Decreases by 42%",atpClass:"dec",atpSlider:[-1],uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1],alphaSyn:"Increases",alphaSynClass:"inc",calcium:"Increases",calciumClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",oxygen:"Decreases",oxygenClass:"dec",apoptosis:"Increases",apoptosisClass:"inc"});break;case 0:t.setState({memPotSlider:e});break;case 1:t.setState({memPotSlider:e,rOS:"Increases",rOSClass:"inc",rosSlider:[4]});break;default:t.setState({memPotSlider:e})}},t.onAtpSliderChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-2:t.setState({atpSlider:e,pink1:[-2],parkin:[-2],memPotSlider:[-2],dJ1:[-2],mPP:[1],htrA2:[-1],htrA2Status:"Less Phosphorylation",membranePotential:"Decreases by 50%",membranePotentialClass:"dec",oxygen:"Decreases by 60%",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",calcium:"Increases",calciumClass:"inc",h2O2:"Increases",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",alphaSyn:"Increases",alphaSynClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1]});break;case-1:t.setState({atpSlider:e,memPotSlider:[-1],pink1:[-1],parkin:[-1],dJ1:[-2],mPP:[1],htrA2:[-1],htrA2Status:"Less Phosphorylation",membranePotential:"Decreases by 44%",membranePotentialClass:"dec",oxygen:"Decreases",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",calcium:"Increases",calciumClass:"inc",h2O2:"Increases by 100%",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",alphaSyn:"Increases",alphaSynClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1]});break;default:t.setState({atpSlider:e})}},t.onAlphaSChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-1:t.setState({alphaSynSlider:e,dopamine:[-1],dopamineStatus:"Reduced release",mPP:[0],mppStatus:"Resistant"});break;case 1:t.setState({alphaSynSlider:e,pink1:[-1],parkin:[-1],trap1:[-1],htrA2:[-1],dopamine:[-1],dopamineStatus:"Reduced by 70%",calcium:"Increases",calciumClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",oxygen:"Decreases",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",h2O2:"Increases",h2O2Class:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1],memPotSlider:[-2],h2O2Slider:[1],fissionFusionSlider:[1]});break;default:t.setState({alphaSynSlider:e})}},t.onCalciumSliderChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case 1:t.setState({calciumSlider:e,pink1:[-1],dJ1:[-1],mPP:[1],dopamine:[-2],alphaSynSlider:[1],atpSlider:[-1],membranePotential:"Decreases",membranePotentialClass:"dec",oxygen:"Decreases",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",h2O2:"Increases",h2O2Class:"inc",dopaN:"Decreases",dopaNClass:"dec",atp:"Decreases",atpClass:"dec",dopaNSlider:[-1],oxygenSlider:[-1],rosSlider:[4],memPotSlider:[-2],h2O2Slider:[1],ptpSlider:[1]});break;default:t.setState({calciumSlider:e})}},t.onDopaNChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-1:t.setState({dopaNSlider:e,parkin:[-2],uchl1:[-2],htrA2:[-1],mPP:[1],memPotSlider:[-2],membranePotential:"Decreases",atp:"Decreases",atpClass:"dec",atpSlider:[-2],alphaSynClass:"inc",alphaSyn:"Increased Aggregation",alphaSynSlider:[1],rosSlider:[3],rOS:"Increases",rOSClass:"inc",upClass:"inc",up:"Increases",uPSlider:[1],fissionFusionClass:"alter",fissionFusion:"Altered",fissionFusionSlider:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1]});break;default:t.setState({dopaNSlider:e})}},t.onH2O2SliderChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case 1:t.setState({h2O2Slider:e,dJ1:[-2],dJ1Status:"(When H2O2 increased by 100%)",dopamine:[-2],mPP:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1],membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-2],rOS:"Increases",rOSClass:"inc",rosSlider:[4],dopaN:"Decreases",dopaNClass:"dec",dopaNSlider:[-1],uchl1:[-1],parkin:[-1],alphaSyn:"Increases",alphaSynSlider:[1],alphaSynClass:"dec",apoptosisClass:"inc",apoptosis:"Increases",apopSlider:[1]});break;default:t.setState({h2O2Slider:e})}},t.onOxygenSliderChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case-1:t.setState({oxygenSlider:e,pink1:[-2],membranePotential:"Decreases",membranePotentialClass:"dec",rOS:"Increases",rOSClass:"inc",apoptosisClass:"inc",apoptosis:"Increases",calcium:"Increases",calciumClass:"inc",issionFusionClass:"alter",fissionFusion:"Altered",atp:"Decreases",atpClass:"dec",apopSlider:[1],atpSlider:[-2],calciumSlider:[1],rosSlider:[4],memPotSlider:[-2],fissionFusionSlider:[1]});break;default:t.setState({oxygenSlider:e})}},t.onUPSliderChange=function(e,a){switch(!a&&t.resetAll(),t.setState({isResetAllDisabled:!1}),e[0]){case 1:t.setState({uPSlider:e,parkin:[-1],uchl1:[-2],htrA2:[-1],membranePotential:"Decreases",membranePotentialClass:"dec",rOS:"Increases",rOSClass:"inc",apoptosisClass:"inc",apoptosis:"Increases",calcium:"Increases",calciumClass:"inc",fissionFusionClass:"alter",fissionFusion:"Altered",atp:"Decreases",atpClass:"dec",dopaN:"Decreases",dopaNClass:"dec",apopSlider:[1],dopaNSlider:[-1],calciumSlider:[1],rosSlider:[4],memPotSlider:[-2],fissionFusionSlider:[1],atpSlider:[-2]});break;default:t.setState({uPSlider:e})}},t.onFissionFusionChange=function(e,a){switch(!a&&t.resetAll(),e[0]){case 1:t.setState({fissionFusionSlider:e,parkin:[-1],pink1:[-2],membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-2],rOS:"Increases",rOSClass:"inc",rosSlider:[3],apoptosisClass:"inc",apoptosis:"Increases",apopSlider:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1],oxygen:"Decreases",oxygenClass:"dec",oxygenSlider:[-1],atp:"Decreases",atpClass:"dec",atpSlider:[-2],dopaN:"Decreases",dopaNSlider:[-1],dopaNClass:"dec",upClass:"inc",up:"Increases",uPSlider:[1]});break;default:t.setState({fissionFusionSlider:e})}},t.onPTPChange=function(e,a){switch(!a&&t.resetAll(),e[0]){case 1:t.setState({ptpSlider:e,membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-2],rOS:"Increases",rOSClass:"inc",rosSlider:[3],apoptosisClass:"inc",apoptosis:"Increases",apopSlider:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1],atp:"Decreases",atpClass:"dec"});break;default:t.setState({ptpSlider:e})}},t.onC1Change=function(e,a){switch(!a&&t.resetAll(),e[0]){case-6:t.setState({c1Slider:e,dJ1:[-2],pink1:[-2],parkin:[-2],mPP:[1],mppStatus:"Inhibition for non-synaptic mitochondria"});break;case-5:t.setState({c1Slider:e,parkin:[-2],pink1:[-2]});break;case-4:t.setState({c1Slider:e,pink1:[-2]});break;case-3:t.setState({c1Slider:e,c1:"41% inhibition is found in frontal cortex of a PD patient"});break;case-2:t.setState({c1Slider:e,c1:"36% inhibition is found in Substantia Nigra of a PD patient"});break;case-1:t.setState({c1Slider:e,c1:"25% inhibition is found in Platelet of a PD patient",mPP:[1],mppStatus:"Inhibition for synaptic mitochondria"});break;default:t.setState({c1Slider:e})}},t.resetAll=function(){t.setState(Object(r.a)({},w))},t.state=Object(r.a)({},w),t}return Object(o.a)(s,[{key:"render",value:function(e){var a=this.state,s=a.dJ1,t=a.mPP,l=a.htrA2,i=a.trap1,r=a.uchl1,c=a.pink1,o=a.parkin,m=a.dopamine,p=a.c1Slider,d=a.uPSlider,S=a.rosSlider,u=a.atpSlider,C=a.ptpSlider,h=a.h2O2Slider,g=a.apopSlider,b=a.dopaNSlider,y=a.memPotSlider,P=a.oxygenSlider,N=a.calciumSlider,f=a.alphaSynSlider,E=a.fissionFusionSlider,I=a.mppStatus,k=a.dJ1Status,v=a.parkinStatus,O=a.htrA2Status,D=a.dopamineStatus,A=a.c1,x=a.up,F=a.atp,w=a.ptp,R=a.rOS,J=a.h2O2,H=a.dopaN,L=a.oxygen,M=a.calcium,T=a.alphaSyn,U=a.apoptosis,j=a.mtIntegrity,W=a.fissionFusion,z=a.membranePotential,B=a.isResetAllDisabled,K=a.c1Class,$=a.upClass,q=a.ptpClass,G=a.atpClass,Q=a.rOSClass,X=a.h2O2Class,Y=a.dopaNClass,Z=a.oxygenClass,_=a.calciumClass,ee=a.alphaSynClass,se=a.apoptosisClass,te=a.mtIntegrityClass,ne=a.fissionFusionClass,ie=a.membranePotentialClass;return n.a.createElement("div",{className:"app-container clear"},n.a.createElement(V,{dJ1:s,mPP:t,htrA2:l,trap1:i,uchl1:r,pink1:c,parkin:o,dopamine:m,dJ1Status:k,mppStatus:I,htrA2Status:O,parkinStatus:v,dopamineStatus:D,onDJ1Change:this.onDJ1Change,onDopChange:this.onDopChange,onMPPChange:this.onMPPChange,onPink1Change:this.onPink1Change,onTrap1Change:this.onTrap1Change,onHtrA2Change:this.onHtrA2Change,onUCHL1Change:this.onUCHL1Change,onParkinChange:this.onParkinChange}),n.a.createElement(ae,{up:x,atp:F,ptp:w,rOS:R,h2O2:J,dopaN:H,oxygen:L,calcium:M,alphaSyn:T,uPSlider:d,rosSlider:S,apoptosis:U,atpSlider:u,apopSlider:g,mtIntegrity:j,ptpClass:q,dopaNSlider:b,ptpSlider:C,memPotSlider:y,calciumSlider:N,fissionFusion:W,fissionFusionSlider:E,alphaSynSlider:f,h2O2Slider:h,oxygenSlider:P,membranePotential:z,onPTPChange:this.onPTPChange,onRosChange:this.onRosChange,onDopaNChange:this.onDopaNChange,onMemPotChange:this.onMemPotChange,onAlphaSChange:this.onAlphaSChange,onUPSliderChange:this.onUPSliderChange,onAtpSliderChange:this.onAtpSliderChange,onApopSliderChange:this.onApopSliderChange,onH2O2SliderChange:this.onH2O2SliderChange,onOxygenSliderChange:this.onOxygenSliderChange,onCalciumSliderChange:this.onCalciumSliderChange,onFissionFusionChange:this.onFissionFusionChange,upClass:$,atpClass:G,rOSClass:Q,h2O2Class:X,dopaNClass:Y,oxygenClass:Z,calciumClass:_,alphaSynClass:ee,apoptosisClass:se,mtIntegrityClass:te,fissionFusionClass:ne,membranePotentialClass:ie}),n.a.createElement("div",{className:"c1"},n.a.createElement(le,{onReset:this.resetAll,name:"Complex-1 Activity",className:K,status:A,value:p,isResetAllDisabled:B,onChange:this.onC1Change})))}}]),s}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,a,s){e.exports=s(172)}},[[99,1,2]]]);
//# sourceMappingURL=main.d3c24627.chunk.js.map