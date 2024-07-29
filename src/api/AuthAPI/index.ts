import { isAxiosError } from "axios";

import { LoginFormData, UserSchemaResponse } from "../../types";
import api from "../../lib/axios";

export async function login(formData: LoginFormData) {
  try {
    const { data } = await api.post<string>(`/users/login`, formData);
    localStorage.setItem("AUTH_TOKEN", data);
    return;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
export async function getUserInfo() {
  try {
    const { data } = await api.get("/users/data-user");
    const response = UserSchemaResponse.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
