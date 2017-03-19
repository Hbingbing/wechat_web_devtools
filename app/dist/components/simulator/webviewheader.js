'use strict';var _exports;function init(){require('path'),require('fs');const a=require('../../lib/react.js'),b=require('../../cssStr/cssStr.js'),c=require('../../stores/webviewStores.js');require('../../stores/windowStores.js');const d=require('../../actions/leftviewActions.js');require('../../weapp/utils/tools.js'),require('../../common/log/log.js'),require('../../weapp/utils/projectManager.js');const e='white',f=a.createClass({displayName:'WebviewHeader',getInitialState:function(){let{project:g,appJSON:h,pageJSON:i}=this.props,j='';return g&&(j=i.navigationBarTitleText||h.window.navigationBarTitleText||''),{title:j,webviewID:parseInt(this.props.webviewID),canGoBack:!1,showRightBtn:!0,showBarLoading:!1}},_upWebviewStatus:function(g,h){0!==g&&(h.canGoBack=!0),Object.assign(this.state,h),this.setState(this.state)},_cleanWebview:function(){this.state.webviewID,this.setState({title:'',showRightBtn:!0,showBarLoading:!1})},_setInterfaceFromPageFrame:function(g){let h=g.name;'setNavigationBarTitle'===h?this.setState({title:g.value}):'showNavigationBarLoading'===h?this.setState({showBarLoading:!0}):'hideNavigationBarLoading'===h&&this.setState({showBarLoading:!1})},_setInterfaceRes:function(g,h,i,j){i&&('hideOptionMenu'===h||'hideMenuItems'===h||'hideAllNonBaseMenuItem'===h?this.setState({showRightBtn:!1}):('showOptionMenu'==h||'showMenuItems'==h||'showAllNonBaseMenuItem'==h)&&this.setState({showRightBtn:!0}))},componentDidMount:function(){let g=this.state.webviewID;c.on(`SET_INTERFACE_RES_${g}`,this._setInterfaceRes),c.on(`UP_WEBVIEW_STATUS_${g}`,this._upWebviewStatus),c.on(`CLEAN_WEBVIEW_${g}`,this._cleanWebview),c.on(`SET_INTERFACT_FROMPAGEFRAME_${g}`,this._setInterfaceFromPageFrame)},componentWillUnmount:function(){let g=this.state.webviewID;c.removeListener(`CLEAN_WEBVIEW_${g}`,this._cleanWebview),c.removeListener(`SET_INTERFACE_RES_${g}`,this._setInterfaceRes),c.removeListener(`UP_WEBVIEW_STATUS_${g}`,this._upWebviewStatus),c.removeListener(`SET_INTERFACT_FROMPAGEFRAME_${g}`,this._setInterfaceFromPageFrame)},handleRightClick:function(){d.clickRightHeader(this.state.webviewID)},goBack:function(g){this.props.goBack()},closeLocation:function(){this.goBack(),this.props.closeLocation()},chooseLocation:function(){this.goBack(),this.props.chooseLocation()},render:function(){let{offset:g,hideBack:h,webviewID:i,project:j,isMap:k,goBack:l,showFooter:m,pageJSON:n,appJSON:o}=this.props;if(this.props.isMap)return a.createElement('div',{style:{width:g.width},className:'simulator-hd'},a.createElement('div',{onClick:this.closeLocation,className:'simulator-hd-back'},a.createElement('span',null,'\u53D6\u6D88')),a.createElement('h3',{className:'simulator-hd-title'},'\u4F4D\u7F6E'),a.createElement('div',{onClick:this.chooseLocation,className:'simulator-hd-option'},'\u53D1\u9001'));let p={width:g.width,backgroundColor:n.navigationBarBackgroundColor||o.window.navigationBarBackgroundColor||'#000000'},q=!h&&this.state.canGoBack?{}:b.visibilityHidden;0==i&&j&&(q=b.visibilityHidden);let r={};this.props.project||!this.state.showRightBtn&&(r=b.visibilityHidden);let s={color:n.navigationBarTextStyle||o.window.navigationBarTextStyle||e};'white'!==s.color&&'black'!==s.color&&(s.color='white');let t={borderColor:n.navigationBarTextStyle||o.window.navigationBarTextStyle||e};'white'!==t.color&&'black'!==t.color&&(t.color='white');let u='black'===s.color?'ui-icon-dots-black':'ui-icon-dots-white',v=this.state.title||n.navigationBarTitleText||o.window.navigationBarTitleText,w=this.props.showRecordWording?'  \u5F55\u97F3\u4E2D...':'';return a.createElement('div',{style:p,className:'simulator-hd'},a.createElement('div',{onClick:this.goBack,style:q,className:'simulator-hd-back'},a.createElement('i',{className:'simulator-hd-back-icon',style:t}),a.createElement('span',{style:s},'\u8FD4\u56DE')),a.createElement('h3',{className:'simulator-hd-title',style:s},this.state.showBarLoading?a.createElement('i',{className:'simulator-hd-title-loading'}):'',v,w),a.createElement('div',{style:r,onClick:m,className:'simulator-hd-option'},a.createElement('i',{className:u})))}});_exports=f}init(),module.exports=_exports;