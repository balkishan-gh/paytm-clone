export default class UserId {
  private userId: any;
  private static instance: any;
  private constructor() {
    this.userId = "Sex";
  }
  public static getInstance() {
    if (!this.instance) {
      this.instance = new UserId();
    }
    return this.instance;
  }
  userIdFunc(userId: any) {
    this.userId = userId;
  }
}
