export default class MapUser {
  map(user) {
    return {
      first_name: user.firstName,
      id: user.id,
      last_name: user.lastName,
      user_name: this.mapUsername(user.firstName, user.lastName),
    };
  }
  mapUsername(username) {
    return username.substring(0, 8);
  }
  myException() {
    throw new Error('whoops');
  }

  myAsync() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('whoooho');
      }, 1000);
    });
  }
}
