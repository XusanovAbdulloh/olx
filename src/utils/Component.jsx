import React from 'react';
import { Link } from 'react-router-dom';

const RedirectButton = ({redirect, title, type}) => {
    return (
        <Link className={type === "light" ? "link--light" : "link--dark"} to={redirect}>
          {title}
        </Link>
    );
}

export { RedirectButton };