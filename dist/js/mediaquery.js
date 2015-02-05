/*! Formstone v0.1.0 [mediaquery.js] 2015-02-05 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){b=b||{};for(var c in s)s.hasOwnProperty(c)&&(k[c]=b[c]?a.merge(b[c],k[c]):k[c]);k=a.extend(k,b),k.minWidth.sort(o.sortDesc),k.maxWidth.sort(o.sortAsc),k.minHeight.sort(o.sortDesc),k.maxHeight.sort(o.sortAsc);for(var d in s)if(s.hasOwnProperty(d)){r[d]={};for(var e in k[d])if(k[d].hasOwnProperty(e)){var g=window.matchMedia("("+s[d]+": "+(1/0===k[d][e]?1e5:k[d][e])+k.unit+")");g.addListener(f),r[d][k[d][e]]=g}}f()}function d(a,b,c){var d=n.matchMedia(b),e=h(d.media);q[e]||(q[e]={mq:d,active:!0,enter:{},leave:{}},q[e].mq.addListener(g));for(var f in c)c.hasOwnProperty(f)&&q[e].hasOwnProperty(f)&&(q[e][f][a]=c[f]);g(q[e].mq)}function e(){p={unit:k.unit};for(var a in s)if(s.hasOwnProperty(a))for(var b in r[a])if(r[a].hasOwnProperty(b)&&r[a][b].matches){var c="Infinity"===b?1/0:parseInt(b,10);a.indexOf("max")>-1?(!p[a]||c<p[a])&&(p[a]=c):(!p[a]||c>p[a])&&(p[a]=c)}}function f(){e(),m.trigger(l.mqChange,[p])}function g(a){var b=h(a.media),c=q[b],d=a.matches?l.enter:l.leave;if(c&&c.active||!c.active&&a.matches){for(var e in c[d])c[d].hasOwnProperty(e)&&c[d][e].apply(c.mq);c.active=!0}}function h(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").trim()}function i(){return p}var j=b.Plugin("mediaquery",{utilities:{_initialize:c,state:i,bind:d},events:{mqChange:"mqchange"}}),k={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},l=a.extend(j.events,{enter:"enter",leave:"leave"}),m=b.$window,n=m[0],o=j.functions,p=null,q=[],r={},s={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);