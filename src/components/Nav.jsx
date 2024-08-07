function Nav(props) {
  return (
    <ul>
      {props.menu.map((el) => {
        return (
          <li>
            <button>{el}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
