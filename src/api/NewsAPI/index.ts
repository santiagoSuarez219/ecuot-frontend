import { isAxiosError } from "axios";

import api from "../../lib/axios";
import {
  dashboardNewsShemaResponse,
  Intervention,
  News,
  NewsFormData,
  NewsShemaResponse,
} from "../../types";

type NewsCreateAPIType = {
  formData: NewsFormData;
  idIntervention: News["_id"];
};

export async function createNews({
  formData,
  idIntervention,
}: NewsCreateAPIType) {
  try {
    const { data } = await api.post(
      `/interventions/${idIntervention}/news`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getNews() {
  try {
    const { data } = await api("/news");
    const response = dashboardNewsShemaResponse.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getNewsById(id: News["_id"]) {
  try {
    const { data } = await api(`/news/${id}`);
    const response = NewsShemaResponse.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type NewsUpdateAPIType = {
  formData: NewsFormData;
  newsId: News["_id"];
  interventionId: News["_id"];
};
export async function updateNews({
  formData,
  newsId,
  interventionId,
}: NewsUpdateAPIType) {
  try {
    const { data } = await api.put<string>(
      `news/${newsId}/intervention/${interventionId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type NewsDeleteAPIType = {
  interventionId: Intervention["_id"];
  newsId: News["_id"];
};

export async function deleteNews({
  interventionId,
  newsId,
}: NewsDeleteAPIType) {
  try {
    const { data } = await api.delete<string>(
      `/interventions/${interventionId}/news/${newsId}`
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
