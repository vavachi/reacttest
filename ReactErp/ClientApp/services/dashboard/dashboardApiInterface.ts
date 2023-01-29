export interface Dashboard {
    user: any[],
    id: string,
    password? :string | number

}
export interface DashboardReducer {
    Items: Dashboard[],
    loading:boolean,
  }
  