var LTITINYMCEPANEL=function(){LTITINYMCEPANEL.superclass.constructor.apply(this,arguments)};Y.extend(LTITINYMCEPANEL,Y.Base,{contextid:0,init:function(e){return""===e.insertbtnid||""===e.ltilaunchurl||""===e.objecttagheight||""===e.objecttagid||""===e.previewiframeid?void alert("Some parameters were not initialized."):(this.load_lti_content(e.ltilaunchurl,e.objecttagid,e.objecttagheight),Y.one("#"+e.insertbtnid).set("disabled",!0),Y.one("#closeltipanel").on("click",this.user_selected_video_callback,this,e.insertbtnid,e.objecttagid,e.previewiframeid,e.objecttagheight),void(null!==Y.one("#page-footer")&&Y.one("#page-footer").setStyle("display","none")))},load_lti_content:function(e,t,i){0===this.contextid&&(this.contextid=Y.one("#lti_launch_context_id").get("value"));var n='<iframe id="lti_view_element" height="'+i+'px" width="100%" src="'+e+"&amp;contextid="+this.contextid+'"></iframe>';Y.one("#"+t).setContent(n)},user_selected_video_callback:function(e,t,i,n,a){Y.one("#"+t).setStyle("display","inline"),Y.one("#"+t).set("disabled",!1),Y.one("#"+i).setContent("");var l=Y.Node.create("<center></center>"),o=Y.Node.create("<iframe></iframe>");o.setAttribute("width",Y.one("#width").get("value")+"px"),o.setAttribute("height",a+"px"),o.setAttribute("src",Y.one("#video_preview_frame").getAttribute("src")),l.append(o),Y.one("#"+n).append(l)}},{NAME:"moodle-local_kaltura-ltitinymcepanel",ATTRS:{insertbtnid:{value:""},ltilaunchurl:{value:""},objecttagheight:{value:""},objecttagid:{value:""},previewiframeid:{value:""}}}),M.local_kaltura=M.local_kaltura||{},M.local_kaltura.init=function(e){return new LTITINYMCEPANEL(e)};