import obj from './GoogleSignIn/GoogleSignIn'

class Auth{
  static authenticateUser(id){
    localStorage.setItem('id', id);
  }

  static isUserAuthenticated(){
    console.log(localStorage.getItem('id'));
    return localStorage.getItem('id') != null;
  }

  static getId() {
    return localStorage.getItem('id');
  }

  static deauthenticateUser() {
    localStorage.removeItem('id');
  }

  static storeGapi(obj){
    localStorage.setItem('gapi', obj)
    console.log(obj)
  }

  static logOut(){
    var gapi = localStorage.getItem('gapi')
    obj.getGapi();
    Auth.deauthenticateUser()
  }
}

export default Auth;
