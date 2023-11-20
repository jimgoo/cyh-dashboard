import '../styles/common.scss';
import '../styles/screen-media-query.scss';
import '../styles/utilities.scss';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import LayoutConfig from '@/app/layoutConfig';
export const metadata = {
  title: 'Choose Your Horizon',
  description: 'Welcome To Choose Your Horizon',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        type={'text/javascript'}
        id={'hs-script-loader'}
        async={true}
        defer={true}
        src={'//js-na1.hs-scripts.com/5971026.js'}
      />
      <body className="margin-none">
        <LayoutConfig>{children}</LayoutConfig>
      </body>
    </html>
  );
}
