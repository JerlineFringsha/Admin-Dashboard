import { useState } from "react";
import { Bell } from "lucide-react";

import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: false,
    email: false,
    sms: true,
	  wp:true
  });

  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notifications.push}
        onToggle={() =>
          setNotifications({ ...notifications, push: !notifications.push })
        }
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notifications.email}
        onToggle={() =>
          setNotifications({ ...notifications, email: !notifications.email })
        }
      />
      <ToggleSwitch
        label={"SMS Notifications"}
        isOn={notifications.sms}
        onToggle={() =>
          setNotifications({ ...notifications, sms: !notifications.sms })
        }
      />
      <ToggleSwitch
        label={"Wp Notifications"}
        isOn={notifications.wp}
        onToggle={() =>
          setNotifications({ ...notifications, wp: !notifications.wp })
        }
      />
    </SettingSection>
  );
};
export default Notifications;
