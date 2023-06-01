import { FormEvent, useState } from "react";
import { useAnalytics } from "../../hooks";
import { useMobxStores } from "../../data/stores";
import { useRouter } from "next/router";

export const LoginWithPhoneForm: React.FunctionComponent = () => {
    const { userLoginStore } = useMobxStores()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formValidated, setFormValidated] = useState(false);
    const analytics = useAnalytics();
    const router = useRouter();

    const loginWithPhone = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormValidated(true);

        if (phoneNumber.length <= 0 || phoneNumber.length > 15) {
            return;
        }

        userLoginStore.setPhone(phoneNumber);
        userLoginStore.setLoggedIn(true);

        analytics.identify(null, {
            phone: phoneNumber
        });

        router.push("/");
    }

    const setPhoneAndResetForm = (phoneNumber: string) => {
        setPhoneNumber(phoneNumber);
        setFormValidated(phoneNumber.length > 0 && phoneNumber.length <= 15);
    }

    return <div className="mt-5">
        <h4>Login with phone</h4>
        <div className='box-shadow'>
            <form onSubmit={(e) => loginWithPhone(e)} className={formValidated ? 'was-validated' : ''}>
                <div className="mb-3">
                    <label htmlFor="login-phone" className="form-label">Phone number</label>
                    <input type="tel" 
                        className={`form-control ${phoneNumber.length > 15 ? 'is-invalid' : ''}`} 
                        id="login-phone" 
                        aria-describedby="phone-help" 
                        onChange={(event) => setPhoneAndResetForm(event.target.value)} 
                    />
                    <div id="phone-help" className="form-text">Please add your phone with the country code.</div>
                    <div className="invalid-feedback">
                        Please provide a valid phone number.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login with phone</button>
            </form>
        </div>
    </div>
}