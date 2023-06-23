class ApplicationException extends Error {
  constructor(message) {
    super(message);
    this.name = "ApplicationException";
  }
}

class ServerException extends Error {
  constructor(message) {
    super(message);
    this.name = "ServerException";
  }
}

export { ApplicationException, ServerException };
