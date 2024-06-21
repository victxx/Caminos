export default function About() {
    return (
      <div style={styles.container}>
        <h1>About Caminos</h1>
        <p>Información sobre la aplicación Caminos.</p>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px'
    }
  };
  