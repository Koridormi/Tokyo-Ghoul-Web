import {Personaje} from './components/personajes/Personaje.jsx';

function App() {
    const titulo = 'Bienvenidos a Tokyo Ghoul Web';
    const primerPersonaje = 'Haise Sasaki';
    const segundoPersonaje = 'Ken Kaneki';

    return (
        <main className='inicio'>
            <h1 className='inicio__titulo'>{titulo}</h1>
            <Personaje nombrePersonaje={primerPersonaje} descripcionPersonaje='Un investigador de la CCG'></Personaje>
            <Personaje nombrePersonaje={segundoPersonaje} descripcionPersonaje='Un estudiante universitario'></Personaje>
        </main>
    );
};

export {App};
// export default App; <-- Export por defecto