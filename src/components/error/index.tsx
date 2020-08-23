import React from "react";

import { RequestError } from "../../types/error";

interface Props {
  error: RequestError;
}

function ErrorComponent({ error }: Props): JSX.Element {
  return <div>{error.data}</div>;
}

export default ErrorComponent;
