const debouncer = (func, time) => {
	let timeoutFunc,
		startFunc = function(args) {
			timeoutFunc = setTimeout(() => {
				func.apply(this, args);
			}, time);
		};
	return function() {
		const arg = arguments;
		clearTimeout(timeoutFunc);
		startFunc(arg);
	}
}

module.exports = debouncer;