import { useState } from "react";
import profilePlaceholder from "../../assists/images/placeholder-profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import chat from "../../assists/icons/chat.svg";
import { Link, Navigate } from "react-router-dom";
import { useUserAuth } from "../../setup/context/user-auth-context";

const LoggedInIcons = () => {
  const [isSignedInShown, setIsSignedInShown] = useState(false);

  const { user, logOut } = useUserAuth();

  const signOut = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const isSignedInShownHanlder = () => {
    setIsSignedInShown(!isSignedInShown);
  };

  return (
    <section className="flex gap-12">
      <Link className="chat-container w-8 relative" to="/">
        <img src={chat} alt="" />
        <span className="absolute text-white rounded-full text-xs font-bold bg-buttonColor -top-2 -left-2 p-[1px]">
          9+
        </span>
      </Link>
      <div className="profile-container flex gap-2 justify-center items-center cursor-pointer relative max-lg:hidden">
        <div className="w-9" onClick={isSignedInShownHanlder}>
          <div className="flex items-center justify-center gap-3">
            <img src={profilePlaceholder} alt="" className="rounded-full" />
            <FontAwesomeIcon icon={faAngleDown} className="text-[#777]" />
          </div>
        </div>
        {isSignedInShown && (
          <div className="absolute top-10 bg-white shadow-md border border-gray-200 rounded-lg flex flex-col right-0 py-2 cursor-default">
            <ul>
              <li className="px-4 py-1">Signed in as</li>
              <li className="font-medium px-4 pb-2">{user.email}</li>
              <hr />
              <li
                className="px-4 py-2 hover:bg-gray-100 duration-300 ease-in-out cursor-pointer"
                onClick={signOut}
              >
                Sign out
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoggedInIcons;
