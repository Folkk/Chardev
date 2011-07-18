 /**
 * @author LeMartin
 */
var Listener = {
	/**
	 * @param {Element} node
	 * @param {string} event
	 * @param {Function} callback
	 * @param {Object} scope
	 * @param {Array} args
	 */
	add : function(node, event, callback, scope, args)
	{
		var scopedHandler = function( ev )
		{
			if ( args ) 
			{
				callback.apply(scope,args);
			}
			else 
			{
				callback.apply(scope,[ev]);
			}
		};
		
		if (document.addEventListener)  {
			node.addEventListener(event, scopedHandler, false);
		}
		else if (document.attachEvent) {
			node.attachEvent("on" + event, scopedHandler);
		}
	}
};
