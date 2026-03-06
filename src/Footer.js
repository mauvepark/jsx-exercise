let currentDate = new Date();

function Footer() {
    return (
        <footer>
            <p>{currentDate.getDate()}</p>
        </footer>
    );
}

export default Footer;