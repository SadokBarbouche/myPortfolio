import React from "react";
import { Container } from "react-bootstrap";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

export default function LandingPage() {
    const {text} = useTypewriter({
        words: [' an ICT engineering Student @INSAT', ' a Web developer', '  a ML enthusiast', ' currently learning mobile development',' open to work'],
        loop: "0",
      })
      const screenHeight = window.screen.availHeight+"px";
    return (
    <div style={{height:screenHeight,display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"black"}}>
    <div className="py-5">
      <Container className="mt-5 pt-5 text-start" >
        <h1 className="display-1 fw-bolder" style={{color:"white",marginTop:"100px"}}>
          Sadok Barbouche
          <h1>
            I am
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
             {text}
             <Cursor cursorStyle="_"/>
            </span>
          </h1>
        </h1>
      </Container>
    </div>
    </div>
  );
}
