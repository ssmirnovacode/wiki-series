const getItems = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const getItemById = async (url, id) => {
    const res = await fetch(`${url}/${id}`);
    return await res.json();
}

export {getItems, getItemById};