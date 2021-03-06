// PhotoSwipe - http://www.photoswipe.com/
// Copyright (c) %%year%% by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: %%version%%

(function (window, Util) {
	
	Util.extend(Util, {
		
		DOM: {
				
			
			/*
			 * Function: resetTranslate
			 * Required for smoother transition on iOS
			 */
			resetTranslate: function(el){
				
				if (Util.browser.webkit){
					if (Util.browser.is3dSupported){
						$(el).css({ webkitTransform: 'translate3d(0px, 0px, 0px)'});
					}
					else{
						$(el).css({ webkitTransform: 'translate(0px, 0px)'});
					}
				}
				else {
					$(el).css({
						webkitTransform: 'translate(0px, 0px)',
						MozTransform: 'translate(0px, 0px)',
						transform: 'translate(0px, 0px)'
					});
				}
								
			},
		
		
			/*
			 * Function: createElement
			 */
			createElement: function(type, attributes, content){
				
				var retval = $('<' + type +'></' + type + '>');
				retval.attr(attributes);
				retval.append(content);
				
				return retval[0];
				
			},
			
			
			/*
			 * Function: appendChild
			 */
			appendChild: function(childEl, parentEl){
				
				$(parentEl).append(childEl);
				
			},
			
			
			/*
			 * Function: appendText
			 */
			appendText: function(text, parentEl){
				
				$(parentEl).text(text);
				
			},
			
			
			/*
			 * Function: appendToBody
			 */
			appendToBody: function(childEl){
				
				$('body').append(childEl);
				
			},
			
			
			/*
			 * Function: removeChild
			 */
			removeChild: function(childEl, parentEl){
				
				$(childEl).empty().remove();
				
			},
			
			
			
			/*
			 * Function: removeChildren
			 */
			removeChildren: function(parentEl){
				
				$(parentEl).empty();
			
			},
			
			
			
			/*
			 * Function: hasAttribute
			 */
			hasAttribute: function(el, attributeName){
				
				return Util.isNothing( $(el).attr(attributeName) );
			
			},
			
			
			/*
			 * Function: getAttribute
			 */
			getAttribute: function(el, attributeName){
				
				return $(el).attr(attributeName);
			
			},
			
			
			/*
			 * Function: el, attributeName
			 */
			setAttribute: function(el, attributeName, value){
				
				$(el).attr(attributeName, value);
				
			},
			
			
			/*
			 * Function: removeAttribute
			 */
			removeAttribute: function(el, attributeName){
				
				$(el).removeAttr(attributeName);
				
			},
			
			
			/*
			 * Function: addClass
			 */
			addClass: function(el, className){
				
				$(el).addClass(className);
				
			},
			
			
			/*
			 * Function: removeClass
			 */
			removeClass: function(el, className){
			
				$(el).removeClass(className);
				
			},
			
			
			/*
			 * Function: hasClass
			 */
			hasClass: function(el, className){
				
				$(el).hasClass(className);
				
			},
			
			
			/*
			 * Function: setStyle
			 */
			setStyle: function(el, style, value){
				
				if (Util.isObject(style)) {
					$(el).css(style);
				}
				else {
					$(el).css(style, value);
				}
				
			},
			
			
			/*
			 * Function: getStyle
			 */
			getStyle: function(el, styleName){
				
				return $(el).css(styleName);
				
			},
			
			
			/*
			 * Function: hide
			 */
			hide: function(el){
				
				$(el).hide();
			
			},
			
			
			/*
			 * Function: show
			 */
			show: function(el){
				
				$(el).show();
				
			},
			
			
			/*
			 * Function: width 
			 * Content width, exludes padding
			 */
			width: function(el, value){
				
				if (!Util.isNothing(value)){
					$(el).width(value);
				}
				
				return $(el).width();
				
			},
			
			
			/*
			 * Function: outerWidth
			 */
			outerWidth: function(el){
				
				return $(el).outerWidth();
			
			},
			
			
			/*
			 * Function: height 
			 * Content height, excludes padding
			 */
			height: function(el, value){
				
				if (!Util.isNothing(value)){
					$(el).height(value);
				}
				
				return $(el).height();
				
			},
			
			
			/*
			 * Function: outerHeight
			 */
			outerHeight: function(el){
				
				return $(el).outerHeight();
				
			},
			
			
			/*
			 * Function: documentWidth
			 */
			documentWidth: function(){
				
				return $(document.documentElement).width();
				
			},

			
			/*
			 * Function: documentHeight
			 */
			documentHeight: function(){
				
				return $(document.documentElement).height();
				
			},
			
			
			/*
			 * Function: bodyWidth
			 */
			bodyWidth: function(){
				
				return $(document.body).width();
			
			},
			
			
			/*
			 * Function: bodyHeight
			 */
			bodyHeight: function(){
				
				return $(document.body).height();
			
			},
			
			
			/*
			 * Function: windowWidth
			 */
			windowWidth: function(){
				//IE
				if(!window.innerWidth) {
					return $(window).width();
				}
				//w3c
				return window.innerWidth;
			},
			
			
			/*
			 * Function: windowHeight
			 */
			windowHeight: function(){
				//IE
				if(!window.innerHeight) {
					return $(window).height();
				}
				//w3c
				return window.innerHeight;
			},
			
			
			/*
			 * Function: windowScrollLeft
			 */
			windowScrollLeft: function(){
				//IE
				if(!window.pageXOffset) {
					return $(window).scrollLeft();
				}
				//w3c
				return window.pageXOffset;
			},
			
			
			/*
			 * Function: windowScrollTop
			 */
			windowScrollTop: function(){
				//IE
				if(!window.pageYOffset) {
					return $(window).scrollTop();
				}
				//w3c
				return window.pageYOffset;
			},
			
			
			
			/*
			 * Function: addEventListener
			 */
			addEventListener: function(el, type, listener){
				
				$(el).bind( type,  listener );
			
			},
			
			
			/*
			 * Function: removeEventListener
			 */
			removeEventListener: function(el, type, listener){
				
				$(el).unbind( type,  listener );
			
			},
			
			
			/*
			 * Function: getMousePosition
			 */
			getMousePosition: function(event){
				
				var retval = {
					x: event.pageX,
					y: event.pageY
				};
				
				return retval;
			},
			
			
			/*
			 * Function: getTouchEvent
			 */
			getTouchEvent: function(event){
				
				return event.originalEvent;
			
			}
			
		}
	
		
	});
	
	
})
(
	window,
	Code.PhotoSwipe.Util
);
