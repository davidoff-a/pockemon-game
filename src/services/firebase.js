import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSuBNH2L_gnpqS_sBSTLLaBWVMLBti1Yg",
  authDomain: "pokemon-game-84059.firebaseapp.com",
  databaseURL: "https://pokemon-game-84059-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-84059",
  storageBucket: "pokemon-game-84059.appspot.com",
  messagingSenderId: "598641835477",
  appId: "1:598641835477:web:8f636de397a72e1f49915c",
};

firebase.initializeApp(firebaseConfig);
class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    });
  };

  offPokemonSoket = () => {
    this.database.ref("pokemons").off();
  };

  postPokemon = (key, pokemon) => {
    this.database.ref("pokemons/" + key).set(pokemon);
  };

  addPokemon = (pokemon, cb) => {
    const newKey = this.database.ref().child("pokemons").push().key;
    this.database
      .ref("pokemons/" + newKey)
      .set(pokemon)
      .then(() => cb());
  };
}

export default Firebase;
