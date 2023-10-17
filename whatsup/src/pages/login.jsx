import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState("");

    const handleLogin = () => {
        
    };

    return <>
        <nav>
            <img src="" alt="" />
            <div>
                <p>Signup</p>
            </div>
        </nav>
        <div>
            <form>
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={pass} onChange={(e) => setPass(e.target.value)} />
                <input type="submit" value="Login" onClick={handleLogin} />
            </form>
        </div>
    </>
}