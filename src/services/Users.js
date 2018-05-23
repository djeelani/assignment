class Users {
  static async getUserDetails(userID) {
    const API_URL = `https://reqres.in/api/users/${userID}`;
    const response = await fetch(API_URL, {
      method: 'GET'
    });
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error('User details could not be fetched.');
    }
  }
}

export default Users;
