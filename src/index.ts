export class TestError extends Error {
    constructor(
      message: string,
      public readonly code?: string
    ) {
      super(message);
      Object.setPrototypeOf(this, TestError.prototype);
    }
}