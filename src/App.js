import React from 'react';
import Menu from './components/Menu';
import Cuerpo from './components/Principal.jsx';
import Formulario from './components/Formulario.jsx';
import Flayer2 from './components/Flayer2.jsx';
import Flayer3 from './components/Flayer3.jsx';
import Flayer4 from './components/Flayer4.jsx';
import Pie from './components/Pie.jsx';
function App() {
    return (
        <div>
            <Menu/>
            <Cuerpo/>
            <Flayer2/>
            <Formulario/>
            <Flayer3/>
            <Flayer4/>
            <Pie/>
            
        </div>
    );
}

export default App;