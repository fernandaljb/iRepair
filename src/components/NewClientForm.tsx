import { useState } from "react";
import { type Client, type NewClient } from "../types/client";
import { createClient } from "../services/clientService";

interface NewClientFormProps {
  aoCadastrar: (novosetClientId: Client) => void;
}

export function NewClientForm({ aoCadastrar }: NewClientFormProps) {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");

  const salvar = async () => {
    const dadossetClientId: NewClient = {
      name: name,
      email: email,
      phone: phone,
    };

    try {
      const setClientIdSalvo = await createClient(dadossetClientId);
      aoCadastrar(setClientIdSalvo); // Avisa a página que o setClientId foi criado

      // Limpa os campos
      setname("");
      setEmail("");
      setphone("");
    } catch (error) {
      alert("Erro");
    }
  };

  return (
    <div className="bg-black p-6 border border-white ">
      <h2 className="text-xl font-bold text-white">NOVO setClientId</h2>

      <input
        className="w-full border border-white p-2 text-white"
        placeholder="Nome"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <input
        className="w-full border border-white p-2 text-white "
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border border-white p-2 text-white"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />

      <button
        onClick={salvar}
        className="w-full bg-white text-black font-bold py-2 cursor-pointer"
      >
        CADASTRAR setClientId
      </button>
    </div>
  );
}
