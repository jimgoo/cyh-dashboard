import Cookies from 'js-cookie';

const cookieAuth = 'token';
class TokenService {
  getLocalAccessToken = () => {
    return Cookies.get(cookieAuth);
  };
  saveLocalAccessToken = (token) => {
    Cookies.set(cookieAuth, token, { sameSite: 'strict' });
  };
  deleteLocalAccessToken = () => {
    Cookies.remove(cookieAuth);
  };
}

export default new TokenService();
