import React, { useEffect, useRef } from 'react';
import Story from './Story';
import './Story.css';
import Gabriel from '../../../imagens/Gabriel.jpg';
import Aurora from '../../../imagens/Aurora.jpg';
import Proa from '../../../imagens/Proa.png';
import Clairo from '../../../imagens/clairo.jpeg'
import BigRush from '../../../imagens/BigRush.jpg'
import RyanGosling from '../../../imagens/RyanGosling.jpg'
import LilTecca from '../../../imagens/LilTecca.jpeg'
import Tyler from '../../../imagens/Tyler.jpeg'
import Michael from '../../../imagens/michael.jpeg'
import Carti from '../../../imagens/Carti.jpg'
import Mosey from '../../../imagens/Mosey.jpg'
import Beaba from '../../../imagens/beaba.jpeg'

const usuarios = [
    { nome: "Proa", foto: Proa, cf: true },
    { nome: "Aurora", foto: Aurora, cf: false },
    { nome: "clairo", foto: Clairo, cf: true },
    { nome: "ogbigrush", foto: BigRush, cf: false },
    { nome: "ryangosling", foto: RyanGosling, cf: true },
    { nome: "gabriel", foto: Gabriel, cf: true },
    { nome: "liltecca", foto: LilTecca, cf: true },
    { nome: "tyler", foto: Tyler, cf: false },
    { nome: "michaelcera", foto: Michael, cf: true },
    { nome: "playboicarti", foto: Carti, cf: false },
    { nome: "lilmosey", foto: Mosey, cf: false },
    { nome: "beabadoobee", foto: Beaba, cf: false },
];

export default function Stories() {
    const esquerdaRef = useRef(null);
    const direitaRef = useRef(null);
    const conteudoStoryRef = useRef(null);

    useEffect(() => {
        const direita = direitaRef.current;
        const esquerda = esquerdaRef.current;
        const conteudoStory = conteudoStoryRef.current;

        const updateButtonVisibility = () => {
            if (conteudoStory.scrollLeft === 0) {
                esquerda.style.display = 'none';
            } else {
                esquerda.style.display = 'block';
            }

            if (conteudoStory.scrollLeft + conteudoStory.clientWidth >= conteudoStory.scrollWidth) {
                direita.style.display = 'none';
            } else {
                direita.style.display = 'block';
            }
        };

        const clickDireita = () => {
            conteudoStory.scrollBy({ left: 120, behavior: 'smooth' });
        };

        const clickEsquerda = () => {
            conteudoStory.scrollBy({ left: -120, behavior: 'smooth' });
        };

        direita.addEventListener('click', clickDireita);
        esquerda.addEventListener('click', clickEsquerda);
        conteudoStory.addEventListener('scroll', updateButtonVisibility);

        // Inicializa a visibilidade dos botões
        updateButtonVisibility();

        return () => {
            direita.removeEventListener('click', clickDireita);
            esquerda.removeEventListener('click', clickEsquerda);
            conteudoStory.removeEventListener('scroll', updateButtonVisibility);
        };
    }, []);

    return (
        <>
            <div className='containerStory'>
            <div id='conteudoStory' ref={conteudoStoryRef} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {usuarios.map((user) => (
                    <Story key={user.id} nome={user.nome} foto={user.foto} cf={user.cf} />
                    
                ))}
                
                    <div className='existente'>
                <button id="esquerda" ref={esquerdaRef}>&lt;</button>
                </div>
                <div className='existente direita'>
                <button id="direita" ref={direitaRef}>&gt;</button>
                </div>
            </div>
            </div>
            
        </>
    );
}