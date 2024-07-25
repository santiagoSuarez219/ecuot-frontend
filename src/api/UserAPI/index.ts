import { isAxiosError } from "axios";
import api from "../../lib/axios";
import {
  ChangePasswordType,
  dashboardUserSchema,
  User,
  UserEditType,
  UserFormData,
  UserSchemaResponse,
} from "../../types";

export async function createUser(formData: UserFormData) {
  try {
    const { data } = await api.post(`/users/create-account`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getUsersRequest() {
  try {
    const { data } = await api("/users");
    const response = dashboardUserSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getUserInfoRequest() {
  try {
    const { data } = await api.get("/users/data-user");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getUserByIdRequest(id: User["_id"]) {
  try {
    const { data } = await api(`/users/${id}`);
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

type UserUpdateAPIType = {
  formData: UserEditType;
  userId: User["_id"];
};
export async function updateUser({ formData, userId }: UserUpdateAPIType) {
  try {
    const { data } = await api.put<string>(
      `users/update-user/${userId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function changePasswordRequest(
  formData: ChangePasswordType,
  userId: User["_id"]
) {
  try {
    const { data } = await api.post<string>(
      `/users/update-password/${userId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteUserById(userId: User["_id"]) {
  try {
    const { data } = await api.delete<string>(`/users/${userId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
