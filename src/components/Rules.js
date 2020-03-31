import React from "react";
import "../index.css";

const Rules = () => {
  return (
    <div>
      <h1 className="h1">Welcome To MLB Showdown</h1>
      <br></br>

      <h2 className="h2">What Is MLB Showdown?</h2>
      <p>
        MLB Showdown was a strategy card game that put you in the owner's box
        and the manager's seat. Every move is yours to make, from creating a
        starting lineup and bringing in a relief pitcher to calling for a steal
        and trading players. It's just like the real Major Leagues.
      </p>

      <h2 className="h2">General Concept Of The Game</h2>
      <ul>
        Two players play out the nine innings of a Major League Baseball game
        with teams from the starter deck.
      </ul>
      <ul>
        A "team" consists of at least nine "players" that fill in all of the
        field positions and at least two "pitchers" with a 20-card strategy
        deck.
      </ul>
      <ul>
        Your goal is to score more runs than your opponent does in nine innings.
      </ul>

      <h2 className="h2">Getting Started</h2>
      <ul>
        Open up the playmat and look at the layout, familiarizing yourself with
        the locations of all the cards during play. Lay the player cards on the
        playmat in their respective places, in whatever order you choose, and
        the pitchers in the bullpen. Your strategy deck goes to the left of the
        first batter.
      </ul>
      <ul>
        Your starting hand size is three. You can have as many cards in hand as
        you want.
      </ul>
      <ul>
        Each player draws a card at the beginning of each half inning, including
        the top of the first (in other words, every time there is a switch
        between offense and defense).
      </ul>
      <ul>
        Determine who goes first. Flipping a coin is the traditional method. Or,
        roll the 20-sided die (high roll goes first).
      </ul>

      <h2 className="h2">Play The Game!</h2>
      <ul>
        Player one puts forward the batter, and player two puts his or her
        pitcher in the middle of the field.
      </ul>

      <h3 className="h3">Step 1: The Pitch!</h3>
      <ul>
        The pitcher's player rolls the 20-sided die and adds the die roll to the
        Control of the pitcher.
      </ul>
      <ul>
        If the result is greater then the On-Base value of the hitter, then the
        pitcher made a good pitch.
      </ul>
      <ul>
        If the result is less than or equal to the On-Base value of the hitter,
        the pitcher made a bad pitch (for him at least).
      </ul>

      <h3 className="h3">Step 2: The Swing!</h3>
      <ul>
        The player on offense then rolls the 20-sided die to see the results. If
        the pitch was good (die + Control is greater than hitter's On-Base),
        look for the results on the pitcher's chart in the lower right-hand
        corner of the card.
      </ul>
      <ul>
        If the pitch was bad, then look for the swing result on the batter's
        chart.
      </ul>
      <ul>
        If the batter gets on base, move his card to the appropriate base. If
        the batter makes an "out," put the card back in the player's lineup spot
        and flip the card over to help you remember that the player is out. If
        the offensive team gets three "outs," the pitcher's team comes up to
        bat.
      </ul>
      <ul>
        Once both teams have made three outs, the inning is over and the
        original hitting team continues with the next player from the lineup.
      </ul>

      <h2>The Strategy Cards</h2>
      <ul>
        Offensive (red) and Defensive (blue) cards can be used when you are on
        the offense or the defense, respectively. The cards tell you when you
        can play them and what they do to affect the game.
      </ul>
      <ul>
        Utility Cards can be played when you are on either defense or offense.
        As above, the cards tell you when you can use them and how they affect
        the game.
      </ul>
    </div>
  );
};

export default Rules;
