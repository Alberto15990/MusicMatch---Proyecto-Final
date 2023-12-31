const PATH = "/auth";

export const register = (client) => async (params) => {
    try {
      const { data } = await client.post(`${PATH}/signup`, params);
      return data;
    } catch (error) {
      console.info("> error [register]: ", error.message);
      return {
        success: false,
      };
    }
  };



export const login = (client) => async (params) => {
    try {
        const { data } = await client.post(`${PATH}/signin`, params )
        console.info('> login data:', data)
        return data
    } catch (error) {
        console.info('> login error', error.message)
        return{success: false}
    }
}


export const logout = (client) => async () => {
    try {
      const { data } = await client.post(`${PATH}/signout`);
      return data
    } catch (error) {
      console.info("> error [logout]: ", error.message);
      return {
        success: false,
      };
    }
  };