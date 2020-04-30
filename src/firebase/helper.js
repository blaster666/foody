import auth from "./config";

export const handleLogin = () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        // user = user;
        resolve({ user: { data: user, isLogin: true, error: null } });
      } else {
        // user = null;
        reject({ user: { data: null, isLogin: false, error: null } });
      }
    });
  });
};
