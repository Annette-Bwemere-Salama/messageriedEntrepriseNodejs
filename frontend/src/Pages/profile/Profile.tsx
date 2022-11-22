import "./profile.css";

export default function Profile({ user }: { user: any }, { message }: { message: any }) {
  // const PI = process.env.REACT_APP_PUBLIC_FOLDER

  // {message.text}

  return (

    <div className="flex flex-row items-center p-4 relative">
      <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
        {user && user?.createdAt}
      </div>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-200 font-bold flex-shrink-0">
        <img src="" alt="ava" />
        {/* {user.profilePicture ? user.profilePicture : PI + "persone/noAvatar.png"} */}
      </div>
      <div className="flex flex-col flex-grow ml-3">
        <div className="text-sm font-medium">{user && user?.username}</div>
        <div className="text-xs truncate w-40">
          {/* {message.text} */}
          </div>
      </div>
      <div className="flex-shrink-0 ml-2 self-end mb-1">
        <span className="flex items-center justify-center h-5 w-5 bg-blue-800 text-white text-xs rounded-full">3</span>
      </div>
    </div>

  );
}
