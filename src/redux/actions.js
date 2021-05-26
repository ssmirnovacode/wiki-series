const loadItems = (items) => ({
    type: 'LOAD_ITEMS',
    payload: items
});

const setQuery = (query) => ({
    type: 'SET_QUERY',
    payload: query
})

export {loadItems, setQuery};