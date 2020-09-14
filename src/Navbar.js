import React from 'react';

const Navbar = (props) =>{
        return(
           <div style={styles.nav}>
               <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://www.flaticon.com/svg/static/icons/svg/846/846423.svg" alt="cart-icon"/>
                    <span style={styles.cartCount}>{props.count}</span>
               </div>
           </div>
        );
    }

const styles = {
    cartIcon: {
        color:'white',
        height:35,
        marginRight:16
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'3.5px 6px',
        position:'absolute',
        right:0,
        top:-9
    }
};
export default Navbar;