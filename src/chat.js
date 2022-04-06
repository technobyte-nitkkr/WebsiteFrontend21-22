import React, { useEffect } from "react";
import Keys from "./config.keys";

const KommunicateChat = () => {
  useEffect(() => {
  var userData = JSON.parse(localStorage.getItem("userdata"));
    (function (d, m) {
      var kommunicateSettings = {
        appId: Keys.CHAT_BOT_APP_ID,
        popupWidget: true,
        
        automaticChatOpenOnNavigation: true,
        "contactNumber": userData?.phone,
        "userId":userData?.email,
        "email": userData?.email,
      };

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);
  return <></>;
};

export default KommunicateChat;
