import "./styles.css";
import ReactWhatsapp from "react-whatsapp";

import FloatingWhatsApp from "react-floating-whatsapp";
import "react-floating-whatsapp/dist/index.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ReactWhatsapp number="+905366030997" message="Hello World!!!" />
      <FloatingWhatsApp phoneNumber="905366030997" />
    </div>
  );
}
