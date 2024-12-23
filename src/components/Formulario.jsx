import React from "react";
function Formulario (props){
    return(
        <section className='section-3'>
                <div >
                    <aside className='imagen-izquierda'></aside>
                    <aside className='form-derecho'>
                        <h4>QUOTATION</h4>
                        <h1>Moving the Way You Want</h1>
                        <span className='inputs'>
                            <span>
                                <input type="text" placeholder='Your name' />
                                <input type="text" placeholder='Phone number' />
                                <input type="text" placeholder='Departure city' />
                                <input type="text" placeholder='Weight' />
                            </span>
                            <span>
                                <input type="text"  placeholder='Your email'/>
                                <select name="" id="" placeholder='Freight Type'>
                                    <option value="Freight Type">Freight Type</option>
                                    <option value="Air Freight">Air Freight</option>
                                    <option value="Road Freight">Road Freight</option>
                                    <option value="Ocean Freight">Ocean Freight</option>
                                    <option value="Rail Freight">Rail Freight</option>
                                </select>
                                <input type="text" placeholder='Delivery city' />
                                <input type="text" placeholder='Volume' />
                            </span>
                        </span>
                        <button className='form-i'> Get a Quote</button>
                    </aside>
                </div>
            </section>
    );
}
export default Formulario;