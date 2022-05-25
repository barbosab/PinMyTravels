const VISITED_COUNTRIES_KEY = "VISITED";
const WANT_TO_VISIT_COUNTRIES_KEY = "WANT_TO_VISIT";

export function setVisitedCountries(visited: string[]) {
    localStorage.setItem(VISITED_COUNTRIES_KEY, visited.toString());
}

export function getVisitedCountries(): string[] {
    const visited = localStorage.getItem(VISITED_COUNTRIES_KEY);
    if(!visited) {
        return [];
    }
    return visited.split(',');
}

export function setWantToVisitCountries(wantToVisit: string[]) {
    localStorage.setItem(WANT_TO_VISIT_COUNTRIES_KEY, wantToVisit.toString());
}

export function getWantToVisitCountries(): string[] {
    const wantToVisit = localStorage.getItem(WANT_TO_VISIT_COUNTRIES_KEY);
    if(!wantToVisit) {
        return [];
    }
    return wantToVisit.split(',');
}