import api from "./api";
import { Production } from "./models";

export async function getNextProductionAsync(date?: Date): Promise<Production> {
  const response = await api.get<Production>("", {
    params: {
      date: date?.toISOString().split("T")[0],
    },
  });
  return response.data;
}
