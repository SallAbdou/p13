
import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <main className='main'>
      <section id="user" className="bg-dark">
        <div className="accounts">
          <h2 className="sr-only">Accounts</h2>
          {/* Affichage des informations du compte */}
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
          {/* Ajoutez les autres sections de compte ici */}
        </div>
      </section>
      <section id="edit-profile">
        <h2>Profile Information</h2>
        <p>Welcome, {user?.firstName} {user?.lastName}!</p>
        <EditProfile />
      </section>
    </main>
  );
};

export default Profile;
