import { useSelector, useDispatch } from "react-redux"
import { selectUser, selectIsEditing, setIsEditing, setUser, selectToken } from "../app/authSlice"
import { useRef } from "react"
import { putUser } from "../app/authApi"

const Welcome = () => {
    const user = useSelector(selectUser)
    const isEditing = useSelector(selectIsEditing)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    const form = useRef()

    const updateUser = e => {
        e.preventDefault()

        const userInfo = {
            firstName: form.current[0].value,
            lastName: form.current[1].value
        }

        putUser(token, userInfo).then(data => dispatch(setUser(data.body)))
        dispatch(setIsEditing(false))
    }

    return (
        <div className="header">
            {
                isEditing ?
                    <>
                        <h1>Welcome back</h1>
                        <form
                            id="changeUserData"
                            ref={form}
                            onSubmit={(e) => updateUser(e)}
                        >
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    id="firstname"
                                    placeholder={user?.firstName}
                                />
                                <input
                                    type="text"
                                    id="lastname"
                                    placeholder={user?.lastName}
                                />
                            </div>
                            <div className="input-wrapper">
                                <button className="sign-in-button" type="submit">
                                    Save
                                </button>
                                <button
                                    className="sign-in-button"
                                    type="reset"
                                    onClick={() => dispatch(setIsEditing(false))}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </> : <>
                        <h1>Welcome back<br />{user?.firstName} {user?.lastName}!</h1>
                        <button className="edit-button" onClick={() => dispatch(setIsEditing(true))}>Edit Name</button>
                    </>

            }


        </div>
    )
}

export default Welcome