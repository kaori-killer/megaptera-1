import {useState} from 'react';

export default function App() {
	const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 1);
    }

	return (
        <div>
    		<p>Hello, World</p>
            <p>Count: {count}</p>
            <button type="button" onClick={handleClick}>
                클릭!
            </button>
        </div>
	);
}


// 하나의 노드로 나가라