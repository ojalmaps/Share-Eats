export async function getRecommended(setData) {
    const id = 1;
    return await fetch("/api/getrec", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).
    then((response) => {
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}


export async function getWishlist() {
    return await fetch("/api/getwishlist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).
    then((response) => {
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}