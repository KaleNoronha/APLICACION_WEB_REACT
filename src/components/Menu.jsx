import React from 'react';

function Menu(props) {


    
    return (
        <header className='encabezado'>
            <div className='encabezado-p1' >
                <div className='conten-izquierdo'>
                    <a href="www" className='icon-izquierdo'><span class="icon-[arcticons--mapsgeobookmarks] mr-1 icon-color"></span>034 Erling Knolls, Dakota 8902</a>
                    <a href="www"><span class="icon-[octicon--mail] mr-1 icon-color"></span>hauler.info@mail.com </a>
                </div>
                <div className='conten-derecho'>

                    <a href="www"><span class="icon-[bxl--facebook] "></span></a>
                    <a href="www"><span class="icon-[ci--twitter]"></span></a>
                    <a href="www"><span class="icon-[uil--youtube]"></span></a>
                    <a href="www"><span class="icon-[akar-icons--linkedin-v2-fill]"></span></a>

                </div>
            </div>
            {/*parte inferior */}
            <div className='encabezado-p2'>
                <div className='conten-total'>
                    <div className='content-iz'>
                        <img src="https://askproject.net/hauler/wp-content/uploads/sites/173/2024/02/logo_Asset-1.png" alt="" />
                    </div>
                    <div className='content-cen' >

                        <a href="www">Home</a>
                        <a href="www">About</a>
                        <a href="www">Service</a>
                        <a href="www">Page</a>
                        <a href="www">Contact</a>

                    </div>
                    <div className='content-de'>
                        <button>
                            Get Started
                        </button>
                    </div>
                </div>

            </div>

        </header>
    );
}

export default Menu;