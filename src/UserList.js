import users from "./users";

function UserList() {
  return (
    <>
      {users.map((user) => (
        <article>
          <h3>{user.first_name}</h3>
          <p>User Group: {user.user_group}</p>
          <p>ID: {user.id}</p>
        </article>
      ))}
    </>
  );
}

export default UserList;