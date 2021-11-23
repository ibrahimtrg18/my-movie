import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = (props) => {
  const {
    children,
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...restProps
  } = props;

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  console.log("activeClassName", activeClassName);
  return (
    <Link
      {...restProps}
      className={
        match
          ? `${className} ${activeClassName}`
          : `${className} ${inactiveClassName}`
      }
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
