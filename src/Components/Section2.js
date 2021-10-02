import React,{useState} from "react";
import Notes from "../assets/notepad.png"
import PPT from "../assets/ppt.png"
import Quiz from "../assets/quiz.png"

function Section2() {

    const [Card, setCard] = useState([
        {
            image: Notes,
            title: "Accurate Notes",
            body: "Includes designed Mindmaps and puzzles"
        },
        {
            image: PPT,
            title: "Animated PPT",
            body: "Includes textbook questions and examples"
        },
        {
            image: Quiz,
            title: "Topicwise Quiz",
            body: "Includes MCQ Paper 1 type questions"
        }
    ])

  return (
    <div className="section2">
      <h1>FEATURES</h1>
      <div className="body">
        <div>Chemswot Offers the Following Main Benifits</div>
        <div>
          Our Resources will help you achieve your dream Ib diploma score by our
          accurate topic detail capturing
        </div>
      </div>
      <div className="card-header">
          {Card.map((card,index)=>{
              return (
                    <div className="card" key={index}>
                        <img src={card.image} alt=""/>
                        <div className="title">{card.title}</div>
                        <div className="body">{card.body}</div>
                    </div>        
                )
          })}
      </div>
    </div>
  );
}

export default Section2;
