import "./style.module.css";

import Header from "../../components/header/header";
import Layout from "../../components/layout/layout";

import Bg1 from "../../assets/bg/bg1.jpg";
// import Bg2 from "../../assets/bg/bg2.jpg";
import Bg3 from "../../assets/bg/bg3.jpg";

const HomePage = ({ onChangePage }) => {
  const handleClickButton = () => {
    onChangePage && onChangePage("game");
  };
  return (
    <>
      <Header
        id='start'
        title='Pokemon Game'
        onClickButton={handleClickButton}
      >
        <p>This is simple triple triad game</p>
        </Header>
      <Layout id='rules' title='Rules' urlBg={Bg3}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" ob a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.
        </p>
      </Layout>
      {/* <Layout
        id='cards'
        title='Cards'
        colorTitle={"#FEFEFE"}
        colorBg={"#202736"}
      >
        <div className='flex'>
          {POKEMONS.map((item) => (
            <PokemonCard
              key={item.id}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
            />
          ))}
        </div>
      </Layout> */}
      <Layout id='about' title='Full rules' urlBg={Bg1}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" ob a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue
        </p>
      </Layout>
    </>
  );
};

export default HomePage;
