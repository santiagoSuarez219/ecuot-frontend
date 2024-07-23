import { isAxiosError } from "axios";

import api from "../../lib/axios";

export async function getInfo() {
  try {
    const { data } = await api.get("/information");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
