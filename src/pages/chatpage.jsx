import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useChatStore } from "../../utils/useChatStore";
import Sidebar from "../Components/Sidebar";
import ChatContainer from "../Components/ChatContainer";
import NoChatSelected from "../Components/NoChatSelected";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
  <>
  <Navbar/>
    <div className="min-h-screen py-[20px] md:py-[50px] bg-base-200 overflow-hidden">
      <div className="flex items-center justify-center pt-20 px-4 ">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden border border-gray-300">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default HomePage;
