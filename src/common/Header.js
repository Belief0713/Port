const Header = () => {
  return (
    <>
      <header
        id='header'
        class='fixed-top position-flex d-flex align-items-center'
      >
        <div class='container d-flex align-items-center justify-content-center'>

          <nav id='navbar' class='navbar'>
            <ul>
              <li>
                <a class='nav-link scrollto' href='#projects' style={{paddingLeft:'0px'}}>
                  Projects
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#history'>
                  Resume
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
