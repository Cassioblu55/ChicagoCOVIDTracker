Module.register('ChicagoCOVIDTracker', {
	// Default module config.
	defaults: {
		text: 'Hello World!',
	},

	// Override dom generator.
	getDom: function () {
        Log.info('info');
        var wrapper = document.createElement('div');
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},
});
