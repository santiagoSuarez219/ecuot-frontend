import { isAxiosError } from "axios";

import api from "../../lib/axios";
import {
  Conflict,
  ConflictFormData,
  ConflictSchemaResponse,
  dashboardConflictSchemaResponde,
  Intervention,
} from "../../types";

type ConflitcCreateAPIType = {
  formData: ConflictFormData;
  idIntervention: Intervention["_id"];
};

export async function createConflict({
  formData,
  idIntervention,
}: ConflitcCreateAPIType) {
  try {
    const { data } = await api.post(
      `/interventions/${idIntervention}/conflicts`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getConflicts() {
  try {
    const { data } = await api("/conflicts");
    const response = dashboardConflictSchemaResponde.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getConflictById(id: Conflict["_id"]) {
  try {
    const { data } = await api(`/conflicts/${id}`);
    console.log(data);
    const response = ConflictSchemaResponse.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type ConflitcUpdateAPIType = {
  formData: ConflictFormData;
  conflictId: Conflict["_id"];
  interventionId: Intervention["_id"];
};

export async function updateConflict({
  formData,
  conflictId,
  interventionId,
}: ConflitcUpdateAPIType) {
  try {
    const { data } = await api.put<string>(
      `conflicts/${conflictId}/intervention/${interventionId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type ConflitcDeleteAPIType = {
  interventionId: Intervention["_id"];
  conflictId: Conflict["_id"];
};

export async function deleteConflict({
  interventionId,
  conflictId,
}: ConflitcDeleteAPIType) {
  try {
    const { data } = await api.delete<string>(
      `/interventions/${interventionId}/conflict/${conflictId}`
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
