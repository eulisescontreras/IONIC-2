export class User{
    private username: String;
    private password: String;

    constructor() {}
    
    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    setUsername(username: String){
        this.username = username;
    }

    setPassword(password: String){
        this.password = password;
    }
}