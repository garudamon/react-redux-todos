const LoginPage = () => {
    return (
        <div>
            <div>
                <label htmlFor="username"></label>
                <input type="text" name="username" id="username" />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" />
            </div>
            <div><button type="submit">Login</button></div>
        </div>
    )
}

export default LoginPage;