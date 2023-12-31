const ContactList = (props) => {
  return (  
    <div>
      <h2>Contact List</h2>
      <ul>
      {props.phoneData.map(contact =>(
        <li key={contact._id}>
          <p>{contact.name}</p>
          <p>cost:{contact.cost}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;