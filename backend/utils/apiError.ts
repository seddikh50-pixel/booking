class AppError extends Error {
  public status: number;
  public success: boolean;

  constructor(message: string, status: number, success: boolean = false) {
    super(message);

    this.status = status;
    this.success = success;

    // Object.setPrototypeOf(this, AppError.prototype);
  }
}

export default AppError;