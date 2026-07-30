import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Bot,
  ChevronLeft,
  Home,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";

import {
  chatData,
} from "./chatData";

import type {
  ChatNode,
  ChatOption,
} from "./chatData";

import "./FloatingChat.css";


type Sender =
  | "assistant"
  | "user";


type Message = {

  id:number;

  sender:Sender;

  text:string;

};


const ROOT_NODE = "welcome";

const TYPING_DELAY = 700;


export default function FloatingChat() {


  const [

    isOpen,

    setIsOpen,

  ] = useState(false);



  const [

    showOptions,

    setShowOptions,

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

    useRef<HTMLDivElement | null>(null);



  const initialized =

    useRef(false);



  const currentNode:

    | ChatNode

    | undefined = useMemo(

      () =>

        chatData[currentNodeId],

      [

        currentNodeId,

      ]

    );



  useEffect(() => {


    if (!isOpen) {

      return;

    }


    if (initialized.current) {

      return;

    }


    initialized.current = true;


    const welcome =

      chatData[ROOT_NODE];


    if (!welcome) {

      return;

    }


    setMessages([

      {

        id:

          messageIdRef.current++,

        sender:

          "assistant",

        text:

          welcome.message,

      },

    ]);


  }, [

    isOpen,

  ]);

    useEffect(() => {

    if (!isOpen) {

      return;

    }


    bottomRef.current?.scrollIntoView({

      behavior:

        "smooth",

      block:

        "nearest",

    });


  }, [

    messages,

    isTyping,

  ]);



  function addAssistantMessage(

    text:string

  ) {


    setIsTyping(true);


    window.setTimeout(() => {


      setMessages(

        previous => [

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


      setIsTyping(false);


    }, TYPING_DELAY);


  }



  function addUserMessage(

    text:string

  ) {


    setMessages(

      previous => [

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


  }



  function handleStartConversation() {


    setShowOptions(true);


  }



  function navigateToNode(

    nodeId:string

  ) {


    const node =

      chatData[nodeId];



    if (!node) {

      return;

    }



    setHistory(

      previous => [

        ...previous,

        currentNodeId,

      ]

    );



    setCurrentNodeId(

      nodeId

    );



    addAssistantMessage(

      node.message

    );


  }



  function handleOptionClick(

    option:ChatOption

  ) {


    addUserMessage(

      option.label

    );


    navigateToNode(

      option.id

    );


  }



    function handleBack() {


    if (

      history.length === 0

    ) {

      return;

    }



    const previousNode =

      history[

        history.length - 1

      ];



    const node =

      chatData[previousNode];



    setHistory(

      previous =>

        previous.slice(

          0,

          -1

        )

    );



    setCurrentNodeId(

      previousNode

    );



    if (node) {


      addAssistantMessage(

        node.message

      );


    }


  }



  function handleMainMenu() {


    const node =

      chatData[ROOT_NODE];



    setHistory([]);



    setCurrentNodeId(

      ROOT_NODE

    );



    setShowOptions(false);



    if (node) {


      addAssistantMessage(

        node.message

      );


    }


  }



  function handleSubmit(

    event:

      React.FormEvent<HTMLFormElement>

  ) {


    event.preventDefault();



    const value =

      input.trim();



    if (!value) {

      return;

    }



    addUserMessage(

      value

    );



    setInput("");



    addAssistantMessage(

      "OpenAI responses will be connected here."

    );


  }



  return (

    <>



      <button

        className="floating-chat-button"

        onClick={() =>

          setIsOpen(

            previous =>

              !previous

          )

        }

      >


        {isOpen ? (


          <X size={26} />


        ) : (


          <Bot size={28} />


        )}


      </button>




      {isOpen && (


        <div className="floating-chat open">



          <div className="floating-chat-header">



            <div className="chat-title">



              <div className="chat-avatar">


                <Bot size={24} />


              </div>



              <div>



                <h3>

                  AI Dental Assistant

                </h3>



                <span>

                  Online • Usually replies within 24 hours

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


            {messages.map(

              message => (


                <div

                  key={message.id}

                  className={

                    message.sender === "assistant"

                      ? "assistant-message"

                      : "user-message"

                  }

                >

                  <p>

                    {message.text}

                  </p>


                </div>


              )

            )}



            {isTyping && (


              <div className="assistant-message typing">


                <div className="typing-dots">


                  <span />

                  <span />

                  <span />


                </div>


              </div>


            )}



            {!showOptions && currentNodeId === ROOT_NODE && (


              <button

                type="button"

                className="chat-start-button"

                onClick={handleStartConversation}

              >

                💬 Start Conversation

              </button>


            )}



            {showOptions && !!currentNode?.options?.length && (


              <div className="floating-chat-options">


                {currentNode.options.map(


                  option => (


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



            <div className="floating-chat-actions">


              <button

                type="button"

                className="chat-nav-button"

                onClick={handleBack}

                disabled={

                  history.length === 0

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



            <div

              ref={bottomRef}

            />


          </div>

                    <div className="floating-chat-footer">


            <div className="chat-security">


              <ShieldCheck size={14} />


              <span>

                Secure & Private Conversation

              </span>


            </div>



            <form

              className="chat-input"

              onSubmit={handleSubmit}

            >


              <input


                type="text"


                value={input}


                placeholder="Type your message..."


                onChange={event =>

                  setInput(

                    event.target.value

                  )

                }


              />



              <button

                type="submit"

                aria-label="Send message"

              >


                <Send size={18} />


              </button>



            </form>



          </div>



        </div>


      )}



    </>

  );

}

