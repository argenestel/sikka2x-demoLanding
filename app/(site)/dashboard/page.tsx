"use client";
import React, { useState, useEffect } from 'react';

// import Header from '@/components/Header';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, getUsers, setChatRoom } from '@/firebaseConfig';
// import { useRouter } from 'next/navigation';
import Navbar from '@/components/NavBar';
// import Link from 'next/link';

interface CardProps {
  title: string;
  content: string;
}

interface User {
  id: string;
  name: string;
  // Add other properties here if needed
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white dark:bg-blacksection shadow-solid-5 p-6 rounded-md">
      <div className="text-xl font-bold text-black dark:text-white mb-4">
        {title}
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        {content}
      </p>
    </div>
  );
};


export default function Dashboard() {
  // const [user, loading, error] = useAuthState(auth);
  // const router = useRouter();
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const usersArray = await getUsers();
  //       setUsers(usersArray);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   router.push('/auth/signin');
  //   return null;
  // }

  return (
    <div>
      <Navbar />
Coming Soon

    </div>
  );
}
