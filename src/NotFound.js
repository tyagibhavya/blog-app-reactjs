import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page doesn't exist.</p>
            <Link to='/'>HOME</Link>
        </div>
    );
}
 
export default NotFound;
