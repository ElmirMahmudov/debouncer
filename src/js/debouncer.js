const debouncer = (func, time) => {
	let timeoutFunc,
		startFunc = (args) => {
			timeoutFunc = setTimeout(() => {
				func.apply(this, args);
			}, time);
		};
	return () => {
		const arg = arguments;
		clearTimeout(timeoutFunc);
		startFunc(arg);
	}
}

module.exports = debouncer;