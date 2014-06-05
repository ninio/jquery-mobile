test( "_find() can handle weird data-url attributes", function() {
	deepEqual(
		$.mobile.pagecontainer.prototype._find.call({
			_createFileUrl: $.mobile.pagecontainer.prototype._createFileUrl,
			_createDataUrl: $.mobile.pagecontainer.prototype._createDataUrl,
			_getInitialContent: $.mobile.pagecontainer.prototype._getInitialContent,
			element: $( "body" ),
			_getNs: $.mobile.pagecontainer.prototype._getNs,

		}, "Raison d'être.html" )[ 0 ],
		$( ".weird-data-url" )[ 0 ],
		"Correct element is retrieved when the file name is weird" );
});
