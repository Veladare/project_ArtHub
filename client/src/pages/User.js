import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_EMAIL } from '../utils/mutations'
import {QUERY_ME} from '../utils/queries'
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';



function UpdateEmailForm() {
  const [newEmail, setNewEmail] = useState('');
  const [updateUserEmail] = useMutation(UPDATE_USER_EMAIL);
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};


  console.log(user);

  const handleEmailUpdate = async () => {
    try {
      const { data } = await updateUserEmail({ variables: { newEmail } });
      // Handle the updated user data
      console.log(data.updateUserEmail);
      // Optionally, you can reset the form or provide feedback to the user
      setNewEmail('');

    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  }

  return (
    <div>
      <input
        type="email"
        placeholder="New Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={handleEmailUpdate}>Update Email</button>
      <div>
        <p>Current Email: {user.email} </p>
        <Link to="/">back to the homepage.</Link>
      </div>
    </div>

  );
}


export default UpdateEmailForm;
