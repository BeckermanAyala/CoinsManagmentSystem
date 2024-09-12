'use client';

import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';

function LogIn() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Welcome to Crypto Dashboard</h1>
                <p style={styles.subtitle}>Please sign in to continue</p>

                <div style={styles.buttonContainer}>
                    <LoginLink postLoginRedirectURL="/dashboard" style={styles.button}>
                        Sign in
                    </LoginLink>
                    <RegisterLink postSignupRedirectURL="/dashboard" style={styles.button}>
                        Sign up
                    </RegisterLink>
                </div>
            </div>
        </div>
    );
}

// Inline styles for simplicity; you can also use CSS/SCSS if preferred
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f3f4f6',
    },
    card: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
    },
    subtitle: {
        fontSize: '16px',
        marginBottom: '20px',
        color: '#666',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    button: {
        backgroundColor: '#4f46e5',
        color: '#fff',
        padding: '10px',
        borderRadius: '8px',
        textDecoration: 'none',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#4338ca',
    },
};

export default LogIn;
