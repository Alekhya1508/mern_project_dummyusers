import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Alekhya',
      type: 'Green Coverage',
      image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 2
    },
    {
      id: 'u2',
      name: 'Supriya',
      type: 'Living Area',
      image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 2
    },
    {
      id: 'u3',
      name: 'Shifa',
      type: 'Road Length',
      image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 2
    }

  ];

  return <UsersList items={USERS} />;
};

export default Users;