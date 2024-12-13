import { Bell } from "lucide-react";
import SetSection from "./SetSection";
import ToogleSection from "./ToggleSection";
import { useState } from "react";

const Notification = () => {
  const [notification, setNotifications] = useState({
    Insta: true,
    Email: true,
    Wp: false,
    Sms: false,
  });

  return (
    <SetSection icon={Bell} title={"Notification"}>
      <ToogleSection
        label={"Insta"}
        isOn={notification.Insta}
        onToggle={() =>
          setNotifications({ ...notification, Insta: !notification.Insta })
        }
      />
      <ToogleSection
        label="Email"
        isOn={notification.Email}
        onToggle={() => {
          setNotifications({ ...notification, Email: !notification.Email });
        }}
      />
            <ToogleSection
        label=" Wp"
        isOn={notification. Wp}
        onToggle={() => {
          setNotifications({ ...notification,  Wp: !notification. Wp });
        }}
      />
            <ToogleSection
        label="Sms"
        isOn={notification.Sms}
        onToggle={() => {
          setNotifications({ ...notification, Sms: !notification.Sms });
        }}
      />
    </SetSection>
  );
};

export default Notification;
