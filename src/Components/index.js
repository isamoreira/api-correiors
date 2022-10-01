import React from "react";
import { Input } from "./styles";

export default function index({ rua, bairro, cidade, uf }) {
  return (
    <div>
      <Input value={rua} />
      <Input value={bairro} />
      <Input value={cidade} />
      <Input value={uf} />
    </div>
  );
}
