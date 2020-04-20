import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useGraphMode = (key, initialValue) => {
	const [ graphMode, setGraphMode ] = useLocalStorage(key, initialValue);

	useEffect(() => {
		if (graphMode) {
			const noGraph = document.getElementById('graph-container');
			noGraph.style.display = 'flex';
		} else {
			const isGraph = document.getElementById('graph-container');
			isGraph.style.display = 'none';
		}
	}, [graphMode])

	return [graphMode, setGraphMode];
}

export default useGraphMode;