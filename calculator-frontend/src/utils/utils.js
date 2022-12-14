export const validateInput = (input) => {
    var message = "";


    try {
        let result = eval(input);
        return result;
    } catch (e) {
        console.error(e.message);
        return "Invalid airthmentic expression";
    }



};