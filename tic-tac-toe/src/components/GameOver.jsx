/* eslint-disable react/prop-types */
import GameState from "./GameState";

const GameOver = ({ gameState }) => {
    switch(gameState) {
        case GameState.inProgress:
            return ( <></> );
        
        case GameState.playerOWins: {
            return ( <div className="game-over">Player O Wins</div> );
        }

        case GameState.playerXWins: {
            return ( <div className="game-over">Player X Wins</div> );
        }

        case GameState.draw: {
            return ( <div className="game-over">{`It's a draw!`}</div> );
        }
    }
}

export default GameOver;