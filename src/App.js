import React, { useState } from "react";
import "./index.css";

export default function App() {
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

function Counter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const date = new Date();
	date.setDate(date.getDate() + count);

	return (
		<React.Fragment>
			<div className="p">
				<button className="m" onClick={() => setStep((s) => s - 1)}>
					-
				</button>
				<span>step: {step}</span>
				<button className="m" onClick={() => setStep((s) => s + 1)}>
					+
				</button>
			</div>
			<div className="p">
				<button className="m" onClick={() => setCount((c) => c - step)}>
					-
				</button>
				<span>Count: {count}</span>
				<button className="m" onClick={() => setCount((c) => c + step)}>
					+
				</button>
			</div>
			<p className="p">
				<span>
					{count === 0
						? "Today is "
						: count > 0
						? `${count} days from today is `
						: `${Math.abs(count)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>
		</React.Fragment>
	);
}
