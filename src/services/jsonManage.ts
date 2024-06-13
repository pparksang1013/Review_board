interface RawDataInterface {
    artist: string;
    song: string;
    nickname: string;
    password: string;
    review: string;
    rating: number;
}

interface ProcessDataInterface {
    id: string | undefined;
    rating: {
        total: number;
        score: number;
    };
    review: {
        nickname: string;
        password: string;
        contents: string;
    }[];
    img: string;
}

// API
import { searchSpotify } from "./searchSpotify";
import { getJson } from "./getJson";

export async function jsonManage(data: RawDataInterface) {
    let { artist } = data;
    const { nickname, password, review, rating } = data;

    const searchedArtist = await searchSpotify(artist);
    artist = searchedArtist.artists.items[0].name;

    if (!(await getJson(`http://localhost:3001/myApp/${artist}`))) {
        const processData: ProcessDataInterface = {
            id: artist,
            rating: {
                total: 1,
                score: Number(rating),
            },
            review: [
                {
                    nickname,
                    password,
                    contents: review,
                },
            ],
            img: searchedArtist.artists.items[0].images[0],
        };

        fetch(`http://localhost:3001/myApp`, {
            method: "POST",
            body: JSON.stringify(processData),
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
        }).then((res) => res.json());
    } else {
        const response = await getJson(`http://localhost:3001/myApp/${artist}`).then((res) => {
            res.rating.total++;
            res.rating.score += Number(rating);
            res.review.push({ nickname, password, contents: review });

            return res;
        });

        fetch(`http://localhost:3001/myApp/${artist}`, {
            method: "PUT",
            body: JSON.stringify(response),
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
        }).then((res) => res.json());
    }
}
