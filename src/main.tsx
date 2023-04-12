import ReactDOM from 'react-dom/client';
import App from './App';

function Demo({ count }) {
	return (
		<p>DEMO: { count }</p>
	);
}

function main() {
	const element = document.getElementById('root');
	const element2 = document.getElementById('demo');

	if (!element || !element2) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	const root2 = ReactDOM.createRoot(element2);

	root.render(<App />);

	let count = 0;

	root2.render(<Demo count={count} />);

	setInterval(() => {
		count += 1;
		root2.render(<Demo count={count} />);
	}, 1_000);
}

main();

// 전체를 업데이트 x, 필요한 부분만 업데이터 o
// state 바뀔 때 리랜더링, 자녀들도 리렌더링
// 상태 관리가 핵심
