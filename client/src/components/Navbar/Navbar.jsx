import React, {Component} from 'react';
import styles from './Navbar.module.css';

class Navbar extends Component{
render(){
    return(
        
            <nav>
                <div >
                    <h2 className={styles.brand}>Keeper</h2>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </nav>
       
    )
}
}

export default Navbar;