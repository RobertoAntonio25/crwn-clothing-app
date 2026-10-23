import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils"

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} =await signInWithGooglePopUp()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <>
            <div>Sign In Page</div>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
                </button>
        </>
    )
}

export default SignIn