import { useState, useEffect } from 'react';
import { AppState } from 'react-native';

/**
 * Triggers callbacks when App state changes (background / inactive / active)
 * @param {Object} settings - callback  functions
 * @returns null
 */
export default function useAppState(settings) {
    const { onChange, onForeground, onBackground } = settings || {};
    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
        function handleAppStateChange(nextAppState) {
            if (nextAppState === 'active' && appState !== 'active') {
                isValidFunction(onForeground) && onForeground();
            } else if (appState === 'active' && nextAppState.match(/inactive|background/)) {
                isValidFunction(onBackground) && onBackground();
            }
            setAppState(nextAppState);
            isValidFunction(onChange) && onChange(nextAppState);
            }
        const appState = AppState.addEventListener('change', handleAppStateChange);

        // removing -> return appState.remove();
        return;
    }, [onChange, onForeground, onBackground, appState]);

    // settings validation
    function isValidFunction(func) {
        return func && typeof func === 'function';
        }
        return { appState };
}