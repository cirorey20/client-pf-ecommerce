// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "UniversalMusic",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#161414",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
