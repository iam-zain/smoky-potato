(this["webpackJsonpsmoky-potato"]=this["webpackJsonpsmoky-potato"]||[]).push([[0],{154:function(e,a,s){},155:function(e,a,s){"use strict";s.r(a);var n=s(0),t=s.n(n),l=s(8),i=s.n(l),r=(s(94),s(95),s(58)),c=s(75),o=s(76),m=s(87),p=s(85),d=(s(96),s(156)),S={"-2":"mutate","-1":"low",0:"normal",1:"high",2:"oe"},u={"-2":"Mutate","-1":"Low",0:"Normal"},C={0:"Normal",1:"25%",2:"40%",3:"100%",4:"110%",5:"180%",6:"250%"},h={0:"",1:"",2:"",3:"",4:"",5:"",6:""},g={"-2":"-60%","-1":"-42%",0:"Normal"},P={"-1":"Very Low",0:"Normal",1:"Increased Aggregation"},y={0:"Normal",1:"High intracellular"},b={"-1":"Decreased",0:"Normal"},N={"-1":"",0:""},f={0:"Normal",1:"Increased"},E={0:"",1:""},I={"-2":"","-1":"",0:""},k={"-3":"-60%","-2":"-50%","-1":"-45%",0:"Normal",1:"26%"},v={"-3":"","-2":"","-1":"",0:"",1:""},O={"-2":"Oxidized","-1":"Low",0:"Normal",1:"High"},x={0:"Absent",1:"Present"},D={0:"Normal",1:"Pathological"},A={"-6":"-70%","-5":"-63%","-4":"-50%","-3":"-41%","-2":"-36%","-1":"-25%",0:"Normal"},F={"-6":"","-5":"","-4":"","-3":"","-2":"","-1":"",0:""},w={dJ1:0,mPP:0,htrA2:0,trap1:0,uchl1:0,pink1:0,parkin:0,dopamine:0,c1Slider:0,h2O2Slider:0,atpSlider:0,rosSlider:0,apopSlider:0,memPotSlider:0,alphaSynSlider:0,ptpSlider:0,calciumSlider:0,dopaNSlider:0,oxygenSlider:0,uPSlider:0,fissionFusionSlider:0,dJ1Status:"",dopamineStatus:"",mppStatus:"",htrA2Status:"",parkinStatus:"",c1:"",ptp:"",up:"",atp:"",rOS:"",h2O2:"",dopaN:"",oxygen:"",calcium:"",alphaSyn:"",apoptosis:"",mtIntegrity:"",fissionFusion:"",membranePotential:"",c1Class:"",upClass:"",ptpClass:"",atpClass:"",rOSClass:"",h2O2Class:"",dopaNClass:"",oxygenClass:"",calciumClass:"",alphaSynClass:"",apoptosisClass:"",mtIntegrityClass:"",fissionFusionClass:"",membranePotentialClass:""},J=function(e){var a=e.value,s=e.onChange,n=e.name,l=e.status;return t.a.createElement("div",{className:"box p4 ".concat(S[a])},t.a.createElement("div",{className:"factor-name p5"},n),t.a.createElement("div",{className:"status"},l),t.a.createElement(d.a,{range:!0,max:0,min:-2,value:[a],included:!0,onChange:s,marks:u,tooltipVisible:!1}))},H=function(e){var a=e.value,s=e.onChange,n=e.name,l=e.status;return t.a.createElement("div",{className:"box p2 ".concat(n," ").concat(S[a])},t.a.createElement("span",{className:"factor-name "},n),t.a.createElement("div",{className:"status"},l),t.a.createElement(d.a,{range:!0,max:1,min:0,included:!0,value:[a],onChange:s,marks:x,tooltipVisible:!1}))},V=function(e){var a=e.value,s=e.onChange,n=e.name,l=e.status;return t.a.createElement("div",{className:"box p4 oxidized ".concat(S[a])},t.a.createElement("div",{className:"factor-name p5"},n),t.a.createElement("div",{className:"status"},l),t.a.createElement(d.a,{range:!0,max:1,min:-2,value:[a],included:!0,onChange:s,tooltipVisible:!1,marks:O}))},L=(s(154),function(e){var a=e.dJ1,s=e.mPP,n=e.htrA2,l=e.trap1,i=e.uchl1,r=e.pink1,c=e.parkin,o=e.dopamine,m=e.mppStatus,p=e.onDJ1Change,d=e.onDopChange,S=e.htrA2Status,u=e.dJ1Status,C=e.onMPPChange,h=e.parkinStatus,g=e.onPink1Change,P=e.onTrap1Change,y=e.onHtrA2Change,b=e.onUCHL1Change,N=e.dopamineStatus,f=e.onParkinChange;return t.a.createElement("div",{className:"col-1 box-container"},t.a.createElement(J,{name:"PINK1",onChange:g,value:r}),t.a.createElement(J,{name:"PARKIN",onChange:f,value:c,status:h}),t.a.createElement(J,{name:"DJ1",onChange:p,value:a,status:u}),t.a.createElement(J,{name:"TRAP1",onChange:P,value:l}),t.a.createElement(J,{name:"HTRA2",onChange:y,value:n,status:S}),t.a.createElement(J,{name:"UCHL1",onChange:b,value:i}),t.a.createElement(V,{name:"Dopamine",onChange:d,value:o,status:N}),t.a.createElement(H,{name:"MPP\u207a",onChange:C,value:s,status:m}))}),M=function(e){var a=e.name,s=e.status,n=e.className;return t.a.createElement("div",{className:"effects-box ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s))},T=s(158),R=s(159),U=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:20},t.a.createElement(d.a,{range:!0,min:-3,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:v})),t.a.createElement(R.a,{span:4},t.a.createElement("span",{className:"slider-label"},!s&&k[l]))))},j=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:20},t.a.createElement(d.a,{range:!0,min:-2,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:I})),t.a.createElement(R.a,{span:4},t.a.createElement("span",{className:"slider-label"},!s&&g[l]))))},W=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider ros ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:20},t.a.createElement(d.a,{range:!0,min:0,max:6,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:h})),t.a.createElement(R.a,{span:4},t.a.createElement("span",{className:"slider-label"},!s&&C[l]))))},z=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:16},t.a.createElement(d.a,{range:!0,min:-1,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:I})),t.a.createElement(R.a,{span:8},t.a.createElement("span",{className:"slider-label"},!s&&P[l]))))},B=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider calcium ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:14},t.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),t.a.createElement(R.a,{span:10},t.a.createElement("span",{className:"slider-label"},!s&&y[l]))))},K=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider dopaN ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:14},t.a.createElement(d.a,{range:!0,min:-1,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:N})),t.a.createElement(R.a,{span:10},t.a.createElement("span",{className:"slider-label"},!s&&b[l]))))},$=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:16},t.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),t.a.createElement(R.a,{span:7,offset:1},t.a.createElement("span",{className:"slider-label"},!s&&f[l]))))},q=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider h2o2 ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:14},t.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),t.a.createElement(R.a,{span:10},t.a.createElement("span",{className:"slider-label"},!s&&f[l]))))},G=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider dopaN ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:14},t.a.createElement(d.a,{range:!0,min:-1,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:N})),t.a.createElement(R.a,{span:10},t.a.createElement("span",{className:"slider-label"},!s&&b[l]))))},Q=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:16},t.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),t.a.createElement(R.a,{span:7,offset:1},t.a.createElement("span",{className:"slider-label"},!s&&f[l]))))},X=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider mem-pot ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:16},t.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),t.a.createElement(R.a,{span:7,offset:1},t.a.createElement("span",{className:"slider-label"},!s&&f[l]))))},Y=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"effects-box with-slider ptp ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("span",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:16},t.a.createElement(d.a,{range:!0,min:0,max:1,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:E})),t.a.createElement(R.a,{span:7,offset:1},t.a.createElement("span",{className:"slider-label"},!s&&D[l]))))},Z=function(e){var a=e.up,s=e.atp,n=e.rOS,l=e.h2O2,i=e.ptp,r=e.dopaN,c=e.oxygen,o=e.calcium,m=e.alphaSyn,p=e.uPSlider,d=e.rosSlider,S=e.apoptosis,u=e.apopSlider,C=e.dopaNSlider,h=e.mtIntegrity,g=e.memPotSlider,P=e.h2O2Slider,y=e.fissionFusionSlider,b=e.oxygenSlider,N=e.ptpSlider,f=e.calciumSlider,E=e.fissionFusion,I=e.alphaSynSlider,k=e.membranePotential,v=e.onH2O2SliderChange,O=e.onUPSliderChange,x=e.onDopaNChange,D=e.onPTPChange,A=e.onApopSliderChange,F=e.onCalciumSliderChange,w=e.onOxygenSliderChange,J=e.onMemPotChange,H=e.onRosChange,V=e.atpSlider,L=e.onAlphaSChange,T=e.onAtpSliderChange,R=e.onFissionFusionChange,Z=e.upClass,_=e.atpClass,ee=e.rOSClass,ae=e.h2O2Class,se=e.dopaNClass,ne=e.oxygenClass,te=e.calciumClass,le=e.alphaSynClass,ie=e.apoptosisClass,re=e.ptpClass,ce=e.mtIntegrityClass,oe=e.fissionFusionClass,me=e.membranePotentialClass;return t.a.createElement("div",{className:"col-2 box-container",style:{float:"right"}},t.a.createElement(U,{name:"\u0394\u03a8m",status:k,value:g,className:me,onChange:J}),t.a.createElement(j,{name:"ATP",status:s,className:_,value:V,onChange:T}),t.a.createElement(W,{name:"ROS",status:n,value:d,className:ee,onChange:H}),t.a.createElement(z,{name:"\u03b1-Synuclein",status:m,value:I,onChange:L,className:le}),t.a.createElement(B,{name:"Calcium",status:o,className:te,onChange:F,value:f}),t.a.createElement($,{name:"Apoptosis",status:S,value:u,onChange:A,className:ie}),t.a.createElement(K,{name:"Dopaminergic Neuron",status:r,className:se,value:C,onChange:x}),t.a.createElement(q,{name:"H\u2082O\u2082",status:l,className:ae,value:P,onChange:v}),t.a.createElement(G,{name:"Oxygen Consumption",status:c,className:ne,value:b,onChange:w}),t.a.createElement(Q,{name:"Unfolded Protein",onChange:O,status:a,className:Z,value:p}),t.a.createElement(Y,{name:"PTP Opening",onChange:D,status:i,className:re,value:N}),t.a.createElement(X,{name:"Fission-Fusion",onChange:R,status:E,className:oe,value:y}),t.a.createElement(M,{name:"Mitochondrial Integrity",status:h,className:ce}))},_=function(e){var a=e.name,s=e.status,n=e.className,l=e.value,i=e.onChange;return t.a.createElement("div",{className:"c1 box with-slider effects-box ".concat(a," ").concat(n)},t.a.createElement("div",{className:"name"},a),t.a.createElement("div",{className:"status"},s),t.a.createElement(T.a,{gutter:16},t.a.createElement(R.a,{span:20},t.a.createElement(d.a,{range:!0,min:-6,max:0,tooltipVisible:!1,value:[l],included:!0,onChange:i,marks:F})),t.a.createElement(R.a,{span:4},t.a.createElement("span",{className:"slider-label"},A[l]))))},ee=function(e){Object(p.a)(s,e);var a=Object(m.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=a.call(this,e)).onPink1Change=function(e,a){switch(!a&&n.resetAll(),e[0]){case-2:n.setState({pink1:e,atpSlider:[-2],atp:"Decreases by 60%",atpClass:"dec",oxygen:"Decreases by 60%",oxygenClass:"dec",membranePotential:"Decreases by 50%",membranePotentialClass:"dec",apoptosis:"Increases",apoptosisClass:"inc",mtIntegrity:"Decreases",mtIntegrityClass:"dec",rOS:"Increases",rOSClass:"inc",calcium:"Efflux decreases",calciumClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",apopSlider:[1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],memPotSlider:[-2],fissionFusionSlider:[1],rosSlider:[4],c1Slider:[-4]});break;case-1:n.setState({pink1:e,atp:"Decreases",atpClass:"dec",oxygen:"Decreases",oxygenClass:"dec",apoptosis:"Increases",apoptosisClass:"inc",mtIntegrity:"Decreases",mtIntegrityClass:"dec",rOS:"Increases by 180%",rOSClass:"inc",calcium:"Efflux decreases",calciumClass:"dec",membranePotential:"Decreases",membranePotentialClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",C1:"Decreases",c1Class:"dec",c1Slider:[-3],rosSlider:[4],atpSlider:[-1],apopSlider:[1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],memPotSlider:[-1]});break;default:n.setState({pink1:e})}},n.onDJ1Change=function(e,a){switch(!a&&n.resetAll(),e[0]){case-2:n.setState({dJ1:e,atp:"Decreases by 42%",atpClass:"dec",h2O2:"Increases by 100%",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",membranePotential:"Decreases by 44%",membranePotentialClass:"dec",calcium:"Increases",calciumClass:"inc",rOS:"Increases",rOSClass:"inc",atpSlider:[-1],apopSlider:[1],calciumSlider:[1],memPotSlider:[-1],rosSlider:[2],c1Slider:[-6],h2O2Slider:[1]});break;case-1:n.setState({dJ1:e,atp:"Decreases",atpClass:"dec",h2O2:"Increases",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",calcium:"Increases",calciumClass:"inc",rOS:"Increases",rOSClass:"inc",C1:"Decreases",c1Class:"dec",apopSlider:[1],calciumSlider:[1],memPotSlider:[-1],rosSlider:[4],c1Slider:[-3]});break;default:n.setState({dJ1:e})}},n.onDopChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case-2:n.setState({dopamine:e,calcium:"Increased permeability",calciumClass:"inc",h2O2:"Increases",h2O2Class:"inc",calciumSlider:[1],h2O2Slider:[1]});break;case-1:n.setState({dopamine:e,alphaSyn:"Increases (If Dopamine is below 30%)",alphaSynClass:"inc",alphaSynSlider:[1]});break;case 1:n.setState({dopamine:e,rOS:"Increases",rOSClass:"inc",rosSlider:[3]});break;default:n.setState({dopamine:e})}},n.onHtrA2Change=function(e,a){switch(!a&&n.resetAll(),e[0]){case-2:case-1:n.setState({htrA2:e,alphaSyn:"Decreases",alphaSynClass:"dec",rOS:"Increases",rOSClass:"inc",apoptosis:"Increases",apoptosisClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",apopSlider:[1],alphaSynSlider:[1],rosSlider:[2],h2O2Slider:[1],uPSlider:[1],dopaNSlider:[-1]});break;default:n.setState({htrA2:e})}},n.onParkinChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case-2:n.setState({parkin:e,atp:"Decreases",atpClass:"dec",dopaN:"Decreases by 20%",dopaNClass:"dec",up:"Increases",upClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",rOS:"Increases",rOSClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",apopSlider:[1],atpSlider:[-1],memPotSlider:[-1],alphaSynSlider:[1],rosSlider:[3],uPSlider:[1],dopaNSlider:[-1],fissionFusionSlider:[1],c1Slider:[-5]});break;case-1:n.setState({membranePotential:"Decreases",membranePotentialClass:"dec",atp:"Decreases",atpClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",up:"Increases",upClass:"inc",rOS:"Increases",rOSClass:"inc",alphaSynSlider:[1],memPotSlider:[-1],atpSlider:[-1],rosSlider:[2],uPSlider:[1],fissionFusionSlider:[1],parkin:e});break;default:n.setState({parkin:e})}},n.onTrap1Change=function(e,a){switch(!a&&n.resetAll(),e[0]){case-2:n.setState({trap1:e,membranePotential:"Decreases by 45%",membranePotentialClass:"dec",alphaSyn:"Increases",alphaSynClass:"inc",rOS:"Increases",rOSClass:"inc",rosSlider:[4],alphaSynSlider:[1],memPotSlider:[-1]});break;case-1:n.setState({trap1:e,rOS:"Increases by 100%",rOSClass:"inc",alphaSyn:"Increases",alphaSynClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",rosSlider:[3],alphaSynSlider:[1],memPotSlider:[-1]});break;default:n.setState({trap1:e})}},n.onUCHL1Change=function(e,a){switch(!a&&n.resetAll(),e[0]){case-1:n.setState({uchl1:e,alphaSyn:"Increases",alphaSynClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",alphaSynSlider:[1],dopaNSlider:[-1],uPSlider:[1]});break;default:n.setState({uchl1:e})}},n.onMPPChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case 1:n.setState({mPP:e,atp:"Decreases (Impaired)",atpClass:"dec",atpSlider:[-1],rOS:"Increases by 40%",rOSClass:"inc",rosSlider:[4],membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-1],calcium:"Increases (Intra-cellular)",calciumClass:"inc",calciumSlider:[1],h2O2:"Increases",h2O2Class:"inc",h2O2Slider:[1],dopaN:"Decreases by 25%",dopaNClass:"dec",dopaNSlider:[-1],apoptosis:"Increases by 60%",apoptosisClass:"inc",apopSlider:[1]}),n.onDopChange([1],!0);break;default:n.setState({mPP:e})}},n.onRosChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case 0:n.resetAll();break;case 1:n.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 50%"});break;case 2:n.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 60%"});break;case 3:n.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 95%",trap1:[-1]});break;case 4:n.setState({mPP:[1],rosSlider:e,mppStatus:"Increases by 100%",trap1:[-1]});break;case 5:n.setState({mPP:[1],dJ1:[-1],pink1:[-1],uchl1:[-1],htrA2:[-1],trap1:[-1],parkin:[-1],dopamine:[1],rosSlider:e,up:"Increases",uPSlider:[1],atp:"Decreases",atpSlider:[-1],h2O2:"increases",h2O2Slider:[1],dopaN:"Decreases",dopaNSlider:[-1],oxygen:"Decreases",oxygenSlider:[-1],alphaSyn:"Increases",alphaSynSlider:[1],apoptosis:"Increases",apopSlider:[1],fissionFusion:"Alter",fissionFusionSlider:[1],mtIntegrity:"Decreases",calcium:"Decrease in efflux",calciumSlider:[1],membranePotential:"Decreases",memPotSlider:[-1],ptpSlider:[1],upClass:"inc",atpClass:"dec",h2O2Class:"inc",dopaNClass:"dec",oxygenClass:"dec",calciumClass:"dec",alphaSynClass:"inc",apoptosisClass:"inc",mtIntegrityClass:"dec",fissionFusionClass:"dec",membranePotentialClass:"dec",mppStatus:"Increases by 200%"});break;case 6:n.setState({mPP:[1],dJ1:[-1],pink1:[-1],htrA2:[-1],uchl1:[-1],trap1:[-1],parkin:[-1],dopamine:[1],rosSlider:e,up:"Increases",atp:"Decreases",h2O2:"increases",dopaN:"Decreases",oxygen:"Decreases",alphaSyn:"Increases",apoptosis:"Increases",fissionFusion:"Alter",mtIntegrity:"Decreases",calcium:"Decrease in efflux",membranePotential:"Decreases",upClass:"inc",atpClass:"dec",atpSlider:[-1],uPSlider:[1],h2O2Slider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],memPotSlider:[-1],ptpSlider:[1],fissionFusionSlider:[1],h2O2Class:"inc",dopaNClass:"dec",oxygenClass:"dec",calciumClass:"dec",alphaSynClass:"inc",apoptosisClass:"inc",mtIntegrityClass:"dec",fissionFusionClass:"dec",membranePotentialClass:"dec",mppStatus:"Increases by 500%"});break;default:n.setState({rosSlider:e})}},n.onMemPotChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case-3:n.setState({memPotSlider:e,pink1:[-2],dJ1:[-2],trap1:[-2],parkin:[-1],mPP:[1],rOS:"Increases",rOSClass:"inc",parkinStatus:"Less Phosphorylation",atp:"Decreases (Impaired)",atpClass:"dec",atpSlider:[-2],uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],ptpSlider:[1],rosSlider:[4],alphaSyn:"Increases",alphaSynClass:"inc",calcium:"Increases",calciumClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",oxygen:"Decreases",oxygenClass:"dec",fissionFusion:"Altered",fissionFusionClass:"alter",apoptosis:"Increases",apoptosisClass:"inc"});break;case-2:n.setState({memPotSlider:e,pink1:[-2],parkin:[-1],dJ1:[-2],trap1:[-2],mPP:[1],rOS:"Increases",rOSClass:"inc",parkinStatus:"Less Phosphorylation",atp:"Decreases by 60%",atpClass:"dec",atpSlider:[-1],uPSlider:[1],ptpSlider:[1],rosSlider:[4],apopSlider:[1],dopaNSlider:[-1],calciumSlider:[1],oxygenSlider:[-1],alphaSynSlider:[1],alphaSyn:"Increases",alphaSynClass:"inc",calcium:"Increases",calciumClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",oxygen:"Decreases by 60%",oxygenClass:"dec",fissionFusion:"Altered",fissionFusionClass:"alter",apoptosis:"Increases",apoptosisClass:"inc"});break;case-1:n.setState({memPotSlider:e,pink1:[-1],parkin:[-1],dJ1:[-2],trap1:[-2],rOS:"Increases",rOSClass:"inc",mPP:[1],parkinStatus:"Less Phosphorylation",atp:"Decreases by 42%",atpClass:"dec",atpSlider:[-1],uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1],alphaSyn:"Increases",alphaSynClass:"inc",calcium:"Increases",calciumClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",oxygen:"Decreases",oxygenClass:"dec",apoptosis:"Increases",apoptosisClass:"inc"});break;case 0:n.setState({memPotSlider:e});break;case 1:n.setState({memPotSlider:e,rOS:"Increases",rOSClass:"inc",rosSlider:[4]});break;default:n.setState({memPotSlider:e})}},n.onAtpSliderChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case-2:n.setState({atpSlider:e,pink1:[-2],parkin:[-2],memPotSlider:[-2],dJ1:[-2],mPP:[1],htrA2:[-1],htrA2Status:"Less Phosphorylation",membranePotential:"Decreases by 50%",membranePotentialClass:"dec",oxygen:"Decreases by 60%",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",calcium:"Increases",calciumClass:"inc",h2O2:"Increases",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",alphaSyn:"Increases",alphaSynClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1]});break;case-1:n.setState({atpSlider:e,memPotSlider:[-1],pink1:[-1],parkin:[-1],dJ1:[-2],mPP:[1],htrA2:[-1],htrA2Status:"Less Phosphorylation",membranePotential:"Decreases by 44%",membranePotentialClass:"dec",oxygen:"Decreases",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",calcium:"Increases",calciumClass:"inc",h2O2:"Increases by 100%",h2O2Class:"inc",apoptosis:"Increases",apoptosisClass:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",alphaSyn:"Increases",alphaSynClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],alphaSynSlider:[1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1]});break;default:n.setState({atpSlider:e})}},n.onAlphaSChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case-1:n.setState({alphaSynSlider:e,dopamine:[-1],dopamineStatus:"Reduced release",mPP:[0],mppStatus:"Resistant"});break;case 1:n.setState({alphaSynSlider:e,pink1:[-1],parkin:[-1],trap1:[-1],htrA2:[-1],dopamine:[-1],dopamineStatus:"Reduced by 70%",calcium:"Increases",calciumClass:"inc",membranePotential:"Decreases",membranePotentialClass:"dec",oxygen:"Decreases",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",h2O2:"Increases",h2O2Class:"inc",dopaN:"Decreases",dopaNClass:"dec",up:"Increases",upClass:"inc",fissionFusion:"Altered",fissionFusionClass:"alter",uPSlider:[1],apopSlider:[1],dopaNSlider:[-1],oxygenSlider:[-1],calciumSlider:[1],rosSlider:[4],ptpSlider:[1],memPotSlider:[-2],h2O2Slider:[1],fissionFusionSlider:[1]});break;default:n.setState({alphaSynSlider:e})}},n.onCalciumSliderChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case 1:n.setState({calciumSlider:e,pink1:[-1],dJ1:[-1],mPP:[1],dopamine:[-2],alphaSynSlider:[1],atpSlider:[-1],membranePotential:"Decreases",membranePotentialClass:"dec",oxygen:"Decreases",oxygenClass:"dec",rOS:"Increases",rOSClass:"inc",h2O2:"Increases",h2O2Class:"inc",dopaN:"Decreases",dopaNClass:"dec",atp:"Decreases",atpClass:"dec",dopaNSlider:[-1],oxygenSlider:[-1],rosSlider:[4],memPotSlider:[-2],h2O2Slider:[1],ptpSlider:[1]});break;default:n.setState({calciumSlider:e})}},n.onDopaNChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case-1:n.setState({dopaNSlider:e,parkin:[-2],uchl1:[-2],htrA2:[-1],mPP:[1],memPotSlider:[-2],membranePotential:"Decreases",atp:"Decreases",atpClass:"dec",atpSlider:[-2],alphaSynClass:"inc",alphaSyn:"Increased Aggregation",alphaSynSlider:[1],rosSlider:[3],rOS:"Increases",rOSClass:"inc",upClass:"inc",up:"Increases",uPSlider:[1],fissionFusionClass:"alter",fissionFusion:"Altered",fissionFusionSlider:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1]});break;default:n.setState({dopaNSlider:e})}},n.onH2O2SliderChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case 1:n.setState({h2O2Slider:e,dJ1:[-2],dJ1Status:"(When H2O2 increased by 100%)",dopamine:[-2],mPP:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1],membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-2],rOS:"Increases",rOSClass:"inc",rosSlider:[4],dopaN:"Decreases",dopaNClass:"dec",dopaNSlider:[-1],uchl1:[-1],parkin:[-1],alphaSyn:"Increases",alphaSynSlider:[1],alphaSynClass:"dec",apoptosisClass:"inc",apoptosis:"Increases",apopSlider:[1]});break;default:n.setState({h2O2Slider:e})}},n.onOxygenSliderChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case-1:n.setState({oxygenSlider:e,pink1:[-2],membranePotential:"Decreases",membranePotentialClass:"dec",rOS:"Increases",rOSClass:"inc",apoptosisClass:"inc",apoptosis:"Increases",calcium:"Increases",calciumClass:"inc",issionFusionClass:"alter",fissionFusion:"Altered",atp:"Decreases",atpClass:"dec",apopSlider:[1],atpSlider:[-2],calciumSlider:[1],rosSlider:[4],memPotSlider:[-2],fissionFusionSlider:[1]});break;default:n.setState({oxygenSlider:e})}},n.onUPSliderChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case 1:n.setState({uPSlider:e,parkin:[-1],uchl1:[-2],htrA2:[-1],membranePotential:"Decreases",membranePotentialClass:"dec",rOS:"Increases",rOSClass:"inc",apoptosisClass:"inc",apoptosis:"Increases",calcium:"Increases",calciumClass:"inc",fissionFusionClass:"alter",fissionFusion:"Altered",atp:"Decreases",atpClass:"dec",dopaN:"Decreases",dopaNClass:"dec",apopSlider:[1],dopaNSlider:[-1],calciumSlider:[1],rosSlider:[4],memPotSlider:[-2],fissionFusionSlider:[1],atpSlider:[-2]});break;default:n.setState({uPSlider:e})}},n.onFissionFusionChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case 1:n.setState({fissionFusionSlider:e,parkin:[-1],pink1:[-2],membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-2],rOS:"Increases",rOSClass:"inc",rosSlider:[3],apoptosisClass:"inc",apoptosis:"Increases",apopSlider:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1],oxygen:"Decreases",oxygenClass:"dec",oxygenSlider:[-1],atp:"Decreases",atpClass:"dec",atpSlider:[-2],dopaN:"Decreases",dopaNSlider:[-1],dopaNClass:"dec",upClass:"inc",up:"Increases",uPSlider:[1]});break;default:n.setState({fissionFusionSlider:e})}},n.onPTPChange=function(e,a){switch(!a&&n.resetAll(),e[0]){case 1:n.setState({ptpSlider:e,membranePotential:"Decreases",membranePotentialClass:"dec",memPotSlider:[-2],rOS:"Increases",rOSClass:"inc",rosSlider:[3],apoptosisClass:"inc",apoptosis:"Increases",apopSlider:[1],calcium:"Increases",calciumClass:"inc",calciumSlider:[1],atp:"Decreases",atpClass:"dec"});break;default:n.setState({ptpSlider:e})}},n.onC1Change=function(e,a){switch(!a&&n.resetAll(),e[0]){case-6:n.setState({c1Slider:e,dJ1:[-2],pink1:[-2],parkin:[-2],mPP:[1],mppStatus:"Inhibition for non-synaptic mitochondria"});break;case-5:n.setState({c1Slider:e,parkin:[-2],pink1:[-2]});break;case-4:n.setState({c1Slider:e,pink1:[-2]});break;case-3:n.setState({c1Slider:e,c1:"41% inhibition is found in frontal cortex of a PD patient"});break;case-2:n.setState({c1Slider:e,c1:"36% inhibition is found in Substantia Nigra of a PD patient"});break;case-1:n.setState({c1Slider:e,c1:"25% inhibition is found in Platelet of a PD patient",mPP:[1],mppStatus:"Inhibition for synaptic mitochondria"});break;default:n.setState({c1Slider:e})}},n.resetAll=function(){n.setState(Object(r.a)({},w))},n.state=Object(r.a)({},w),n}return Object(o.a)(s,[{key:"render",value:function(e){var a=this.state,s=a.dJ1,n=a.mPP,l=a.htrA2,i=a.trap1,r=a.uchl1,c=a.pink1,o=a.parkin,m=a.dopamine,p=a.c1Slider,d=a.uPSlider,S=a.rosSlider,u=a.atpSlider,C=a.ptpSlider,h=a.h2O2Slider,g=a.apopSlider,P=a.dopaNSlider,y=a.memPotSlider,b=a.oxygenSlider,N=a.calciumSlider,f=a.alphaSynSlider,E=a.fissionFusionSlider,I=a.mppStatus,k=a.dJ1Status,v=a.parkinStatus,O=a.htrA2Status,x=a.dopamineStatus,D=a.c1,A=a.up,F=a.atp,w=a.ptp,J=a.rOS,H=a.h2O2,V=a.dopaN,M=a.oxygen,T=a.calcium,R=a.alphaSyn,U=a.apoptosis,j=a.mtIntegrity,W=a.fissionFusion,z=a.membranePotential,B=a.c1Class,K=a.upClass,$=a.ptpClass,q=a.atpClass,G=a.rOSClass,Q=a.h2O2Class,X=a.dopaNClass,Y=a.oxygenClass,ee=a.calciumClass,ae=a.alphaSynClass,se=a.apoptosisClass,ne=a.mtIntegrityClass,te=a.fissionFusionClass,le=a.membranePotentialClass;return t.a.createElement("div",{className:"app-container clear"},t.a.createElement(L,{dJ1:s,mPP:n,htrA2:l,trap1:i,uchl1:r,pink1:c,parkin:o,dopamine:m,dJ1Status:k,mppStatus:I,htrA2Status:O,parkinStatus:v,dopamineStatus:x,onDJ1Change:this.onDJ1Change,onDopChange:this.onDopChange,onMPPChange:this.onMPPChange,onPink1Change:this.onPink1Change,onTrap1Change:this.onTrap1Change,onHtrA2Change:this.onHtrA2Change,onUCHL1Change:this.onUCHL1Change,onParkinChange:this.onParkinChange}),t.a.createElement(Z,{up:A,atp:F,ptp:w,rOS:J,h2O2:H,dopaN:V,oxygen:M,calcium:T,alphaSyn:R,uPSlider:d,rosSlider:S,apoptosis:U,atpSlider:u,apopSlider:g,mtIntegrity:j,ptpClass:$,dopaNSlider:P,ptpSlider:C,memPotSlider:y,calciumSlider:N,fissionFusion:W,fissionFusionSlider:E,alphaSynSlider:f,h2O2Slider:h,oxygenSlider:b,membranePotential:z,onPTPChange:this.onPTPChange,onRosChange:this.onRosChange,onDopaNChange:this.onDopaNChange,onMemPotChange:this.onMemPotChange,onAlphaSChange:this.onAlphaSChange,onUPSliderChange:this.onUPSliderChange,onAtpSliderChange:this.onAtpSliderChange,onApopSliderChange:this.onApopSliderChange,onH2O2SliderChange:this.onH2O2SliderChange,onOxygenSliderChange:this.onOxygenSliderChange,onCalciumSliderChange:this.onCalciumSliderChange,onFissionFusionChange:this.onFissionFusionChange,upClass:K,atpClass:q,rOSClass:G,h2O2Class:Q,dopaNClass:X,oxygenClass:Y,calciumClass:ee,alphaSynClass:ae,apoptosisClass:se,mtIntegrityClass:ne,fissionFusionClass:te,membranePotentialClass:le}),t.a.createElement(_,{name:"Complex-1 Activity",className:B,status:D,value:p,onChange:this.onC1Change}))}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a,s){e.exports=s(155)},95:function(e,a,s){},96:function(e,a,s){}},[[89,1,2]]]);
//# sourceMappingURL=main.ff9f76de.chunk.js.map