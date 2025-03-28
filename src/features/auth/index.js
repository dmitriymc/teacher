import React from 'react';

const Auth = () => {
    return ( 
        <div className="flex items-center rounded-lg" style={{
            width: '450px',
            backgroundColor: '#fffffff5'
        }}> 
            <div className="flex flex-col items-center p-5 w-full">
                <h2 className="text-4xl mb-7">Login</h2>
                <div className="login-input mb-5 relative">
                    <input id="auth1" className="p-3 pl-12 pr-2 border" type="text" name="text" {...("Username", {required: true, maxLength:15})} placeholder="Username"></input>
                    <label htmlFor="auth1"></label>
                </div>
                <div className="login-input mb-3 relative">
                    <input id="auth2" className="p-3 pl-12 pr-2 border" type="password" name="text" placeholder="Password"></input>
                    <label htmlFor="auth2"></label>
                </div>
                <a className="p-1 mb-5 text-sm font-bold form-link text-gray-primary hover:text-purple-primary" href="#">Forget password</a>
                <button className="p-3 w-4/12 rounded-lg bg-blue-primary text-white" type="submit">Login</button>
            </div>
        </div>
     );
}
 
export default Auth;