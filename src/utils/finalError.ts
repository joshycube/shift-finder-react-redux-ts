export default function finalError(error: {
  message: string;
  request: any;
  response: {
    headers: any;
    status: number;
  };
}) {
  let finalError = {
    data: "",
    status: 0,
    header: "",
  };
  if (error.response) {
    finalError = {
      data: error.message,
      status: error.response.status,
      header: error.response.headers,
    };
  } else if (error.request) {
    finalError = {
      data: error.message,
      status: 0,
      header: "",
    };
  } else {
    finalError = {
      data: error.message as string,
      status: 0,
      header: "",
    };
  }
  return finalError;
}
