import { isAxiosError } from "axios";

import api from "../../lib/axios";
import { dashboardSystemSchema, System } from "../../types";

export async function getSystems() {
  try {
    const { data } = await api("/system");
    const response = dashboardSystemSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getSystemById(id: System["_id"]) {
  try {
    const { data } = await api(`/system/${id}`);
    const response = dashboardSystemSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
