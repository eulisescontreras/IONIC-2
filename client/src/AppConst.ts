export class AppConst{

    /*Domain*/
    private HOST_SERVER = "http://localhost:3000/";

    /*Url Server Concat Host*/
    public URL_SERVER_LOGIN = this.HOST_SERVER+"login";
    
    /*Toast Message*/
    public  ERROR_SERVER;
    public  PASSWORD_MISING;
    public  USER_MISING;

    /*Labels And Placeholder in the Views*/
    public USERNAME_LABEL;
    public PASSWORD_LABEL;
    public INIT_SESSION_LABEL;

    /*Title of the pages*/
    public SESSION_PAGE_TITTLE; 

    /*Const entry the class*/
    public  LENGUAGE_ENGLISH = "English";
    public  LENGUAGE_ESPANISH = "Español";

    public lenguage = "English";
    
    constructor(){
        switch(this.lenguage)
        {
            case this.LENGUAGE_ENGLISH:
                this.ERROR_SERVER = "Error. Contact the system provider.";
                this.PASSWORD_MISING = "The password is missing!";
                this.USER_MISING = "The user is missing!";
                this.USERNAME_LABEL = "Username";
                this.PASSWORD_LABEL = "Password";
                this.INIT_SESSION_LABEL = "LOG IN";
                this.SESSION_PAGE_TITTLE = "App Test IONIC 2";
            break;
            case this.LENGUAGE_ESPANISH:
                this.ERROR_SERVER = "Error. Contacte a su proveedor de sistema.";
                this.PASSWORD_MISING = "La contraseña es obligatoria!";
                this.USER_MISING = "El suaurio es obligatorio!";
                this.USERNAME_LABEL = "Usuario";
                this.PASSWORD_LABEL = "Contraseña";
                this.INIT_SESSION_LABEL = "INICIAR SESIÓN";
                this.SESSION_PAGE_TITTLE = "Aplicación de prueba con IONIC 2";
            break;
        }        
    }

    getLenguage()
    {
      return this.lenguage;
    }
  
    setLenguage(lenguage)
    {
      this.lenguage = lenguage;
    }

}