export interface Admin {
    user: any[],
    id: string,

}
export interface AdminReducer {
    Items: Admin[],
    loading:boolean,
  }
  