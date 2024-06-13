import { getToken } from "./getSpotifyToken";

export async function searchSpotify(artist: string) {
    const accessToken = await getToken();
    const encodeArtist = await encodeURIComponent(artist);

    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeArtist}&type=artist`, {
        headers: {
            Authorization: `Bearer ${accessToken.access_token}`,
        },
    }).then((res) => res.json());

    return response;
}
