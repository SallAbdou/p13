const NotFound = () => {
    return (
  
      <section className="error-section">
        <h1 className="error-number">404</h1>
        <p className="error-text">{"Oups! La page que vous demandez n'existe pas."}</p>
        <a href="/" className="return-link">{"retourner sur la page d'accueil"}</a>
  
      </section>
    )
  }
  
  export default NotFound
  