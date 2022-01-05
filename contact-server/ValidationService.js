// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate form data
 * @param data
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateFormData(data) {
    // Check required fields
    let result = validateLib.checkRequired("titel", data.titel);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("description", data.description);
    if (result.isNotValid) { return result; }

    //Aufgabe: checkRequired für lastName, subject, description, phone hinzufügen
    //--Begin
    result = validateLib.checkRequired("autor", data.autor);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", data.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phone", data.phone);
    if (result.isNotValid) { return result; }
    //--End

    //check length
    result = validateLib.checkLength("titel",data.titel, 3, 50);
    if (result.isNotValid) { return result; }

    //Aufgabe: checkLength für lastName hinzufügen
    //--Begin
    result = validateLib.checkLength("description",data.description, 20, 1000);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("autor",data.autor, 3, 50);
    if (result.isNotValid) { return result; }
    //--End

    //check email syntax
    result = validateLib.checkEmail("email", data.email);
    if (result.isNotValid) { return result; }

    //check mobile syntax
    //Aufgabe: Validierungsregel der Mobilenummer anwenden
    //--Begin
    result = validateLib.checkMobileNumber("phone", data.phone);
    if (result.isNotValid) { return result; }
    //--End


    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateContact: validateFormData
}
