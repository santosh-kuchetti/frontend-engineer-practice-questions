export default function App() {
	/*
        when first render In your JSX code, you're calling throttleClick(handleClick, 2000) 
        and passing the result of this call to the onClick attribute of the button.
        This means that you're directly invoking throttleClick during the rendering phase, not when the button is clicked.
        Then the lastRan and timerId will be initialised. 

        The throttleClick function returns an anonymous function (a closure) which acts as 
        the event handler that will be attached to the button's onClick event.
        This returned function takes any number of arguments using the ...args syntax.
        It also captures the context (this) where it was called.
        Inside the Returned Function:

        It first checks if lastRan is falsy (initially, it will be). If true, 
        it immediately invokes the original fn (i.e., handleClick) with the captured context and arguments.
        It then updates lastRan to the current timestamp using Date.now().
        If lastRan is not falsy (meaning the function has been invoked before within the throttling period), it:

        Clears any existing timeout using clearTimeout(timerId) to prevent the function from being invoked too soon.
        Sets a new timeout using setTimeout that will call the fn after the remaining time of the throttling period has elapsed.
        Updates lastRan to the current timestamp, effectively resetting the throttling period.
    */

	const throttleClick = (fn, delay) => {
		let lastRan;
		let timerId;
		return function (...args) {
			let context = this;

			if (!lastRan) {
				fn.apply(context, args);
				lastRan = Date.now();
			} else {
				clearTimeout(timerId);
				timerId = setTimeout(() => {
					fn.apply(context, args);
					lastRan = Date.now();
				}, delay - (Date.now() - lastRan));
			}
		};
	};

	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<div className="App">
			<button onClick={throttleClick(handleClick, 2000)}>Click Me</button> // we
			are invoking throttleClick(handleClick, 2000) and passing the value to the
			click attribute of the button
		</div>
	);
}
