(this["webpackJsonpnow-scrobbling-lyrics"]=this["webpackJsonpnow-scrobbling-lyrics"]||[]).push([[0],{10:function(t,e,r){t.exports=r(18)},15:function(t,e,r){},16:function(t,e,r){},18:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),s=r(7),i=r.n(s),c=r(1),l=r(2),o=r(5),u=r(4),p=r(3),h=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"onClickUpdateInterface",value:function(t){this.props.setUpdateLyricsState(!0)}},{key:"render",value:function(){var t=this,e=this.props.username.length>0?"User: "+this.props.username:" ";return n.a.createElement("div",{className:"userinput"},n.a.createElement(m,{handleSubmit:this.props.handleSubmit}),n.a.createElement("h2",null,e),n.a.createElement(y,{onClick:function(){return t.onClickUpdateInterface(t.props.username)}}))}}]),r}(a.Component),m=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(t){var a;return Object(c.a)(this,r),(a=e.call(this,t)).handleChange=function(t){a.setState({userinput:t.target.value})},a.onFormSubmit=function(t){t.preventDefault(),a.state.userinput.length>0&&(a.props.handleSubmit(a.state.userinput),a.setState(a.initialState))},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.initialState={userinput:""},a.state=a.initialState,a}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",name:"username",id:"username",value:this.state.userinput,onChange:this.handleChange}),n.a.createElement("button",{type:"submit"},"Submit"))}}]),r}(a.Component);function y(t){return n.a.createElement("button",{onClick:t.onClick},"Update LastFM History")}var d,f=h,k=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Scrobbling Lyrics"),n.a.createElement("button",{id:"toggleHistory",onClick:this.props.toggleTrackHistory},"History"))}}]),r}(a.Component),b=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"onClickSetLyrics",value:function(t,e){this.props.setLyrics(t),this.props.setUpdateLyricsState(e)}},{key:"renderTrack",value:function(t){var e=this,r=this.props.trackHistory.recenttracks.track[t];return 0===t?n.a.createElement(v,{key:t,trackNumber:t,trackinfo:r,onClick:function(){return e.onClickSetLyrics(r,!0)}}):n.a.createElement(v,{key:t,trackNumber:t,trackinfo:r,onClick:function(){return e.onClickSetLyrics(r,!1)}})}},{key:"render",value:function(){var t="trackHistory";if(this.props.hideTrackHistory&&(t+=" mobile-hide"),this.props.trackHistory&&this.props.trackHistory.recenttracks&&this.props.trackHistory.recenttracks.track.length>0){d=this.props.trackHistory.recenttracks.track.length;for(var e=[],r=0;r<d;r++)e.push(this.renderTrack(r));return n.a.createElement("div",{className:t},e)}return n.a.createElement("div",{className:t})}}]),r}(a.Component),v=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t;return t=this.props.trackinfo.image[1]?n.a.createElement(g,{image:this.props.trackinfo.image[1]["#text"]}):n.a.createElement(g,{image:""}),this.props.trackNumber===d?n.a.createElement("div",{className:"track track"+this.props.trackNumber,id:"last-track",onClick:this.props.onClick},t,n.a.createElement("div",{className:"track-details"},n.a.createElement(S,{title:this.props.trackinfo.name}),n.a.createElement(E,{artist:this.props.trackinfo.artist["#text"]}))):n.a.createElement("div",{className:"track track"+this.props.trackNumber,onClick:this.props.onClick},t,n.a.createElement("div",{className:"track-details"},n.a.createElement(S,{title:this.props.trackinfo.name}),n.a.createElement(E,{artist:this.props.trackinfo.artist["#text"]})))}}]),r}(a.Component);function g(t){var e=t.image.length>0?t.image:"https://lastfm.freetls.fastly.net/i/u/64s/4128a6eb29f94943c9d206c08e625904.webp";return n.a.createElement("img",{src:e,alt:"track art"})}function S(t){return n.a.createElement("span",null,t.title)}function E(t){return n.a.createElement("span",null,t.artist)}var j=b,O=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(t){var a;return Object(c.a)(this,r),(a=e.call(this,t)).lyricDiv=n.a.createRef(),a}return Object(l.a)(r,[{key:"componentDidUpdate",value:function(t){this.props&&this.props.lyrics.lyrics!==t.lyrics.lyrics&&(this.lyricDiv.current.scrollTop=0)}},{key:"render",value:function(){var t=n.a.createElement("p",null);return this.props.lyrics&&this.props.lyrics.lyrics?t=n.a.createElement("p",null,this.props.lyrics.lyrics):this.props.lyrics&&this.props.lyrics.error&&(t=n.a.createElement("p",null,this.props.lyrics.error)),n.a.createElement("div",{className:"lyrics-pane",ref:this.lyricDiv},t)}}]),r}(a.Component),L=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t;if(0!==this.props.selectedSong.art.length){var e=this.props.selectedSong.art.length>0?this.props.selectedSong.art:"https://lastfm.freetls.fastly.net/i/u/64s/4128a6eb29f94943c9d206c08e625904.webp";t=n.a.createElement("img",{src:e,alt:"track art"})}return n.a.createElement("div",{className:"current-track"},t,n.a.createElement("div",null,n.a.createElement("h2",null,this.props.selectedSong.track),n.a.createElement("h2",null,this.props.selectedSong.artist)))}}]),r}(a.Component),C=r(9);var H=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(t){var a;return Object(c.a)(this,r),(a=e.call(this,t)).state={username:"",lastFmHistory:[],lyrics:[],fetchedTracks:[],updateLyrics:!0,mostRecentScrobbleId:"",selectedSong:{artist:"",track:"",art:""},hideTrackHistory:!0},a.updateInterface=a.updateInterface.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.setLyrics=a.setLyrics.bind(Object(o.a)(a)),a.setUpdateLyricsState=a.setUpdateLyricsState.bind(Object(o.a)(a)),a.toggleTrackHistory=a.toggleTrackHistory.bind(Object(o.a)(a)),a.interval=null,a.gettingLyrics=!1,a}return Object(l.a)(r,[{key:"handleSubmit",value:function(t){var e=this;this.setState({username:t}),this.updateInterface(t),this.clearInterval(),this.interval=setInterval((function(r){return e.updateInterface(t)}),6e4)}},{key:"setUpdateLyricsState",value:function(t){var e=this;this.setState({updateLyrics:t},(function(){e.updateInterface(e.state.username)}))}},{key:"updateInterface",value:function(t){var e=this;(function(t){return new Promise((function(e,r){fetch("/getlastfm/"+t).then((function(t){e(t.json())}))}))})(t).then((function(t){t.recenttracks?(e.updateLyricsPane(t),e.setState({lastFmHistory:t})):e.setState({username:"No User Found"})}))}},{key:"updateLyricsPane",value:function(t){if(this.state.updateLyrics)if(t.recenttracks.track.length>0){var e=t.recenttracks.track[0].mbid;if(e!==this.state.mostRecentScrobble||" "===e){var r=t.recenttracks.track[0];this.setLyrics(r),this.setState({mostRecentScrobble:e})}}else this.setState({lyrics:{error:"No Tracks Found"}})}},{key:"setLyrics",value:function(t){var e,r,a=this;if(!this.gettingLyrics){this.gettingLyrics=!0;var n=this.state.fetchedTracks.find((function(e){return e.trackTitle===t.name&&e.artist===t.artist["#text"]}));n?(this.gettingLyrics=!1,this.setState({selectedSong:{artist:n.artist,track:n.trackTitle,art:n.trackImage}}),this.setState({lyrics:{lyrics:n.lyrics}})):(e=t.artist["#text"],r=t.name,new Promise((function(t,a){fetch("/getlyrics/"+e+"/"+r).then((function(e){t(e.json())}))}))).then((function(e){if(e.error){var r=t.name.substring(0,t.name.lastIndexOf(" "));if(r.length>0){var n=t;n.name=r,a.gettingLyrics=!1,a.setLyrics(n)}else a.gettingLyrics=!1,a.setState({lyrics:{error:"No Lyrics Found"}}),a.setState({selectedSong:{artist:"",track:"",art:""}})}else if(a.gettingLyrics=!1,""===e.lyrics)a.setState({lyrics:{error:"Unable to process request. \n Please try again Shortly. \n If you continue to see this message then lyrics may not be avaiable for this song"}});else{var s=t.image[2]?t.image[2]["#text"]:"";a.state.fetchedTracks.push({artist:t.artist["#text"],trackTitle:t.name,lyrics:e.lyrics,trackImage:s}),a.setState({selectedSong:{artist:t.artist["#text"],track:t.name,art:s}}),a.setState({lyrics:e})}}))}}},{key:"toggleTrackHistory",value:function(){this.setState({hideTrackHistory:!this.state.hideTrackHistory})}},{key:"clearInterval",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.interval&&(clearInterval(this.interval),this.interval=null)}))},{key:"render",value:function(){var t=this.state.username,e=this.state.lastFmHistory,r=this.state.lyrics,a=this.state.selectedSong,s=this.state.hideTrackHistory,i=n.a.createElement(O,{lyrics:r});return this.gettingLyrics&&(i=n.a.createElement("div",{className:"spinner-container"},n.a.createElement(C.a,{id:"loading-spinner",animation:"border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))),n.a.createElement("div",{className:"appContainer"},n.a.createElement(k,{toggleTrackHistory:this.toggleTrackHistory}),n.a.createElement(j,{hideTrackHistory:s,trackHistory:e,setLyrics:this.setLyrics,setUpdateLyricsState:this.setUpdateLyricsState}),n.a.createElement("div",{className:"top-display"},n.a.createElement(f,{handleSubmit:this.handleSubmit,username:t,updateInterface:this.updateInterface,setUpdateLyricsState:this.setUpdateLyricsState}),n.a.createElement(L,{selectedSong:a})),i)}}]),r}(a.Component);r(15),r(16),r(17);i.a.render(n.a.createElement(H,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d484ea61.chunk.js.map