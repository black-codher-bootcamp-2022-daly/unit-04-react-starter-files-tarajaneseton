//
export function Header(props) {
    const { name, color, fruit, className } = props; // here we are extracting the prop(ertie)s from the object, below in the h1 we are using them
    return (
      <h1 className={className}>
        {name} is {color} like a {fruit}
      </h1>
    );
  }