export const storeUserId = (userId) => {
    return {
        type: 'STORE_USERID',
        data: {
            userId: userId
        }
    };
};

export const storeExternalUserId = (externalUserId) => {
    return {
        type: 'STORE_EXT_USERID',
        data: {
            externalUserId: externalUserId
        }
    }
}

export const storeExperimentId = (experimentId) => {
    return {
        type: 'STORE_EXPERIMENTID',
        data: {
            experimentId: experimentId
        }
    }
}

export const releaseUserInfo = () => {
    return {
        type: 'RELEASE_USER_INFO'
    };
};