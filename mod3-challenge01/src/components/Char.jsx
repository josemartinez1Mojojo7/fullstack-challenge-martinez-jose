const Char = ({ img, name,status,species, setBackgroundImage }) => {
    return (
      <button className="color-square" style={{ backgroundImage: `url(${img})` }} onClick={() => setBackgroundImage(img)}>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{species}</p>
      </button>
    );
  };
  
  export default Char;