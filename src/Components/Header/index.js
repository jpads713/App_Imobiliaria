import styles from "./Header.module.css";
import logo from "../../imagens/OneBit_Imob.png";
import nav from "../../imagens/nav (2).png";

function Header() {
  return (

    <header>
      
      <div className={styles.header} id="topo">

      <div className={styles.div_logo}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.titulo}>OneBit Imóveis</h1>
      </div>

     <div className={styles.nav}>

      <a href="#topo">Home</a>
      <a href=" ">Propriedades</a>
      <a href=" ">Sobre</a>
      <a href=" ">Contato</a>

     </div>
     </div>

     <div className={styles.cta}>

      <h1>OneBit Imóveis</h1>
      <p>Encontre o imóvel dos seus sonhos com a melhor do mecado!!</p>
      <a href=" ">Buscar Imóveis ➔</a>
      
     </div>


    </header>
   

    
  );
}

export default Header;