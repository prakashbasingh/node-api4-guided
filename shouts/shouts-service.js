module.exports = {
    isValid,
};

function isValid(shout) {

    // the body should have a message property
    const validationResult = {
        successful: true,
        message: ""
    }
    if (!shout.message){
        validationResult.message = "Please provide the message";
        }

    //the message property should be a string
    if(shout.message && typeof shout.message !== "string") {
        validationResult.message = "the message should be a string"
    }

    //the message property
    if(shout.message && isString(shout.message) && shout.message.length < 3) {
        validationResult.message = "The message should have at least 3 character long"
    }
    
    validationResult.successful = Boolean(validationResult.message === "")

    return validationResult;
};

function isString(message) {
    return Boolean(typeof message === "string")
}