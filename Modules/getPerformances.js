import AsyncStorage from '@react-native-async-storage/async-storage';
import parsePerformances from "./parsePerformances";

/**
 * Get performance data from local storage
 * @param {String} filterVenue - optional name of venue to show performances for
 * @returns {Promise} - resolves to Array of performances
 */
export async function getPerformances(filterVenue = false) {
    try {
        let localPerformancesData = await AsyncStorage.getItem('@performancesData');
        localPerformancesData =  parsePerformances(localPerformancesData, filterVenue);
        // only show performances that haven't yet finished
        const now = Date.now();
        localPerformancesData = localPerformancesData.filter(performance => Date.parse(performance.End) > now);
        return localPerformancesData;
    }
    catch (e) {
        return [];
    }
}