import Header from "../components/common/Header";
import Profile from "../components/common/Set/Profile";
import Notification from "../components/common/Set/Notification";
import Security from "../components/common/Set/Security";
import Connect from "../components/common/Set/Connect";
import Danger from "../components/common/Set/Danger";

const SetPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Sets Page" />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notification />
        <Security />
        <Connect />
        <Danger />
      </main>
    </div>
  );
};

export default SetPage;
