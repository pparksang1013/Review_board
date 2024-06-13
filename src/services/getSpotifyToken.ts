let client_id = import.meta.env.VITE_SPOTIFY_ID;
let client_secret = import.meta.env.VITE_SECRET_KEY;

export async function getToken() {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: client_id,
            client_secret: client_secret,
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    return await response.json();
}

// async function getArtistInfo(artistId) {
//     const accessToken = await getToken(); // 이전에 작성한 getToken() 함수 사용

//     const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
//         headers: {
//             Authorization: `Bearer ${accessToken.access_token}`,
//         },
//     });

//     return await response.json();
// }

// const artistId = "6HvZYsbFfjnjFrWF950C9d"; // Adele의 아티스트 ID
// const artistInfo = await getArtistInfo(artistId);

// async function Search() {
//     const accessToken = await getToken(); // 이전에 작성한 getToken() 함수 사용

//     const query = await encodeURIComponent("뉴진스");

//     return await response.json();
// }
