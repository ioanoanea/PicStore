import Validator from "./validator";

export default function validateUser(user){
    if (user.username === ""){
        return "Username cannot be null!";
    }
    if (
        user.email.length < 6 ||
        user.email.indexOf("@") === -1 ||
        user.email.indexOf(".") === -1 ||
        user.email.indexOf("@.") !== -1 ||
        user.email.indexOf(".@") !== -1
    ){
        return "Invalid email!";
    }
    if (user.password.length < 6) {
        return "Password to short!";
    }
    return Validator.SUCCESS;
}
