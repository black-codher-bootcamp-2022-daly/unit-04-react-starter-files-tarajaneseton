




export function NavBar(props) {
    const { children, name, colour, fruit} = props;
    return <ul className={"navbar"}>{props.children}</ul>;
}

