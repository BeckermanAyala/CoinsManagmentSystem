'use client';  // רכיב צד לקוח

import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';

function LogIn() {
    return (
        <div>
            <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
            <RegisterLink postSignupRedirectURL="/dashboard">Sign up</RegisterLink>
        </div>
    );
}

export default LogIn;
