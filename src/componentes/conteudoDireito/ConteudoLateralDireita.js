import Douglas from "../../imagens/Douglas.jpeg"
import Orochi from "../../imagens/Orochi.jpg"
import MacMiller from "../../imagens/macmiller.jpeg"
import Vgod from "../../imagens/vgod.jpg"
import Kyan from "../../imagens/kyan.jpg"
import Ismeiow from "../../imagens/Ismeiow.png"
import "./direita.css"
export default function Direita() {
    return (
        <>
            <div className="conteudoDireita">
                <div className="conta">
                    <img src={Douglas} alt="Usuario"></img>
                    <div>
                        <p>Douglas</p>
                        <small>dougl8s</small>
                    </div>

                    <a href="#">Mudar</a>
                </div>
                <p>Sugestões para você</p>
                <div className="conta">
                    <img src={Orochi} alt="Usuario"></img>
                    <div>
                        <p>orochipedro</p>
                        <small>sugestão patrocinada</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={MacMiller} alt="Usuario"></img>
                    <div>
                        <p>macmiller</p>
                        <small>Sugestão para você</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={Vgod} alt="Usuario"></img>
                    <div>
                        <p>vgod</p>
                        <small>Sugestão para você</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={Kyan} alt="Usuario"></img>
                    <div>
                        <p>kyanmaloka </p>
                        <small> 3 Pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Imprensa</a></li>
                    <li><a href="#">Api</a></li>
                    <li><a href="#">Carreiras</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Termos</a></li>
                    <li><a href="#">Localização</a></li>
                    <li><a href="#">Idiomas</a></li>
                    <li><a href="#">verificado</a></li>
                </ul>

                <p>&copy; 2024 INSTAGRAM DO PROA</p>
            </div>
        </>
    )
}