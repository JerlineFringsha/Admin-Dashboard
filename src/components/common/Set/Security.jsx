import SetSection from "./SetSection";
import { Lock } from "lucide-react";
import { useState } from "react";
import Toggle from "./Toggle";

const Security = () => {
  const [factor, setFactor] = useState({
    twofactor: false,
  });

  return (
    <SetSection icon={Lock} title={"Security"}>
      <Toggle
        label={"Two Factor"}
        isOn={factor.twofactor}
        onToggle={() => {
          setFactor({ ...factor, twofactor: !factor.twofactor });
        }}
      />
    </SetSection>
  );
};

export default Security;
