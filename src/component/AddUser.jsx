const userData = {
  firstName: 'Arjun', 
  lastName: 'Rajput', 
  title: 'Instructor', 
};

export default function AddUser() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}