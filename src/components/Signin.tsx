import { FormCheck } from "react-bootstrap"

export default function SigninForm() {
    return (
        <div className="form-div">
            <h1>Sign In</h1>
            <form className="form">
                <div className="form-group">
                    <input type="email" className="form-control " placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control " placeholder="Enter phone " />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <FormCheck type="checkbox" label="Remember Me" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    )
}

