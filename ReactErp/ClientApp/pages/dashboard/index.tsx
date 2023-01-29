import { useGetDashboardQuery, useGetMachineCountMutation } from "@/services/dashboard/dashboard";

export default function Dashboard() {
    const { data, error, isLoading, isSuccess } = useGetDashboardQuery({ id: 'abc' });
    const [req, res] = useGetMachineCountMutation()
    function runClik() {
        req('hii')
    }
    return (
        <>
            <div className="col-12"> Dashboard on load fire query</div>
            <button onClick={() => runClik()}>  click test</button>
        </>
    )
}