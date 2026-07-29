import { useState } from "react";
import {
  Bot,
  X,
  Send,
  DollarSign,
  CalendarDays,
  Hotel,
  Car,
  Smile,
  ShieldCheck,
} from "lucide-react";

import "./FloatingChat.css";

type Message = {
  id: number;
  sender: "assistant" | "user";
  text: string;
};

const welcomeMessage = `👋 Welcome!

I'm your AI Dental Assistant.

I can help you with:

• Prices
• Treatments
• Appointments
• Border Crossing
• Hotel Recommendations

Select a topic below or ask me anything.`;

export default function FloatingChat() {

  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: 1,
        sender: "assistant",
        text: welcomeMessage,
      },
    ]);

  function addUserMessage(
    text: string
  ) {

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text,
      },
    ]);

  }

  function addAssistantMessage(
    text: string
  ) {

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: "assistant",
        text,
      },
    ]);

  }

  function simulateResponse(
    response: string
  ) {

    setIsTyping(true);

    setTimeout(() => {

      setIsTyping(false);

      addAssistantMessage(response);

    }, 1200);

  }

  function handleQuickAction(
    action: string
  ) {

    addUserMessage(action);

    switch (action) {

      case "Prices":

        simulateResponse(

`Our treatments are significantly more affordable than in the United States.

Tell me which treatment you're interested in and I'll gladly provide an estimate.`

        );

        break;

      case "Treatments":

        simulateResponse(

`We offer:

• Dental Implants

• Veneers

• Crowns

• Root Canals

• Teeth Whitening

• Invisalign

• General Dentistry

Which treatment would you like to learn more about?`

        );

        break;

      case "Appointment":

        simulateResponse(

`We'd love to help!

Most of our international patients schedule their visit a few days in advance.

We can also help you plan your dental trip.`

        );

        break;

      case "Border":

        simulateResponse(

`Crossing into San Luis Río Colorado is simple.

We'll gladly explain the easiest border crossing options and answer any travel questions.`

        );

        break;

      case "Hotels":

        simulateResponse(

`We can recommend comfortable hotels located near our clinic for every budget.

Just let us know your travel dates.`

        );

        break;

      default:

        simulateResponse(

"How can I help you today?"

        );

    }

  }

  function sendMessage() {

    if (!input.trim()) return;

    addUserMessage(input);

    const question = input;

    setInput("");

    simulateResponse(

`Thanks for your question:

"${question}"

Very soon I'll be able to answer automatically using our AI Dental Assistant.`

    );

  }

  return (

    <>

      <button
        className="floating-chat-button"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Dental Assistant"
      >

        <Bot size={22} />

        <span>

          Ask AI

        </span>

      </button>

      <div
        className={`floating-chat ${
          isOpen ? "open" : ""
        }`}
      >

        <div className="floating-chat-header">

          <div className="chat-title">

            <div className="chat-avatar">

              <Bot size={22} />

            </div>

            <div>

              <h3>

                AI Dental Concierge

              </h3>

              <span>

                Here to help 24/7

              </span>

            </div>

          </div>

          <button
            className="chat-close"
            onClick={() =>
              setIsOpen(false)
            }
          >

            <X size={18} />

          </button>

        </div>

        <div className="floating-chat-body">

          {messages.map((message) => (

            <div
              key={message.id}
              className={
                message.sender ===
                "assistant"
                  ? "assistant-message"
                  : "user-message"
              }
            >

              {message.text
                .split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line}
                  </p>
                ))}

            </div>

          ))}

          {isTyping && (

            <div className="assistant-message typing">

                            <div className="typing-dots">

                <span></span>

                <span></span>

                <span></span>

              </div>

            </div>

          )}

          <div className="quick-actions">

            <button
              onClick={() =>
                handleQuickAction("Prices")
              }
            >
              <DollarSign size={16} />
              Prices
            </button>

            <button
              onClick={() =>
                handleQuickAction("Treatments")
              }
            >
              <Smile size={16} />
              Treatments
            </button>

            <button
              onClick={() =>
                handleQuickAction("Appointment")
              }
            >
              <CalendarDays size={16} />
              Appointment
            </button>

            <button
              onClick={() =>
                handleQuickAction("Border")
              }
            >
              <Car size={16} />
              Border
            </button>

            <button
              onClick={() =>
                handleQuickAction("Hotels")
              }
            >
              <Hotel size={16} />
              Hotels
            </button>

          </div>

        </div>

        <div className="floating-chat-footer">

          <div className="chat-security">

            <ShieldCheck size={15} />

            <span>

              Private & Secure

            </span>

          </div>

          <div className="chat-input">

            <input
              type="text"
              value={input}
              placeholder="Ask me anything..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  sendMessage();

                }

              }}
            />

            <button
              onClick={sendMessage}
              aria-label="Send message"
            >

              <Send size={18} />

            </button>

          </div>

        </div>

      </div>

    </>

  );

}