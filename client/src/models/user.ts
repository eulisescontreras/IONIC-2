export class User{

    private username: String;
    private password: String;
    private firstName: String;
    private lastName: String;
    private adress: String;
    private email: String;
    private phone: String;

    constructor() {}

    getUsername(){
        return this.username;
    }

    setUsername(username: String){
        this.username = username;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password: String){
        this.password = password;
    }

    getFirstName(){
        return this.firstName;
    }

    setFirstName(firstName: String){
        this.firstName = firstName;
    }
    
    getLastName(){
        return this.lastName;
    }

    setLastName(lastName: String){
        this.lastName = lastName;
    }

    getAdress(){
        return this.adress;
    }

    setAdress(adress: String){
        this.adress = adress;
    }
    
    getEmail(){
        return this.email;
    }

    setEmail(email: String){
        this.email = email;
    }

    getPhone(){
        return this.phone;
    }

    setPhone(phone: String){
        this.phone = phone;
    }
}