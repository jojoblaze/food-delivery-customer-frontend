
const API_URL = process.env.REACT_APP_API_URL
const MERCHANT_KEY = process.env.REACT_APP_MERCHANT_KEY


export const getShops = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/merchants`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (myJson) {
            // console.log(myJson);
            resolve(myJson);
        })
        .catch((reason) => {
            reject("REJECTED: " , reason)
        });
    });
}

export const getShop = async (merchantId) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/merchants/${merchantId}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (myJson) {
            // console.log(myJson);
            resolve(myJson);
        })
        .catch((reason) => {
            reject("REJECTED: " , reason)
        });
    });
}


export const getDishes = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/merchants/${MERCHANT_KEY}/menu`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (myJson) {
            // console.log(myJson);
            resolve(myJson);
        })
        .catch((reason) => {
            reject("REJECTED: " , reason)
        });
    });
}

export const getDish = async (dishId) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/merchants/${MERCHANT_KEY}/menu/dish/${dishId}`
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function (response) {
            // console.log(response)
            return response.json();
        })
        .then(function (myJson) {
            // console.log(myJson);
            resolve(myJson);
        })
        .catch((reason) => {
            reject(reason)
        });
    });
}

export const postDish = async (dish) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/merchants/${MERCHANT_KEY}/menu`
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(dish)
            }
        )
        .then(function (response) {
            // console.log(response)
            return response.json();        })
        .then(function (myJson) {
            // console.log(myJson);
            // resolve(myJson);
            resolve({ success: true, data: myJson })
        })
        .catch((reason) => {
            reject({ success: false, reason })
        });
    });
}

export const putDish = async (dish) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/merchants/${MERCHANT_KEY}/menu/${dish.id}`
            , {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(dish)
            }
        )
        .then(function (response) {
            console.log("RESPONSE UPDATE!", response)
            resolve(response.ok)
        })
        .catch((reason) => {
            reject(reason)
        });
    });
}

export const deleteDish = async (dishId) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/merchants/${MERCHANT_KEY}/menu/${dishId}`
            , {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function (response) {
            // console.log(response)
            resolve(response.ok)
        })
        .catch((reason) => {
            reject(reason)
        });
    });
}