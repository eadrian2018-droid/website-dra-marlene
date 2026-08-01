import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Bot,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";


import {
  chatData,
} from "./chatData";


import type {
  ChatOption,
} from "./chatData";


import {
  sendContactEmail,
} from "../../services/email";


import {
  useLanguage,
} from "../../context/LanguageContext";


import "./FloatingChat.css";



type Sender =
  | "assistant"
  | "user";



type Message = {

  id:number;

  sender:Sender;

  text:string;

  options?:ChatOption[];

};



type ConsultationStep =

  | "none"

  | "name"

  | "phone"

  | "email"

  | "contactMethod"

  | "facebook"

  | "treatment"

  | "message";




type LeadData = {

  name:string;

  phone:string;

  email:string;

  contactMethod:string;

  facebookProfile:string;

  treatment:string;

  message:string;

};




const ROOT_NODE = "welcome";


const TYPING_DELAY = 600;





export default function FloatingChat(){



  const {
    language,
  } = useLanguage();




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
    messages,
    setMessages,
  ] = useState<Message[]>([]);




  const [
    consultationStep,
    setConsultationStep,
  ] = useState<ConsultationStep>("none");




  const [
    leadData,
    setLeadData,
  ] = useState<LeadData>({

    name:"",

    phone:"",

    email:"",

    contactMethod:"",

    facebookProfile:"",

    treatment:"",

    message:"",

  });





  const messageIdRef =

    useRef(1);




  const bottomRef =

    useRef<HTMLDivElement | null>(null);




  const initialized =

    useRef(false);





  useEffect(() => {


    if (!isOpen) {

      return;

    }



    bottomRef.current?.scrollIntoView({

      behavior:"smooth",

      block:"end",

    });



  }, [

    messages,

    isTyping,

    isOpen,

  ]);





  useEffect(() => {


    if (initialized.current) {

      return;

    }



    initialized.current = true;



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


        text:

          node.message[language],


        options:

          node.options,

      },

    ]);



  }, [language]);


    const addAssistantMessage = (

    text:string,

    options?:ChatOption[]

  ) => {


    setIsTyping(true);



    window.setTimeout(() => {


      setMessages(previous => [


        ...previous,


        {

          id:

            messageIdRef.current++,


          sender:

            "assistant",


          text,


          options,

        },


      ]);



      setIsTyping(false);



    }, TYPING_DELAY);



  };








  const addUserMessage = (

    text:string

  ) => {


    setMessages(previous => [


      ...previous,


      {

        id:

          messageIdRef.current++,


        sender:

          "user",


        text,

      },


    ]);



  };









  const navigateToNode = (

    nodeId:string

  ) => {


    const node =

      chatData[nodeId];



    if (!node) {

      return;

    }



    addAssistantMessage(

      node.message[language],

      node.options

    );


  };









  const handleOptionClick = (

    option:ChatOption

  ) => {


    addUserMessage(

      option.label[language]

    );



    if (option.id === "freeSmileConsultation") {


      setConsultationStep("name");


      addAssistantMessage(

        chatData.freeSmileConsultation.message[language]

      );


      return;

    }



    navigateToNode(

      option.id

    );


  };









  const handleConsultationFlow = (

    value:string

  ) => {


    switch(consultationStep){



      case "name":


        setLeadData(previous => ({


          ...previous,


          name:value,


        }));



        setConsultationStep("phone");



        addAssistantMessage(

          chatData.consultationPhone.message[language]

        );


        break;





      case "phone":


        setLeadData(previous => ({


          ...previous,


          phone:value,


        }));



        setConsultationStep("email");



        addAssistantMessage(

          chatData.consultationEmail.message[language]

        );


        break;





      case "email":


        setLeadData(previous => ({


          ...previous,


          email:value,


        }));



        setConsultationStep("contactMethod");



        addAssistantMessage(

          chatData.consultationContactMethod.message[language],

          chatData.consultationContactMethod.options

        );


        break;





      case "facebook":


        setLeadData(previous => ({


          ...previous,


          facebookProfile:value,


        }));



        setConsultationStep("treatment");



        addAssistantMessage(

          chatData.consultationTreatment.message[language],

          chatData.consultationTreatment.options

        );


        break;





      case "message":


        setLeadData(previous => ({


          ...previous,


          message:value,


        }));



        sendConsultationEmail({

          ...leadData,

          message:value,

        });


        break;



      default:

        break;


    }


  };









  const handleConsultationOption = (

    option:ChatOption

  ) => {



    addUserMessage(

      option.label[language]

    );





    switch(option.id){



      case "whatsappContact":

      case "phoneContact":

      case "emailContact":



        setLeadData(previous => ({


          ...previous,


          contactMethod:

            option.label[language],


        }));



        setConsultationStep("treatment");



        addAssistantMessage(

          chatData.consultationTreatment.message[language],

          chatData.consultationTreatment.options

        );



        break;





      case "facebookContact":



        setLeadData(previous => ({


          ...previous,


          contactMethod:

            option.label[language],


        }));



        setConsultationStep("facebook");



        addAssistantMessage(

          chatData.consultationFacebook.message[language]

        );



        break;





      case "implantInterest":

      case "cosmeticInterest":

      case "veneerInterest":

      case "crownInterest":

      case "generalInterest":

      case "notSureInterest":



        setLeadData(previous => {


          const finalLead = {


            ...previous,


            treatment:

              option.label[language],


            message:

              "Patient requested a free smile consultation.",


          };



          sendConsultationEmail(finalLead);



          return finalLead;


        });



        break;





      default:


        navigateToNode(

          option.id

        );


        break;


    }


  };









  const sendConsultationEmail = async (

    data:LeadData

  ) => {


    await sendContactEmail({

      name:data.name,

      email:data.email,

      phone:data.phone,

      contactMethod:data.contactMethod,

      facebookProfile:data.facebookProfile,

      treatment:data.treatment,

      message:data.message,

    });



    addAssistantMessage(

      chatData.consultationComplete.message[language],

      chatData.consultationComplete.options

    );



    setConsultationStep("none");


  };

    const handleSubmit = (

    event:React.FormEvent<HTMLFormElement>

  ) => {


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



    if (consultationStep !== "none") {


      handleConsultationFlow(

        value

      );


      return;

    }



    addAssistantMessage(

      language === "en"

        ? "Thank you for your message. I'll be happy to help you."

        : "Gracias por tu mensaje. Será un gusto ayudarte."

    );


  };








  return (

    <>


      <button

        className="floating-chat-button"

        onClick={() =>

          setIsOpen(

            previous => !previous

          )

        }

      >

        {isOpen ? (

          <X size={24} />

        ) : (

          <Bot size={26} />

        )}

      </button>







      {isOpen && (



        <div className="floating-chat open">





          <div className="floating-chat-header">



            <div className="chat-title">



              <div className="chat-avatar">


                <Bot size={20} />


              </div>





              <div>


                <h3>

                  AI Dental Assistant

                </h3>


                <span>

                  {language === "en"

                    ? "Online • Helping patients worldwide"

                    : "En línea • Ayudando pacientes internacionales"

                  }

                </span>


              </div>



            </div>






            <button

              className="chat-close"

              onClick={() =>

                setIsOpen(false)

              }

            >

              <X size={17} />

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





                  {message.options && (


                    <div className="chat-message-options">



                      {message.options.map(



                        option => (



                          <button


                            key={option.id}


                            type="button"


                            className="chat-option-button"



                            onClick={() => {


                              if (

                                consultationStep === "contactMethod" ||

                                consultationStep === "treatment"

                              ) {


                                handleConsultationOption(

                                  option

                                );


                              } else {


                                handleOptionClick(

                                  option

                                );


                              }



                            }}


                          >


                            {option.label[language]}


                          </button>



                        )


                      )}



                    </div>

                  )}



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





            <div ref={bottomRef} />


          </div>







          <div className="floating-chat-footer">



            <div className="chat-security">



              <ShieldCheck size={13} />



              <span>

                {language === "en"

                  ? "Secure & Private Conversation"

                  : "Conversación Segura y Privada"

                }

              </span>



            </div>







            <form


              className="chat-input"


              onSubmit={handleSubmit}


            >



              <input



                type="text"



                value={input}



                placeholder={

                  language === "en"

                    ? "Type your message..."

                    : "Escribe tu mensaje..."

                }



                onChange={(event) =>



                  setInput(

                    event.target.value

                  )



                }



              />







              <button type="submit">



                <Send size={17} />



              </button>





            </form>




          </div>







        </div>



      )}



    </>


  );


}