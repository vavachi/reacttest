import { useGetAdminQuery } from "@/services/admin/admin";


export default function Admin(){
    const { data, error, isLoading, isSuccess } = useGetAdminQuery({ id: 'abc' });
    console.log(data);
    return <div> Admin </div>
}