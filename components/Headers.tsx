
const Headers = () => {
  return (
    <div style={{"color":"white"}}>
      <a ref={'/'}>Startseite</a>
      <a ref={'/login'}>Login</a>
      <a ref={'/register'}>register</a>
      <a ref={'/forgot-password'}>forgot-password</a>
      <a ref={'/reset-password'}>reset-password</a>
    </div>
  );
};

export default Headers;