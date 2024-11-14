declare module "#auth-utils" {
  interface User {
    login :string;
    name?: string;
    email?: string;
  }
  interface UserSession {
    user: User;
    loginTime: number;
  }
}