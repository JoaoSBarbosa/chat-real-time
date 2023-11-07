import { useState } from "react";

export const Chat = () => {
  const [message, updateMessage] = useState("");
  const [messages, updateMessages] = useState([]);

  const handleInputChange = (event) => {
    updateMessage(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // entra nessa condição apenas se a mensagem não estiver vazia
    if (message.trim()) {
      //adicionando no array de mensagens a mensagen anterior, mas o valor enviando que está no state message
      updateMessages([
        ...messages,
        {
          id: 1,
          message,
        },
      ]);
      updateMessage("");
    }
  };

  return (
    <main className="container">
      <ul className="list">
        {messages.map((m) => (
          <li className="list__item list__item--mine">
            <span key={m.id} className="message message--mine">
              {m.message}
            </span>
          </li>
        ))}
      </ul>

      <form className="form" onSubmit={handleFormSubmit}>
        <input
          className="form__field"
          placeholder="Digite uma mensagem..."
          type="text"
          onChange={handleInputChange}
          value={message}
        ></input>
      </form>
    </main>
  );
};
