

//task

function takePhoto(callback) {
    console.log('taking photo');
    setTimeout(function() {
        callback(null, 'done');
    }, 4000);
}

module.exports = takePhoto;