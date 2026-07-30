import { useEffect, useMemo, useRef, useState } from "react";

import {
  Bot,
  ChevronLeft,
  Home,
  Send,
  X,
} from "lucide-react";

import { chatData } from "./chatData";

import type {
  ChatNode,
  ChatOption,
} from "./chatData";

import "./FloatingChat.css";

type Sender =
  | "assistant"
  | "user";

type Message = {
  id: number;
  sender: Sender;
  text: string;
};

const ROOT_NODE = "welcome";

const TYPING_DELAY = 700;

export default function FloatingChat() {

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    input,
    setInput,
  ] = useState("");

  const [
    isTyping,
    setIsTyping,
  ] = useState(false);

  const [
    currentNodeId,
    setCurrentNodeId,
  ] = useState(ROOT_NODE);

  const [
    history,
    setHistory,
  ] = useState<string[]>([]);

  const [
    messages,
    setMessages,
  ] = useState<Message[]>([]);

  const messageIdRef =
    useRef(1);

  const bottomRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const initialized =
    useRef(false);

  const currentNode:
    | ChatNode
    | undefined = useMemo(
    () =>
      chatData[currentNodeId],
    [currentNodeId]
  );

  useEffect(() => {

    if (!isOpen) {

      return;

    }

    bottomRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );

  }, [
    messages,
    isTyping,
    isOpen,
  ]);

  useEffect(() => {

    if (
      initialized.current
    ) {

      return;

    }

    initialized.current =
      true;

    const node =
      chatData[ROOT_NODE];

    if (!node) {

      return;

    }

    setMessages([
      {
        id:
          messageIdRef.current++,
        sender:
          "assistant",
        text: node.message,
      },
    ]);

  }, []);

  const appendAssistantMessage =
    (
      text: string
    ) => {

      setIsTyping(true);

      window.setTimeout(
        () => {

          setMessages(
            (
              previous
            ) => [
              ...previous,
              {
                id:
                  messageIdRef.current++,
                sender:
                  "assistant",
                text,
              },
            ]
          );

          setIsTyping(
            false
          );

        },
        TYPING_DELAY
      );

    };

  const appendUserMessage =
    (
      text: string
    ) => {

      setMessages(
        (
          previous
        ) => [
          ...previous,
          {
            id:
              messageIdRef.current++,
            sender:
              "user",
            text,
          },
        ]
      );

    };

  const navigateToNode =
    (
      nodeId: string
    ) => {

      const node =
        chatData[nodeId];

      if (!node) {

        return;

      }

      setHistory(
        (
          previous
        ) => [
          ...previous,
          currentNodeId,
        ]
      );

      setCurrentNodeId(
        nodeId
      );

      appendAssistantMessage(
        node.message
      );

    };

  const handleOptionClick =
    (
      option: ChatOption
    ) => {

      appendUserMessage(
        option.label
      );

      navigateToNode(
        option.id
      );

    };

  const handleBack =
    () => {

      if (
        history.length ===
        0
      ) {

        return;

      }

      const previous =
        history[
          history.length -
            1
        ];

      const node =
        chatData[
          previous
        ];

      if (!node) {

        return;

      }

      setHistory(
        (
          stack
        ) =>
          stack.slice(
            0,
            -1
          )
      );

      setCurrentNodeId(
        previous
      );

      appendAssistantMessage(
        node.message
      );

    };

  const handleMainMenu =
    () => {

      setHistory([]);

      setCurrentNodeId(
        ROOT_NODE
      );

      const node =
        chatData[
          ROOT_NODE
        ];

      if (!node) {

        return;

      }

      appendAssistantMessage(
        node.message
      );

    };

  const handleSubmit =
    (
      event:
        React.FormEvent<HTMLFormElement>
    ) => {

      event.preventDefault();

      const value =
        input.trim();

      if (!value) {

        return;

      }

      appendUserMessage(
        value
      );

      setInput("");

      setIsTyping(
        true
      );

      window.setTimeout(
        () => {

          setMessages(
            (
              previous
            ) => [
              ...previous,
              {
                id:
                  messageIdRef.current++,
                sender:
                  "assistant",
                text:

                                  "OpenAI responses will be connected here.",
              },
            ]
          );

          setIsTyping(
            false
          );

        },
        TYPING_DELAY
      );

    };

  return (

    <>

      <button
        className="floating-chat-button"
        onClick={() =>
          setIsOpen(
            !isOpen
          )
        }
      >

        {isOpen ? (

          <X size={24} />

        ) : (

          <Bot size={24} />

        )}

      </button>

      {isOpen && (

        <div className="floating-chat">

          <div className="floating-chat-header">

            <div className="floating-chat-title">

              <Bot size={18} />

              <span>

                AI Dental Assistant

              </span>

            </div>

            <button
              className="floating-chat-close"
              onClick={() =>
                setIsOpen(false)
              }
            >

              <X size={18} />

            </button>

          </div>

          <div className="floating-chat-body">

            {messages.map(
              (message) => (

                <div
                  key={message.id}
                  className={`chat-message ${message.sender}`}
                >

                  <div className="chat-bubble">

                    {message.text}

                  </div>

                </div>

              )
            )}

            {isTyping && (

              <div className="chat-message assistant">

                <div className="chat-bubble typing">

                  <span></span>

                  <span></span>

                  <span></span>

                </div>

              </div>

            )}

            <div
              ref={bottomRef}
            />

          </div>

          <div className="floating-chat-actions">

            <button
              type="button"
              className="chat-nav-button"
              onClick={handleBack}
              disabled={
                history.length ===
                0
              }
            >

              <ChevronLeft size={16} />

              <span>

                Back

              </span>

            </button>

            <button
              type="button"
              className="chat-nav-button"
              onClick={handleMainMenu}
            >

              <Home size={16} />

              <span>

                Main Menu

              </span>

            </button>

          </div>

          {!!currentNode?.options?.length && (

            <div className="floating-chat-options">

              {currentNode.options.map(
                (option) => (

                  <button
                    key={option.id}
                    type="button"
                    className="chat-option-button"
                    onClick={() =>
                      handleOptionClick(
                        option
                      )
                    }
                  >

                    {option.label}

                  </button>

                )
              )}

            </div>

          )}

          <form
            className="floating-chat-input"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              value={input}
              placeholder="Type your message..."
              onChange={(
                event
              ) =>
                setInput(
                  event.target.value
                )
              }
            />

            <button
              type="submit"
            >

              <Send size={18} />

            </button>

          </form>

        </div>

      )}

    </>

  );

}