class Unauthorized extends Error {
  public code = 'UNAUTHORIZED';

  constructor(message: string) {
    super();
    this.message = message;
  }
}

export default Unauthorized;
