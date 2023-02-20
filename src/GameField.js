import { useState } from "react";

function generate_game_field() {

}

export default function GameField() {
  const [field_data, set_field_data] = useState(generate_game_field())

  return (
    <div className="game-field">
      GameField
    </div>
  );
}