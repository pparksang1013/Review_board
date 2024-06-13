export const postJson = (data: any) => {
    fetch("http://localhost:3001/myApp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    }).then((res) => res.json());
    return;
};
