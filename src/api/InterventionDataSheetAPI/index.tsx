import { isAxiosError } from "axios";

import api from "../../lib/axios";

import {
  Intervention,
  InterventionDataSheet,
  InterventionDataSheetFormData,
} from "../../types";

type InterventionDataSheetAPIType = {
  formData: InterventionDataSheetFormData;
  interventionDataSheetId: InterventionDataSheet["_id"];
};

export async function updateInterventionDataSheet({
  formData,
  interventionDataSheetId,
}: InterventionDataSheetAPIType) {
  try {
    const { data } = await api.put<string>(
      `/intervention_datasheet/${interventionDataSheetId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type InterventionDataSheetDeleteAPIType = {
  id: InterventionDataSheet["_id"];
  interventionId: Intervention["_id"];
};

export async function deleteInterventionDataSheet({
  id,
  interventionId,
}: InterventionDataSheetDeleteAPIType) {
  try {
    const { data } = await api.delete<string>(
      `/interventions/${interventionId}/datasheet/${id}`
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
