



//disptached when we fetch items from database
export const fetchPostItems = payload => ({
    type: 'FETCH_POST_ITEMS',
    payload
})
export const setActivePost = payload => ({
    type: 'SET_ACTIVE_POST',
    payload
})
export const fetchCommentItems = payload => ({
    type: 'FETCH_COMMENT_ITEMS',
    payload
})
export const fetchProfileItems = payload => ({
    type: 'FETCH_PROFILE_ITEMS',
    payload
})
export const fetchItemsFailure = () => ({
    type: 'RESET_STATE'
})


//dispatched when all the items stored in redux store needs to be read
export const actionFetchPostList = () => async dispatch => {
    try {
        let postData = []
        postData = await fetch('https://my-json-server.typicode.com/haddyo/ListData/posts');
        postData = await postData.json();
        dispatch(fetchPostItems(postData));
        dispatch(setActivePost(postData[0].id));
        return postData;
    } catch (error) {
        dispatch(fetchItemsFailure(error))
        return error;
    }
}

export const actionSetActivePost = id => async dispatch => {
    dispatch(setActivePost(id));
}


export const actionFetchCommentList = () => async dispatch => {
    try {
        let commentsData = []
        commentsData = await fetch('https://my-json-server.typicode.com/haddyo/ListData/comments');
        commentsData = await commentsData.json();
        console.log(commentsData);

        dispatch(fetchCommentItems(commentsData));
        return commentsData;
    } catch (error) {
        dispatch(fetchItemsFailure(error))
        return error;
    }
}

export const actionFetchProfileList = userName => async dispatch => {
    try {
        let profileData = []
        profileData = await fetch(`https://my-json-server.typicode.com/haddyo/ListData/profile?userName=${userName}`);
        profileData = await profileData.json();
        console.log(profileData);

        dispatch(fetchProfileItems(profileData));
        return profileData;
    } catch (error) {
        dispatch(fetchItemsFailure(error))
        return error;
    }
}
