import styles from "./Main.module.css"
import { useState, useEffect } from "react"

function Main() {

  const roll = [
{
 id: 1,
 imagem: " ",
 titulo: "Casas"
 },
{
  id: 2,
  imagem: " ",
  titulo: "Apartamentos"
},
{
  id: 3,
  imagem: " ",
  titulo: "Barraco"
  },
  {
  id: 4,
  imagem: " ",
  titulo: "Hotel"
  }];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);

function proximo() {

    setIndex1((prev) => (prev + 1) % roll.length);
    setIndex2((prev) => (prev + 1) % roll.length);
  }
function voltar() {
    
   setIndex1((prev) => (prev - 1 + roll.length) % roll.length);
   setIndex2((prev) => (prev - 1 + roll.length) % roll.length);
  }
   useEffect(() => {

    const timer = setInterval(() => {

      setIndex1((prev) => (prev + 1) % roll.length);
      setIndex2((prev) => (prev + 1) % roll.length);
    }, 4000);

    return () => clearInterval(timer);

  }, []);

  return (

    <main>

      <div className={styles.Main} id="propriedades">

        <h1>Melhores Imóveis do Momento!!</h1>

      </div>

      <div className={styles.correr}>

        <button className={styles.btn} onClick={voltar}></button>

        <div className={styles.quad}>
          <img src={roll[index1].imagem}/>
          <h2>{roll[index1].titulo}</h2>
        </div>

        <div className={styles.quad}>
          <img src={roll[index2].imagem}/>
          <h2>{roll[index2].titulo}</h2>
        </div>

        <button className={styles.btn} onClick={proximo}></button>

      </div>

    </main>
     )};

export default Main