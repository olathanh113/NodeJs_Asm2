const Menu = () => {
    return <div className="menu">
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 " style={{ marginLeft: "285px" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Trang chủ</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link " aria-current="page" href="#">Điện thoại</a>
                        <a className="nav-link" href="#">Samsung</a>
                        <a className="nav-link" href="#">Samsung Galaxy A73 (5G) 256GB</a>
                    </div>
                </div>
            </div>
        </nav>
        <hr />
    </div>

}
export default Menu;