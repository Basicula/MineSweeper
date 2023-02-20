import GameField from "./GameField"
import GameMenu from "./GameMenu"

export default function MineSweeper() {
  return (
    <div className="main-container">
      <GameMenu />
      <GameField />
    </div>
  );
}
