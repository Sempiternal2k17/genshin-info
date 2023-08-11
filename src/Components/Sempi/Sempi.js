import './Sempi.css';
import Logo from './Images/genshinLogo.png'

function Sempi(){

    const navLinks = [
        'Characters',
        'Artifacts',
        'Regions',
        'Weapons'
    ]

    return (

        <div className='navbar'>
            <div className='img-sempi'>
                <img src={Logo} alt='Genshin Impact' />
            </div>

            <div className='links-sempi'>
                <ul className='ul-sempi'>
                    {navLinks.length === 0 && <h1>No items found</h1>}
                    {navLinks.map(item =>
                        <li className = "li-sempi" key={item}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Sempi;