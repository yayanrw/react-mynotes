import { BASE_URL } from "./MyConstants";
import { ServerException, ApplicationException } from "./Exceptions";

const fetchLogin = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const jsonResponse = await response.json();

  if (response.ok) {
    return jsonResponse;
  } else if (response.status >= 400 && response.status <= 499) {
    throw new ApplicationException(jsonResponse.message);
  } else {
    throw new ServerException("Server Error");
  }
};

export { fetchLogin };
