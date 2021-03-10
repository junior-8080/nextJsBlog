import headerStyles from '../styles/Header.module.css';

const Header = () => {
   
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Let's Talk About </span><br />Javascript
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with all your Javascript and  Dev Topics
            </p>
        </div>  
    );
}

export default Header;
