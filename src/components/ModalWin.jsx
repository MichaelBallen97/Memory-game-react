import Confetti from "react-confetti";
import "./../assets/winner-modal.css";

function ModalWin({ winner, resetCards, resetTable }) {
	
	const handleClick = () => {
		resetCards();
		resetTable();
	};

	if (winner) {
		return (
			<section className="winner-modal">
				<Confetti />
				<h2> Congratulations, you have won! </h2>
				<button onClick={handleClick}>Reset Game</button>
			</section>
		);
	}
}

export default ModalWin;
