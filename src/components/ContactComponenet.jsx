const ContactComponenet = ({ children }) => {
  return <div className="contact-comp"> {children} </div>;
};

ContactComponenet.Info = ({ email, phone, officeAddress, children, title }) => {
  return (
    <>
      <div className="info">
        <h3> {title} </h3>
        <div>
          <article className="flex">
            <div>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3>email address</h3> <p>{email}</p>
            </div>
          </article>

          <article className="flex">
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>Phone Number</h3> <p>{phone}</p>
            </div>
          </article>

          <article className="flex">
            <div>
              <i className="fa-solid fa-building"></i>
            </div>
            <div>
              <h3>office address</h3> <p>{officeAddress}</p>
            </div>
          </article>
        </div>
        {children}
      </div>
    </>
  );
};

ContactComponenet.Form = ({ children }) => {
  return <div className="form">{children}</div>;
};
// 37.04506821799898, 41.22529714364288
export default ContactComponenet;
