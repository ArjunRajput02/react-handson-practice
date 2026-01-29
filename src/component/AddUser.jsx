import {userData} from '../utils/constant.js'

export default function AddUser() {
  return (
    <div id="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}