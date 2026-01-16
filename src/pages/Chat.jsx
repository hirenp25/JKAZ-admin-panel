import React, { useState } from 'react';

const contacts = [
  { id: 1, name: "Alice Johnson", msg: "Hey, are we still on for meeting?", time: "2m", unread: 2, online: true },
  { id: 2, name: "Bob Smith", msg: "Project files attached.", time: "1h", unread: 0, online: false },
  { id: 3, name: "Charlie Davis", msg: "Thanks for the update!", time: "3h", unread: 0, online: true },
  { id: 4, name: "David Wilson", msg: "Can you check the logs?", time: "1d", unread: 0, online: false },
];

const messages = [
  { id: 1, sender: "me", text: "Hi Alice, how is the project going?", time: "10:00 AM" },
  { id: 2, sender: "Alice Johnson", text: "Going great! Just finishing the dashboard.", time: "10:02 AM" },
  { id: 3, sender: "me", text: "That sounds awesome. Let me know if you need help.", time: "10:05 AM" },
  { id: 4, sender: "Alice Johnson", text: "Sure! Are we still on for the meeting?", time: "10:10 AM" },
];

const Chat = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [input, setInput] = useState("");

  return (
    <div className="flex h-[calc(100vh-140px)] m-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      
      {/* Sidebar (Contacts) */}
      <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <input 
            type="text" 
            placeholder="Search contacts..." 
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setActiveChat(contact.id)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700
                ${activeChat === contact.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
            >
              <div className="relative">
                <img className="w-10 h-10 rounded-full" src={`https://ui-avatars.com/api/?name=${contact.name}&background=random`} alt="" />
                {contact.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{contact.name}</h4>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate w-40">{contact.msg}</p>
              </div>
              {contact.unread > 0 && (
                <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {contact.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
        
        {/* Chat Header */}
        <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center">
             <img className="w-10 h-10 rounded-full" src={`https://ui-avatars.com/api/?name=Alice+Johnson`} alt="" />
             <div className="ml-3">
               <h3 className="font-bold text-gray-800 dark:text-white">Alice Johnson</h3>
               <span className="text-xs text-green-500">Online</span>
             </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg shadow-sm 
                ${msg.sender === 'me' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className={`text-[10px] block text-right mt-1 ${msg.sender === 'me' ? 'text-blue-200' : 'text-gray-400'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-gray-600">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
            </button>
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chat;