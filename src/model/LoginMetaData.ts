export class LoginMetaData{
    username:string;
    password:string;

    constructor(username ?:string, password ?:string){
        this.username = username == undefined ? "" : username;
        this.password = password == undefined ? "" : password;
    }
}