export function getCurrentLatitudeLongitude() {
    //Wrap getCurrentPosition to return a promise
    return new Promise((resolve, reject) => {
        const successCallback = function (position) { 
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        };
        const errorCallback = function (err) {
            reject(err);
        }
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    });
}