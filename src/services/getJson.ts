export async function getJson(url: string) {
    try {
        const response = await fetch(url).then((res) => res.json());
        return response;
    } catch {
        return false;
    }
}
