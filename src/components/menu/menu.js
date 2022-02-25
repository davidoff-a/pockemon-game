import './menu.module.css';

export const Menu = () => {
  return (
    <div className='menuContainer active/deactive'>
      <div className='overlay' />
      <div className='menuItems'>
        <ul>
          <li>
            <a href='#welcome'>HOME</a>
          </li>
          <li>
            <a href='#game'>GAME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}