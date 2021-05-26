/**
* 레이어 팝업 
*
*/
const layer = {
	/**
	* 팝업 호출 
	*
	* @param String url 팝업 URL
	* @param Integer width 팝업 너비
	* @param Integer height 팝업 높이 
	*  #layer_popup 
	*  #layer_dim -> 레이어 배경
	*/
	popup : function(url, width, height) {
		/** 없는 경우 추가 */
		if ($("#layer_dim").length == 0) {
			$("body").append("<div id='layer_dim'></div>");
		}
		
		if ($("#layer_popup").length == 0) {
			$("body").append("<div id='layer_popup'></div>");
		}
		
		$layerDim = $("#layer_dim");
		$layerPopup = $("#layer_popup");
		
		$layerDim.css({
			position: "fixed",
			width: "100%", 
			height: "100%",
			top: 0,
			left: 0,
			background : "rgba(0,0,0,0.7)",
			zIndex : 100,
		});
		
		const xpos = parseInt(($(window).width() - width) / 2);
		const ypos = parseInt(($(window).height() - height) / 2);
		$layerPopup.css({
			position: "fixed",
			width : width + "px",
			height : height + "px",
			left : xpos + "px",
			top : ypos + "px",
			background : "#ffffff",
			zIndex: 101,
		});
	},
	/**
	* 팝업 닫기 
	*
	*/
	close : function() {
		
	}
};