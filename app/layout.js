import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Crontech Labs - Building smart digital solutions for modern businesses',
  description: 'Crontech Labs offers product development and end-to-end digital solutions including Full Stack Web Development, Salesforce Development, Application Support, QA Testing, and Custom Product Engineering.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

