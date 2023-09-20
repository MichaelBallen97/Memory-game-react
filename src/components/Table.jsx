import Card from "./Card";
import "./../assets/table.css"
import ModalWin from "./ModalWin";
import useTable from "../hooks/useTable";

function Table() {
  const { winner, resetCards, resetTable, cards, handleSelect } = useTable();  
  
	return (
    <>
      <ModalWin winner={winner} resetCards={resetCards} resetTable={resetTable} />
      <section className="main-table">
        {cards.map((card, i) => (
          <Card key={i} card={card} handleSelect={handleSelect} />
        ))}
      </section>
    </>
	);
}

export default Table;
