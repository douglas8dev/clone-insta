import "./feed.css"
import AlexG from "../../../imagens/AlexG.jpg"
import AlexGpost from "../../../imagens/AlexGporst.jpeg"
import Tyler from "../../../imagens/Tyler.jpeg"
import TylerPost from "../../../imagens/tylerpost.jpg"
import Clairo from "../../../imagens/clairo.jpeg"
import ClairoPost from "../../../imagens/clairopost.jpg"
import LilTecca from "../../../imagens/LilTecca.jpeg"
import LilTeccaPost from "../../../imagens/lilteccapost.jpeg"

import Publicacao from "./Publicacao"
const publicacao = [
    {userNome: "clairo", user: Clairo, hora: "9h", imagem: ClairoPost},
    {userNome: "tyler", user: Tyler, hora: "1sem", imagem: TylerPost},
    {userNome: "liltecca", user: LilTecca, hora: "5s", imagem: LilTeccaPost},
    {userNome: "alexg", user: AlexG, hora: "5min", imagem: AlexGpost},

]

export default function Feed(){
    return(
        <>
        <div className="containerFeed">
        {publicacao.map((publicacao) => (
                    <Publicacao key={publicacao.user} user={publicacao.user} userNome={publicacao.userNome} hora={publicacao.hora} verificado={publicacao.verificado} imagem={publicacao.imagem} altImagem={publicacao.altImagem} />
                ))}
        </div>
        </>
    )
}