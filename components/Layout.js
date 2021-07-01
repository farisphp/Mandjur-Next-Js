import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="PT Mandjur Sehat Abadi menyediakan berbagai macam obat tradisional dan herbal dengan kualitas terbaik dan informasi akurat" />
            <meta name="keywords" content="Obat, Obat tradisional, Herbal, Jamu, Obat China" />
            <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://www.mandjur.co.id/skin/frontend/mandjurimaxo/mandjurimaxo1/css/bootstrap.css" media="all" />
            <link rel="stylesheet" type="text/css" href="https://www.mandjur.co.id/skin/frontend/mandjurimaxo/mandjurimaxo1/css/bootstrap-theme.css" media="all" />
            <link rel="stylesheet" type="text/css" href="https://www.mandjur.co.id/skin/frontend/mandjurimaxo/mandjurimaxo1/css/animate.css" media="all" />
        </Head>
        <div className="wrapper">
            <div className="page">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
        </>
    );
}
 
export default Layout;