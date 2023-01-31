
import { CustomeInput } from "@/companant/CustomeInput"
import { loginApi, usePostLoginMutation } from "@/services/login/login"
import { useState } from "react";

export default function Login() {
    const [login, res] = usePostLoginMutation()
    const [fields, setFields] = useState<any>({});
    function onChange(e: any) {
        const { value, name } = e.target
        const newFields = { ...fields }
        newFields[name] = value
        setFields({ ...newFields })

    }
    console.log(fields);

    function onClick() {
        const request = { userid: fields.userid, password: fields.password };
        login(request);

    }

    console.log(res)
    console.log('text')
    return (
        <>
            <div className="col-12"> Login</div>
            <CustomeInput name="userid" onChange={onChange} value={fields.userid} />
            <CustomeInput name="password" onChange={onChange} value={fields.password} />
            <button onClick={onClick} >Submit</button>


        </>
    )
}