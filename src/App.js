import { useState } from "react";
import axios from "axios";
import Index from "./Components/index";
import { Container, H2, InputMain, Buttons } from "./Components/styles";

export default function App() {
  const [input, setinput] = useState("");
  const [endereco, setendereco] = useState();

  const Api = `https://viacep.com.br/ws/${input}/json/`;

  function getCep() {
    axios.get(Api).then((res) => {
      if (input.length > 6) {
        setendereco({
          rua: res.data.logradouro,
          bairro: res.data.bairro,
          cidade: res.data.localidade,
          uf: res.data.uf
        });
        setinput("");
      }
    });
  }

  function close() {
    setendereco(undefined);
  }

  return (
    <Container>
      <div>
        <H2>Correios</H2>
        <InputMain
          placeholder="Digite seu cep"
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
        <Buttons onClick={() => getCep()}>Buscar</Buttons>
        <Buttons onClick={() => close()}>Fechar</Buttons>
        {endereco !== undefined && (
          <Index
            rua={endereco.rua}
            bairro={endereco.bairro}
            cidade={endereco.cidade}
            uf={endereco.uf}
          />
        )}
      </div>
    </Container>
  );
}
