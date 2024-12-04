/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const URL = "https://6750663e69dc1669ec1afad3.mockapi.io/product";

export const viewProduct = async () => {
  try {
    return await axios.get(`${URL}`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
