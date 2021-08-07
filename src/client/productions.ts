import api from "./api";
import { Production } from "./models";

export async function getNextProductionAsync(
  date?: string
): Promise<Production> {
  const response = await api.get<Production>("", {
    params: { date },
  });
  return response.data;
}
