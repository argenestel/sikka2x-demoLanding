// "use client"
// import { auth, getMessages, sendMessage } from "@/firebaseConfig";
// import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";

// const ChatPage = ({ params }: { params: { chatid: string } }) => {

//   interface Message {
//     uid: string;
//     displayName: string;
//     text: string;
//     timestamp: any; // Replace 'any' with the appropriate timestamp type from your Firebase setup
//   }
//     const [message, setMessage] = useState<string>('');
//     const [user, loading, error] = useAuthState(auth);
//     const [allmessage, setAllMessage] = useState<Message[]>([]);
//     // Function to handle sending a message
//     const handleSendMessage = () => {
//       if (message.trim() === '') return; // Don't send empty messages
  
//       sendMessage("dogs", user, message); // Replace roomId with the actual room ID
//       setMessage(''); // Clear the message input
//     };
//     useEffect(() => {
//       const fetchUsers = async () => {
//         try {
//           const usersArray = await getMessages("dogs")
//           setAllMessage(usersArray);
//         } catch (error) {
//           console.error('Error fetching users:', error);
//         }
//       };
  
//       fetchUsers();
//     }, []);
  
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 dark:bg-black">
//         {/* Sidebar content goes here */}
//       </div>

//       {/* Chat area */}
//       <div className="w-3/4 bg-white dark:bg-blacksection">
//         <div className="flex flex-col h-full">
//           {/* Chat header */}
//           <div className="bg-gray-800 dark:bg-gray-700 p-4">
//             <div className="text-white dark:text-gray-300 text-xl font-bold">Chat with John Doe</div>
//           </div>

//           {/* Chat messages */}
//           <div className="flex-1 overflow-y-scroll p-4">
//             {/* Messages go here */}
//           </div>

//           {/* Message input */}
//           <div className="bg-gray-100 dark:bg-gray-600 p-4">
//             <div className="flex">
//               <input
//                 type="text"
//                 className="flex-1 p-2 rounded-full bg-white dark:bg-blacksection"
//                 placeholder="Type a message..."
//               />
//               <button className="bg-primary dark:bg-primaryho text-white dark:text-black rounded-full p-2 ml-2"
//                 onClick={handleSendMessage}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;

export default function ChatPage() {
    return(
      <div>
        Chat
      </div>
    )
}