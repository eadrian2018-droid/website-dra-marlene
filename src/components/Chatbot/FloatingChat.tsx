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
} from "lucide-react";

import "./FloatingChat.css";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}

      <button
        className="floating-chat-button"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Dental Assistant"
      >
        <Bot size={26} />
      </button>

      {/* Chat Window */}

      <div
        className={`floating-chat ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="floating-chat-header">

          <div className="chat-title">

            <div className="chat-avatar">
              <Bot size={20} />
            </div>

            <div>
              <h3>AI Dental Assistant</h3>

              <span>Online</span>
            </div>

          </div>

          <button
            className="chat-close"
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>

        </div>

        <div className="floating-chat-body">

          <div className="assistant-message">

            <p>

              👋 Hello!

            </p>

            <p>

              I'm your AI Dental Assistant.

            </p>

            <p>

              Ask me anything about our dental
              treatments, pricing, travel, or
              appointments.

            </p>

          </div>

          <div className="quick-actions">

            <button>

              <DollarSign size={16} />

              Prices

            </button>

            <button>

              <Smile size={16} />

              Treatments

            </button>

            <button>

              <CalendarDays size={16} />

              Appointments

            </button>

            <button>

              <Car size={16} />

              Border Crossing

            </button>

            <button>

              <Hotel size={16} />

              Hotels

            </button>

          </div>

        </div>

        <div className="floating-chat-footer">

          <input
            type="text"
            placeholder="Type your question..."
          />

          <button>

            <Send size={18} />

          </button>

        </div>

      </div>
    </>
  );
}