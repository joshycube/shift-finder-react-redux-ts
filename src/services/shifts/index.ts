import axios, { AxiosResponse } from "axios";

const SHIFTS_AP_HARDCODED =
  "https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions";

export async function shiftsRequest(): Promise<AxiosResponse> {
  return await axios.get(SHIFTS_AP_HARDCODED);
}
