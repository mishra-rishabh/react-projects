/* eslint-disable react/prop-types */
const Navbar = ({ category, setCategory }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="badge bg-light fs-4 text-dark">News Magazine</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item category">
                            <div className={`nav-link ${category === "technology" ? "active" : ""}`} onClick={() => setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item category">
                            <div className={`nav-link ${category === "business" ? "active" : ""}`} onClick={() => setCategory("business")}>Business</div>
                        </li>
                        <li className="nav-item category">
                            <div className={`nav-link ${category === "health" ? "active" : ""}`} onClick={() => setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-item category">
                            <div className={`nav-link ${category === "sports" ? "active" : ""}`} onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item category">
                            <div className={`nav-link ${category === "entertainment" ? "active" : ""}`} onClick={() => setCategory("entertainment")}>Entertainment</div>
                        </li>
                        <li className="nav-item category">
                            <div className={`nav-link ${category === "science" ? "active" : ""}`} onClick={() => setCategory("science")}>Science</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;