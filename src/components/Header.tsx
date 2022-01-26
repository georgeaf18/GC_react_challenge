const Header = () => (
    <>
        <div style={styles.navbar}>
            <h1 style={styles.title}>Weather</h1>
        </div>
    </>
);

const styles = {
    navbar: {
        backgroundColor:'#EEECEE',
        display: 'flex',
        flex: 'start',
        paddingLeft: '50px',
        width: '100%'
    },
    title: {
        color: "#036F03"
    }
}

export default Header;