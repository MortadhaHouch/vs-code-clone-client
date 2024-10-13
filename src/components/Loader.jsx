/* eslint-disable react/prop-types */
import ErrorAnimation from "../assets/animations/Animation - error.json"
import LoadingAnimation from "../assets/animations/Animation - loading.json"
import LoginAnimation from "../assets/animations/Animation - login.json"
import Lottie from 'lottie-react'
export default function Loader(props) {
    return (
        <div>
            {
                props.loading && (
                    <Lottie animationData={LoadingAnimation}/>
                )
            }
            {
                props.login && (
                    <Lottie animationData={LoginAnimation}/>
                )
            }
            {
                props.error && (
                    <Lottie animationData={ErrorAnimation}/>
                )
            }
        </div>
    )
}
