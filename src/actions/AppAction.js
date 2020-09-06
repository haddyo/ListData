



//disptached when we fetch items from database
export const fetchItems = payload => ({
    type: 'FETCH_ITEMS',
    payload
})

export const fetchItemsFailure = () => ({
    type: 'RESET_STATE'
})


//dispatched when all the items stored in redux store needs to be read
export const actionFetchList = () => async dispatch => {
    try {
        let chartData = []
        chartData = await fetch('https://run.mocky.io/v3/df3311b9-8bff-4498-984a-33e14d62dccc');
        chartData = await chartData.json();
        console.log(chartData);

        dispatch(fetchItems(chartData));
        return chartData;
    } catch (error) {
        dispatch(fetchItemsFailure(error))
        return error;
    }



}

