module.exports = {
    isValid,
};

function isValid(shout) {

    // the body should have a message property
    if (!shout.message){
        return false
    }

    //the message property should be a string
    if(typeof shout.message !== "string") {
        return false;
    }

    //the message property
    if(shout.message.length < 3) {
       return false
    }
    

    return result
};