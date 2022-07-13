const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1579548122080-c35fd6820ec
                b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=
                crop&w=1470&q=80")`,
                backgroundPosition: `cover`
            }}
        >
            <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
                <p className="display-4 text-primary pt-5">Facebook React App</p>
                <p>Welcome to Facebook ReactJS appication.</p>

            </div>
        </div >
    );
}

export default Home;