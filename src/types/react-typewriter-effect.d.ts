declare module "react-typewriter-effect" {
  import React from "react";

  interface TypewriterProps {
    text: string;
    cursorColor?: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    delay?: number;
  }

  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}
