import styles from "./Main.module.css"
import { useState, useEffect } from "react"
import casa01 from "../../imagens/casa01.png";
import casa02 from "../../imagens/casa02.png";
import casa03 from "../../imagens/casa03.png";
import casa04 from "../../imagens/casa04.png";
import casa05 from "../../imagens/casa05.png";
 
function Main() {

  const roll = [

  {
    id: 1,
    img: casa01,
    tit: "Saiba Mais"
  },
  {
    id: 2,
    img: casa02,
    tit: "Saiba Mais"
  },
  {
    id: 3,
    img: casa03,
    tit: "Saiba Mais"
  },
  {
    id: 4,
    img: casa04,
    tit: "Saiba Mais"
  },
  {
    id: 5,
    img: casa05,
    tit: "Saiba Mais"
  }];

  const [index, setIndex] = useState(0);

  function proximo() {
    setIndex((prev) => (prev + 1) % roll.length);
  }
  function voltar() {
    setIndex((prev) => (prev - 1 + roll.length) % roll.length);
  }
   


  return (

    <main>

      <div className={styles.Main}>
        <h1 id="propriedades">Alguns de Nossos Imóveis!!</h1>
      </div>

      <div className={styles.correr}>

        <button className={styles.btn} onClick={voltar}>🠔</button>

        <div className={styles.quad}>
          <img src={roll[index % roll.length].img} />
          <a></a><h2>{roll[index % roll.length].tit}</h2>
        </div>

        <div className={styles.quad}>
          <img src={roll[(index + 1) % roll.length].img} />
         <a> <h2>{roll[(index + 1) % roll.length].tit}</h2></a>
        </div>

        <div className={styles.quad}>
          <img src={roll[(index + 2) % roll.length].img} />
          <a><h2>{roll[(index + 2) % roll.length].tit}</h2></a>
        </div>

        <button className={styles.btn} onClick={proximo}>➞</button>

      </div>

    </main>
  )};

export default Main