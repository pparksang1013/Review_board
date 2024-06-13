export const getJson = () => {
    fetch("http://localhost:3001/myApp")
        .then((res) => res.json())
        .then((res) => console.log(res));

    return;
};
