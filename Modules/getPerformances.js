import AsyncStorage from '@react-native-async-storage/async-storage';
import parsePerformances from "./parsePerformances";

export async function getPerformances(filterVenue = false) {
    let localPerformancesData = await AsyncStorage.getItem('@performancesData');
    localPerformancesData =  parsePerformances(localPerformancesData, filterVenue);
    // only show performances that haven't yet finished
    const now = Date.now();
    localPerformancesData = localPerformancesData.filter(performance => Date.parse(performance.End) > now);
    return localPerformancesData;
}