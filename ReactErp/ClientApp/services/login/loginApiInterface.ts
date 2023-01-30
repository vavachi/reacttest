export interface Branch{
    cmp_code:string,
    br_code:string,
    br_name:string,
}

export interface Database{
    id:string,
    catalog:string,
    name:string,
}

export interface Login{
    branches:Branch[],
    databases:Database[],
    returnUrl:string
}