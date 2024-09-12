export default function Footer() {
    return (
        <footer style={{ marginTop: '50px', padding: '20px', background: '#f1f1f1', textAlign: 'center' }}>
            <p>
                By using this site, you agree to our{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                    Terms & Privacy Policy
                </a>.
            </p>
        </footer>
    );
}
