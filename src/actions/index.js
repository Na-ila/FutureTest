const bigData = () => {
    return {
        type: 'BIG_DATA',
        payload: 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
    }
};

const smallData = () => {
    return {
        type: 'SMALL_DATA',
        payload: 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
    }
};

const addData = (data) => {
    return {
        type: 'ADD_DATA',
        payload: data
    }
};

const loadingData = (bool) => {
    return {
        type: 'LOADING_DATA',
        payload: bool
    }
}

const addCardInfo = (data) => {
    return {
        type: 'ADD_CARD_INFO',
        payload: data
    }
}

const showCard = () => {
    return {
        type: 'SHOW_CARD'
    }
}

const error = (bool) => {
    return {
        type: 'ERROR',
        payload: bool
    }
};

const form = (bool) => {
    return {
        type: 'FORM',
        payload: bool
    }
};

const showButton = () => {
    return {
        type: 'BUTTON'
    }
};

const addNewUser = (newUser) => {
    return {
        type: 'ADD_NEW_USER',
        payload: newUser
    }
};

const addNewUserError = (bool) => {
    return {
        type: 'NEW_USER_ERROR',
        payload: bool
    }
};

export {
    bigData,
    smallData,
    addData,
    loadingData,
    addCardInfo,
    showCard,
    error,
    form,
    showButton,
    addNewUser,
    addNewUserError
};