import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <h1>Not Found</h1>
            <h2>{err.error.message}</h2>
        </div>
    )
}

export default ErrorPage