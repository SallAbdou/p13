import { useEffect } from "react"
import { selectToken, setUser } from "../app/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postUser } from "../app/authApi"
import Welcome from "../Components/Welcome"

const Profile = () => {
    const token = useSelector(selectToken)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        if (!token) {
            navigate('/sign-in')
        } else {
            postUser(token).then(data => dispatch(setUser(data.body)))
        }
    }, [])

    return (
        <main className='main bg-dark'>
            <Welcome />
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default Profile