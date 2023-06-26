export default {
    computed: {
      isAuthenticated() {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
          return false;
        }
  
        // Kiểm tra tính hợp lệ của JWT token
        const jwtData = jwt.split('.')[1];
        const decodedJwt = window.atob(jwtData);
        const { exp } = JSON.parse(decodedJwt);
  
        if (exp < Date.now() / 1000) {
          // JWT token hết hạn
          localStorage.removeItem('jwt');
          return false;
        }
  
        return true;
      }
    }
  }