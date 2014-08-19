$(document).ready(function () {

	$.localScroll({
		// target: '#content', // could be a selector or a jQuery object too.
		axis: 'y',
		duration:1000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});
});