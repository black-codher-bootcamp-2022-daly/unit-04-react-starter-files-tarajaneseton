export function Booklist(props) {
    return (
      <div>
        <h1>Tara's library</h1>
        <div className="booklist-container">{props.children}</div>
      </div>
    );
  }
