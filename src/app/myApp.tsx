import { AppProps } from 'next/app';
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <KindeProvider>
            <Component {...pageProps} />
        </KindeProvider>
    );
}

export default MyApp;
