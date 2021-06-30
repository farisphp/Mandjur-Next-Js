import Head from 'next/head'
import styles from '../styles/Header.module.css'

const Layout = () => {
    return (
        <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="PT Mandjur Sehat Abadi menyediakan berbagai macam obat tradisional dan herbal dengan kualitas terbaik dan informasi akurat" />
            <meta name="keywords" content="Obat, Obat tradisional, Herbal, Jamu, Obat China" />
            <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="http://staging.mandjur.co.id/skin/frontend/mandjurimaxo/mandjurimaxo1/css/bootstrap.css" media="all" />
            <link rel="stylesheet" type="text/css" href="http://staging.mandjur.co.id/skin/frontend/mandjurimaxo/mandjurimaxo1/css/bootstrap-theme.css" media="all" />
        </Head>
        <div className="wrapper">
            <div className="page">
                <div id="myheader-container" className="header-container">
                    <div id="mytop-link" className="top-link single-level-nav">
                        <div className="container">
                            <div className="container-inner">
                                <div className="row top-link-inner">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="block-top-link">		
                                            <p className="welcome-msg">
                                                <span style={{color:"#585556",fontWeight:"bold",fontSize:"0.95em",fontFamily:"arial"}}>welcome: </span> 
                                                <span style={{color:"#ff6900",fontFamily:"arial",fontSize:"0.95em",fontWeight:"bold"}}> guess </span>
                                            </p>
                                            <div className="header-phone">
                                                <p>CS:<span className="text">(021)31927481 / 085890009800</span></p>
                    					    </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="right-link clearfix">
                                            <div className="header-link">
                                                <div className={styles.trusted}>APOTEK TERPERCAYA</div>
                                            </div>
                                            <div className="header-curren"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="myheady" className="header">
                        <div className="container">
                            <div className="row">
                                <div className="top-logo col-xs-12 col-md-3">
                                    <h1 id="mylogo" className="logo single-level-nav3">
                                        <a href="http://staging.mandjur.co.id/" className="logo">
                                            <img src="http://staging.mandjur.co.id/skin/frontend/base/default/images/logo-new-mandjur.png" alt="PT Mandjur Sehat Abadi" />
                                        </a>
                                    </h1>
                                    <div className={styles.trustedMobile}>APOTEK TERPERCAYA</div>
                                </div>
                                <div id="mysearch" className="col-xs-12 col-md-9">
                                    <div className="top-menu single-level-nav2-">
                                        <form id="search_mini_form" action="http://staging.mandjur.co.id/catalogsearch/result/" method="get">
                                            <div className="label">Search:<i className="fa fa-search ">&nbsp;</i></div>
                                            <div className="form-search">
                                                <input id="search" type="text" name="q" value="" className="input-text" maxLength="128" autoComplete="off" />
                                                <div className="loading_image_search"></div>
                                                <button type="submit" title="Search" className="button"><span><span><i className="fa fa-search ">&nbsp;</i>Search</span></span></button>
                                                <div id="search_autocomplete" className="search-autocomplete" style={{display: "none"}}></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="right-header single-level-nav2-">
                                        <div className="top-cart-wrapper">
                                            <div className="top-cart-contain">
                                                <div id="mini_cart_block">
                                                    <div className="block-cart mini_cart_ajax">
                                                            <div className="block-cart">
                                                                <div className="top-cart-title">
                                                                    <a href="http://staging.mandjur.co.id/checkout/cart/">
                                                                        <span className="my-cart">0</span>
                                                                        <span className="title-cart">Shopping cart:</span>
                                                                        <span className="price">Rp0,00</span>				
                                                                    </a>
                                                                </div>
                                                                <div className="top-cart-content" style={{overflow: "hidden", display: "none"}}>
                                                                    <p className="empty">Mohon maaf keranjang belanjaan anda masih kosong</p>
                                                                    <div className="top-subtotal">Subtotal: <span className="price">Rp0,00</span></div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-link">
                                            <ul className="menu dropit">
                                                <li className="dropit-trigger">
                                                    <a className="login_click" href="#">Account</a>
                                                    <ul className="dropit-submenu" id="menu_link">
                                                        <li><a href="http://staging.mandjur.co.id/customer/account/">Akun Saya</a></li>
                                                        <li><a href="http://staging.mandjur.co.id/checkout/cart/">Keranjang Belanja</a></li>
                                                        <li><a href="http://staging.mandjur.co.id/checkout/">Kasir</a></li>
                                                        <li><a href="http://staging.mandjur.co.id/quotes">Konfirmasi Pembayaran</a></li>
                                                        <li><a href="http://staging.mandjur.co.id/sales/guest/form/">Status Order</a></li>
                                                        <li><a href="http://staging.mandjur.co.id/prescription/">Kirim Resep</a></li>
                                                        <li><a href="https://staging.mandjur.co.id/customer/account/login/">Log In</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="links-checkout">
                                        </div>
                                        <div className="links-wishlist">
                                        </div>
                                    </div>
                                </div>
                            </div>	
                        </div>
                    </div>
                    <div id="myheader-bottom" className="header-bottom">
                        <div className="container">
                            <div className="top-menu">
                                <div className="ma-nav-mobile-container visible-xs custom-mob-menu">
                                    <div className="navbar">
                                        <div id="navbar-inner" className="navbar-inner navbar-inactive">
                                            <div className="menu-mobile">
                                                <a className="btn btn-navbar navbar-toggle">
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </a>
                                            </div>
                                            <ul id="ma-mobilemenu" className="mobilemenu nav-collapse collapse">
                                                <li className="level0 nav-1 level-top first parent">
                                                    <a href="#" className="level-top">
                                                        <span>Keluhan Kesehatan</span>
                                                    </a>
                                                <ul className="level0" style={{display: "none"}}>
                                                    <li className="level1 nav-1-1 first">
                                                        <a href="http://staging.mandjur.co.id/penyakit-ringan/amandel">
                                                        <span>Amandel</span>
                                                        </a>
                </li><li className="level1 nav-1-2">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/darah-rendah">
                <span>Anemia</span>
                </a>
                </li><li className="level1 nav-1-3">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/asam-urat">
                <span>Asam Urat</span>
                </a>
                </li><li className="level1 nav-1-4">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/batu-ginjal">
                <span>Batu Ginjal</span>
                </a>
                </li><li className="level1 nav-1-5 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu">
                <span>Batuk dan Pilek</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-5-1 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/kesehatan-balita">
                <span>Balita Sakit</span>
                </a>
                </li><li className="level2 nav-1-5-2">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/batuk">
                <span>Batuk</span>
                </a>
                </li><li className="level2 nav-1-5-3">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/campak-cacar-air">
                <span>Campak &amp; Cacar Air</span>
                </a>
                </li><li className="level2 nav-1-5-4 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/flu">
                <span>Flu</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-6">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/hipotensi">
                <span>Darah Rendah / Hipotensi</span>
                </a>
                </li><li className="level1 nav-1-7">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/hipertensi-darah-tinggi">
                <span>Darah Tinggi</span>
                </a>
                </li><li className="level1 nav-1-8">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/daya-ingat-kurang">
                <span>Daya Ingat Kurang</span>
                </a>
                </li><li className="level1 nav-1-9">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/demam">
                <span>Demam</span>
                </a>
                </li><li className="level1 nav-1-10">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/demam-berdarah">
                <span>Demam Berdarah</span>
                </a>
                </li><li className="level1 nav-1-11">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/diabetes">
                <span>Diabetes</span>
                </a>
                </li><li className="level1 nav-1-12 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-fungsi-hati">
                <span>Gangguan Fungsi Hati</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-12-5 first last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-fungsi-hati/hepatitis">
                <span>Hepatitis</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-13">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/batu-empedu">
                <span>Gangguan Empedu</span>
                </a>
                </li><li className="level1 nav-1-14 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-kencing">
                <span>Gangguan Kencing</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-14-6 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-kencing/kencing-tidak-lancar">
                <span>Kencing Tidak Lancar</span>
                </a>
                </li><li className="level2 nav-1-14-7">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-kencing/prostat-159">
                <span>Kesehatan Prostat</span>
                </a>
                </li><li className="level2 nav-1-14-8 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-kencing/infeksi-saluran-kencing">
                <span>Infeksi Saluran kemih</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-15 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/penyakit-kulit">
                <span>Gangguan Kulit</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-15-9 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/penyakit-kulit/bau-badan">
                <span>Bau Badan</span>
                </a>
                </li><li className="level2 nav-1-15-10">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/penyakit-kulit/bisul-jerawat">
                <span>Bisul &amp; Jerawat</span>
                </a>
                </li><li className="level2 nav-1-15-11">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/penyakit-kulit/gatal-dan-alergi">
                <span>Gatal dan Alergi</span>
                </a>
                </li><li className="level2 nav-1-15-12">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/penyakit-kulit/jamur-panu-kurap-dan-kudis">
                <span>Jamur, Panu, Kurap dan Kudis</span>
                </a>
                </li><li className="level2 nav-1-15-13">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/penyakit-kulit/kelainan-pigmen">
                <span>Kelainan Pigmen</span>
                </a>
                </li><li className="level2 nav-1-15-14 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/penyakit-kulit/luka-bakar">
                <span>Luka Bakar</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-16 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pencernaan">
                <span>Gangguan Pencernaan</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-16-15 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/kembung">
                <span>Kembung</span>
                </a>
                </li><li className="level2 nav-1-16-16">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/maag">
                <span>Maag</span>
                </a>
                </li><li className="level2 nav-1-16-17">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/mual-mabuk-dan-masuk-angin">
                <span>Mual, Mabuk, dan Masuk Angin</span>
                </a>
                </li><li className="level2 nav-1-16-18">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/pencernaan-lemah">
                <span>Pencernaan Lemah</span>
                </a>
                </li><li className="level2 nav-1-16-19">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/sakit-perut">
                <span>Sakit Perut (Diare)</span>
                </a>
                </li><li className="level2 nav-1-16-20 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/sembelit">
                <span>Sembelit</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-17">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/pendengaran">
                <span>Gangguan Pendengaran</span>
                </a>
                </li><li className="level1 nav-1-18">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kesehatan-mata">
                <span>Gangguan Penglihatan</span>
                </a>
                </li><li className="level1 nav-1-19 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pernafasan">
                <span>Gangguan Pernafasan dan Mulut</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-19-21 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/asthma">
                <span>Asma / Sesak Nafas</span>
                </a>
                </li><li className="level2 nav-1-19-22">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/gondok">
                <span>Gondok</span>
                </a>
                </li><li className="level2 nav-1-19-23">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/sakit-gigi">
                <span>Sakit Gigi</span>
                </a>
                </li><li className="level2 nav-1-19-24 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/sinusitis">
                <span>Sinusitis</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-20">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/hernia-turun-berok">
                <span>Hernia / Turun Berok</span>
                </a>
                </li><li className="level1 nav-1-21">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/insomnia">
                <span>Insomnia</span>
                </a>
                </li><li className="level1 nav-1-22 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/jantung">
                <span>Jantung</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-22-25 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/jantung/jantung-koroner">
                <span>Jantung Koroner</span>
                </a>
                </li><li className="level2 nav-1-22-26 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/jantung/menguatkan-jantung">
                <span>Menguatkan Jantung</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-23">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kanker">
                <span>Kanker</span>
                </a>
                </li><li className="level1 nav-1-24">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kesehatan-rambut">
                <span>Kesehatan Rambut</span>
                </a>
                </li><li className="level1 nav-1-25 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kewanitaan">
                <span>Kewanitaan</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-25-27 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kewanitaan/haid">
                <span>Haid</span>
                </a>
                </li><li className="level2 nav-1-25-28">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kewanitaan/keputihan">
                <span>Keputihan</span>
                </a>
                </li><li className="level2 nav-1-25-29">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kewanitaan/benjolan-payudara">
                <span>Kesehatan Payudara</span>
                </a>
                </li><li className="level2 nav-1-25-30">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kewanitaan/infeksi-vagina">
                <span>Infeksi Vagina</span>
                </a>
                </li><li className="level2 nav-1-25-31 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kewanitaan/saluran-tuba-tersumbat">
                <span>Saluran Tuba Tersumbat</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-26">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/kolesterol">
                <span>Kolesterol</span>
                </a>
                </li><li className="level1 nav-1-27">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/pengapuran">
                <span>Pengapuran</span>
                </a>
                </li><li className="level1 nav-1-28">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/stroke">
                <span>Stroke</span>
                </a>
                </li><li className="level1 nav-1-29 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/rematik">
                <span>Rematik</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-29-32 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/rematik/syaraf">
                <span>Syaraf Terjepit</span>
                </a>
                </li><li className="level2 nav-1-29-33">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/rematik/pegal-linu">
                <span>Pegal Linu</span>
                </a>
                </li><li className="level2 nav-1-29-34 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/rematik/sakit-pinggang">
                <span>Sakit Pinggang</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-30 parent">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/sariawan">
                <span>Sariawan, Panas Dalam dan Sakit Tenggorokan</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-1-30-35 first">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/sariawan/panas-dalam">
                <span>Panas Dalam</span>
                </a>
                </li><li className="level2 nav-1-30-36">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/sariawan/sakit-tenggorokan">
                <span>Sakit Tenggorokan</span>
                </a>
                </li><li className="level2 nav-1-30-37">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/sariawan/sariawan">
                <span>Sariawan</span>
                </a>
                </li><li className="level2 nav-1-30-38 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/sariawan/suara-hilang">
                <span>Suara Hilang</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-1-31">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/sakit-kepala">
                <span>Sakit Kepala</span>
                </a>
                </li><li className="level1 nav-1-32">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/tifus">
                <span>Tifus</span>
                </a>
                </li><li className="level1 nav-1-33 last">
                <a href="http://staging.mandjur.co.id/penyakit-ringan/wasir">
                <span>Wasir</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-2 level-top parent">
                <a href="#" className="level-top">
                <span>Obat Luka</span>
                </a>
                <ul className="level0" style={{display: "none"}}>
                <li className="level1 nav-2-1 first">
                <a href="http://staging.mandjur.co.id/obat-luka/luka-bakar">
                <span>Luka Bakar</span>
                </a>
                </li><li className="level1 nav-2-2">
                <a href="http://staging.mandjur.co.id/obat-luka/luka-dalam">
                <span>Luka Dalam</span>
                </a>
                </li><li className="level1 nav-2-3">
                <a href="http://staging.mandjur.co.id/obat-luka/luka-luar">
                <span>Luka Luar</span>
                </a>
                </li><li className="level1 nav-2-4">
                <a href="http://staging.mandjur.co.id/obat-luka/obat-gosok">
                <span>Obat Gosok</span>
                </a>
                </li><li className="level1 nav-2-5">
                <a href="http://staging.mandjur.co.id/obat-luka/bekas-luka">
                <span>Obat Bekas Luka</span>
                </a>
                </li><li className="level1 nav-2-6">
                <a href="http://staging.mandjur.co.id/obat-luka/operasi">
                <span>Operasi</span>
                </a>
                </li><li className="level1 nav-2-7">
                <a href="http://staging.mandjur.co.id/obat-luka/patah-tulang">
                <span>Patah Tulang</span>
                </a>
                </li><li className="level1 nav-2-8 last">
                <a href="http://staging.mandjur.co.id/obat-luka/sehabis-melahirkan">
                <span>Sehabis Melahirkan</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-3 level-top parent">
                <a href="#" className="level-top">
                <span>Bagian Tubuh</span>
                </a>
                <ul className="level0" style={{display: "none"}}>
                <li className="level1 nav-3-1 first parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/alat-reproduksi">
                <span>Alat Vital</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-1-1 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/alat-reproduksi/pria">
                <span>Pria</span>
                </a>
                </li><li className="level2 nav-3-1-2">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/alat-reproduksi/wanita">
                <span>Wanita</span>
                </a>
                </li><li className="level2 nav-3-1-3 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/alat-reproduksi/infeksi-saluran-kencing">
                <span>Saluran kemih</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-2 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/badan">
                <span>Badan</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-2-4 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/badan/campak-cacar-air">
                <span>Campak &amp; Cacar Air</span>
                </a>
                </li><li className="level2 nav-3-2-5">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/badan/deman">
                <span>Deman</span>
                </a>
                </li><li className="level2 nav-3-2-6">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/badan/flu">
                <span>Flu</span>
                </a>
                </li><li className="level2 nav-3-2-7">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/badan/masuk-angin-mual-mabok">
                <span>Masuk Angin, Mual &amp; Mabok</span>
                </a>
                </li><li className="level2 nav-3-2-8 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/badan/panas-dalam">
                <span>Panas Dalam</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-3 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/anus">
                <span>Anus</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-3-9 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/anus/fistula">
                <span>Nyeri BAB</span>
                </a>
                </li><li className="level2 nav-3-3-10 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/anus/wasir">
                <span>Wasir</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-4">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/payudara">
                <span>Dada / Payudara</span>
                </a>
                </li><li className="level1 nav-3-5 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kaki">
                <span>Kaki dan Tangan</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-5-11 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kaki/keseleo">
                <span>Keseleo dan Memar</span>
                </a>
                </li><li className="level2 nav-3-5-12">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kaki/asam-urat-tinggi">
                <span>Pegal dan nyeri sendi</span>
                </a>
                </li><li className="level2 nav-3-5-13">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kaki/pegal-linu">
                <span>Pegal Linu</span>
                </a>
                </li><li className="level2 nav-3-5-14 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kaki/rematik">
                <span>Nyeri Sendi</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-6 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala">
                <span>Kepala</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-6-15 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/batuk-demam-dan-flu">
                <span>Demam dan Flu</span>
                </a>
                </li><li className="level2 nav-3-6-16">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/hidung">
                <span>Hidung</span>
                </a>
                </li><li className="level2 nav-3-6-17">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/mata">
                <span>Mata</span>
                </a>
                </li><li className="level2 nav-3-6-18">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/migren">
                <span>Migren</span>
                </a>
                </li><li className="level2 nav-3-6-19">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/mulut">
                <span>Mulut</span>
                </a>
                </li><li className="level2 nav-3-6-20">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/otak">
                <span>Otak</span>
                </a>
                </li><li className="level2 nav-3-6-21">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/rambut">
                <span>Rambut</span>
                </a>
                </li><li className="level2 nav-3-6-22">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/sakit-kepala">
                <span>Sakit Kepala</span>
                </a>
                </li><li className="level2 nav-3-6-23 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kepala/telinga">
                <span>Telinga</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-7 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kulit">
                <span>Kulit</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-7-24 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kulit/bisul-jerawat">
                <span>Bisul &amp; Jerawat</span>
                </a>
                </li><li className="level2 nav-3-7-25">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kulit/gatal-dan-alergi">
                <span>Gatal dan Alergi</span>
                </a>
                </li><li className="level2 nav-3-7-26">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kulit/jamur-panu-kurap-dan-kudis">
                <span>Jamur, Panu, Kurap dan Kudis</span>
                </a>
                </li><li className="level2 nav-3-7-27">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kulit/kelainan-pigmen">
                <span>Kelainan Pigmen</span>
                </a>
                </li><li className="level2 nav-3-7-28 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/kulit/luka-bakar">
                <span>Luka Bakar</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-8 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/leher">
                <span>Leher</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-8-29 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/leher/batuk">
                <span>Batuk</span>
                </a>
                </li><li className="level2 nav-3-8-30">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/leher/gondok">
                <span>Leher Bengkak</span>
                </a>
                </li><li className="level2 nav-3-8-31">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/leher/amandel">
                <span>Sakit Tengorokan Demam</span>
                </a>
                </li><li className="level2 nav-3-8-32">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/leher/hilang-suara">
                <span>Suara Hilang</span>
                </a>
                </li><li className="level2 nav-3-8-33 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/leher/tenggorokan">
                <span>Tenggorokan</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-9 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/organ-dalam">
                <span>Organ Dalam</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-9-34 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/organ-dalam/empedu">
                <span>Bagian Tubuh Lainnya</span>
                </a>
                </li><li className="level2 nav-3-9-35">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/organ-dalam/ginjal">
                <span>Ginjal</span>
                </a>
                </li><li className="level2 nav-3-9-36">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/organ-dalam/hati">
                <span>Hati</span>
                </a>
                </li><li className="level2 nav-3-9-37">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/organ-dalam/jantung">
                <span>Jantung</span>
                </a>
                </li><li className="level2 nav-3-9-38">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/organ-dalam/pangkreas">
                <span>Pangkreas</span>
                </a>
                </li><li className="level2 nav-3-9-39 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/organ-dalam/paru-paru">
                <span>Paru - Paru</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-10 parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut">
                <span>Perut</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-10-40 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut/hernia-turun-berok">
                <span>Bengkak Angkat Berat</span>
                </a>
                </li><li className="level2 nav-3-10-41">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut/tifus">
                <span>Demam &amp; Pencernaan</span>
                </a>
                </li><li className="level2 nav-3-10-42">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut/kembung">
                <span>Kembung</span>
                </a>
                </li><li className="level2 nav-3-10-43">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut/maag">
                <span>Maag</span>
                </a>
                </li><li className="level2 nav-3-10-44">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut/pencernaan-lemah">
                <span>Pencernaan Lemah</span>
                </a>
                </li><li className="level2 nav-3-10-45">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut/sakit-perut">
                <span>Sakit Perut</span>
                </a>
                </li><li className="level2 nav-3-10-46 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/perut/sembelit">
                <span>Sembelit</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-11 last parent">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/saluran-kencing">
                <span>Saluran Kencing</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-3-11-47 first">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/saluran-kencing/buang-air-kecil-dimalam-hari">
                <span>Buang air kecil dimalam hari</span>
                </a>
                </li><li className="level2 nav-3-11-48">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/saluran-kencing/kencing-tidak-lancar">
                <span>Kencing Tidak Lancar</span>
                </a>
                </li><li className="level2 nav-3-11-49 last">
                <a href="http://staging.mandjur.co.id/bagian-tubuh/saluran-kencing/infeksi-saluran-kencing">
                <span>Saluran Kemih</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-4 level-top parent">
                <a href="#" className="level-top">
                <span>Susu</span>
                </a>
                <ul className="level0" style={{display: "none"}}>
                <li className="level1 nav-4-1 first">
                <a href="http://staging.mandjur.co.id/susu/enfagrow">
                <span>Enfagrow</span>
                </a>
                </li><li className="level1 nav-4-2">
                <a href="http://staging.mandjur.co.id/susu/enfamil">
                <span>Enfamil</span>
                </a>
                </li><li className="level1 nav-4-3">
                <a href="http://staging.mandjur.co.id/susu/sustagen">
                <span>Sustagen</span>
                </a>
                </li><li className="level1 nav-4-4">
                <a href="http://staging.mandjur.co.id/susu/nutricia">
                <span>Nutricia</span>
                </a>
                </li><li className="level1 nav-4-5">
                <a href="http://staging.mandjur.co.id/susu/susu-formula-0-6-bulan">
                <span>Susu Formula 0 - 6 Bulan</span>
                </a>
                </li><li className="level1 nav-4-6">
                <a href="http://staging.mandjur.co.id/susu/susu-formula-6-12-bulan">
                <span>Susu Formula 6 - 12 Bulan</span>
                </a>
                </li><li className="level1 nav-4-7">
                <a href="http://staging.mandjur.co.id/susu/susu-pertumbuhan-1-3-tahun">
                <span>Susu Pertumbuhan 1 - 3 Tahun</span>
                </a>
                </li><li className="level1 nav-4-8">
                <a href="http://staging.mandjur.co.id/susu/susu-pertumbuhan-3-12-tahun">
                <span>Susu Pertumbuhan 3 - 12 Tahun</span>
                </a>
                </li><li className="level1 nav-4-9">
                <a href="http://staging.mandjur.co.id/susu/susu-ibu-hamil-dan-menyusui">
                <span>Susu Ibu Hamil dan Menyusui</span>
                </a>
                </li><li className="level1 nav-4-10 last">
                <a href="http://staging.mandjur.co.id/susu/susu-kebutuhan-khusus">
                <span>Susu Kebutuhan Khusus</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-5 level-top parent">
                <a href="#" className="level-top">
                <span>Supplement</span>
                </a>
                <ul className="level0" style={{display: "none"}}>
                <li className="level1 nav-5-1 first">
                <a href="http://staging.mandjur.co.id/supplement/blackmores">
                <span>Blackmores</span>
                </a>
                </li><li className="level1 nav-5-2">
                <a href="http://staging.mandjur.co.id/supplement/natures-plus">
                <span>Natures Plus</span>
                </a>
                </li><li className="level1 nav-5-3">
                <a href="http://staging.mandjur.co.id/supplement/wellness">
                <span>Wellness</span>
                </a>
                </li><li className="level1 nav-5-4">
                <a href="http://staging.mandjur.co.id/supplement/daya-tahan-tubuh">
                <span>Daya Tahan Tubuh</span>
                </a>
                </li><li className="level1 nav-5-5">
                <a href="http://staging.mandjur.co.id/supplement/kesehatan-balita">
                <span>Kesehatan Balita</span>
                </a>
                </li><li className="level1 nav-5-6">
                <a href="http://staging.mandjur.co.id/supplement/kesehatan-ibu-hamil-dan-menyusui">
                <span>Kesehatan Ibu Hamil dan Menyusui</span>
                </a>
                </li><li className="level1 nav-5-7">
                <a href="http://staging.mandjur.co.id/supplement/kesehatan-kulit">
                <span>Kesehatan Kulit</span>
                </a>
                </li><li className="level1 nav-5-8">
                <a href="http://staging.mandjur.co.id/supplement/kesehatan-mata">
                <span>Kesehatan Mata</span>
                </a>
                </li><li className="level1 nav-5-9 parent">
                <a href="http://staging.mandjur.co.id/supplement/tulang">
                <span>Kesehatan Tulang</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-5-9-1 first">
                <a href="http://staging.mandjur.co.id/supplement/tulang/patah-tulang">
                <span>Luka Memar</span>
                </a>
                </li><li className="level2 nav-5-9-2">
                <a href="http://staging.mandjur.co.id/supplement/tulang/osteoarthritis">
                <span>Osteoarthritis</span>
                </a>
                </li><li className="level2 nav-5-9-3">
                <a href="http://staging.mandjur.co.id/supplement/tulang/osteoporosis">
                <span>Osteoporosis</span>
                </a>
                </li><li className="level2 nav-5-9-4 last">
                <a href="http://staging.mandjur.co.id/supplement/tulang/pengapuran">
                <span>Pengapuran</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-5-10 parent">
                <a href="http://staging.mandjur.co.id/supplement/kesuburan">
                <span>Kesuburan</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-5-10-5 first">
                <a href="http://staging.mandjur.co.id/supplement/kesuburan/pria">
                <span>Pria</span>
                </a>
                </li><li className="level2 nav-5-10-6">
                <a href="http://staging.mandjur.co.id/supplement/kesuburan/wanita">
                <span>Wanita</span>
                </a>
                </li><li className="level2 nav-5-10-7 last">
                <a href="http://staging.mandjur.co.id/supplement/kesuburan/penguat-kandungan">
                <span>Penguat Kandungan</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-5-11">
                <a href="http://staging.mandjur.co.id/supplement/minyak-angin">
                <span>Minyak Angin</span>
                </a>
                </li><li className="level1 nav-5-12">
                <a href="http://staging.mandjur.co.id/supplement/nafsu-makan">
                <span>Nafsu Makan</span>
                </a>
                </li><li className="level1 nav-5-13">
                <a href="http://staging.mandjur.co.id/supplement/nutracare">
                <span>Nutracare</span>
                </a>
                </li><li className="level1 nav-5-14">
                <a href="http://staging.mandjur.co.id/supplement/pelangsing">
                <span>Pelangsing</span>
                </a>
                </li><li className="level1 nav-5-15">
                <a href="http://staging.mandjur.co.id/supplement/penumbuh-rambut">
                <span>Penumbuh Rambut</span>
                </a>
                </li><li className="level1 nav-5-16">
                <a href="http://staging.mandjur.co.id/supplement/pertumbuhan">
                <span>Pertumbuhan</span>
                </a>
                </li><li className="level1 nav-5-17">
                <a href="http://staging.mandjur.co.id/supplement/sea-quill">
                <span>Sea Quill</span>
                </a>
                </li><li className="level1 nav-5-18">
                <a href="http://staging.mandjur.co.id/supplement/obat-kuat">
                <span>Stamina Pria</span>
                </a>
                </li><li className="level1 nav-5-19 last parent">
                <a href="http://staging.mandjur.co.id/supplement/supplement-organ-dalam">
                <span>Supplement Organ Dalam</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-5-19-8 first last">
                <a href="http://staging.mandjur.co.id/supplement/supplement-organ-dalam/kelelahan-kronis">
                <span>Kelelahan Kronis</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-6 level-top parent">
                <a href="#" className="level-top">
                <span>Personal Care</span>
                </a>
                <ul className="level0" style={{display: "none"}}>
                <li className="level1 nav-6-1 first">
                <a href="http://staging.mandjur.co.id/personal-care/dettol">
                <span>Dettol</span>
                </a>
                </li><li className="level1 nav-6-2 last">
                <a href="http://staging.mandjur.co.id/personal-care/veet">
                <span>Veet</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-7 level-top last parent">
                <a href="#" className="level-top">
                <span>Alat Kesehatan</span>
                </a>
                <ul className="level0" style={{display: "none"}}>
                <li className="level1 nav-7-1 first">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/alkes-lainnya">
                <span>Alkes Lainnya</span>
                </a>
                </li><li className="level1 nav-7-2">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/produk-dewasa">
                <span>Produk Dewasa</span>
                </a>
                </li><li className="level1 nav-7-3 parent">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi">
                <span>Kontrasepsi</span>
                </a>
                <ul className="level1" style={{display: "none"}}>
                <li className="level2 nav-7-3-1 first">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/durex">
                <span>Durex</span>
                </a>
                </li><li className="level2 nav-7-3-2">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/fiesta">
                <span>Fiesta</span>
                </a>
                </li><li className="level2 nav-7-3-3">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/sutra">
                <span>Sutra</span>
                </a>
                </li><li className="level2 nav-7-3-4">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/sagami">
                <span>Sagami</span>
                </a>
                </li><li className="level2 nav-7-3-5">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/supreme">
                <span>Supreme</span>
                </a>
                </li><li className="level2 nav-7-3-6">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/okamoto">
                <span>Okamoto</span>
                </a>
                </li><li className="level2 nav-7-3-7">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/vivo">
                <span>Vivo</span>
                </a>
                </li><li className="level2 nav-7-3-8">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/arjoena">
                <span>Arjoena</span>
                </a>
                </li><li className="level2 nav-7-3-9">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/sure">
                <span>Sure</span>
                </a>
                </li><li className="level2 nav-7-3-10 last">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/kontrasepsi/simplex">
                <span>Simplex</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-7-4">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/lubricant">
                <span>Lubricant</span>
                </a>
                </li><li className="level1 nav-7-5 last">
                <a href="http://staging.mandjur.co.id/alat-kesehatan/tes-kehamilan">
                <span>Tes Kehamilan</span>
                </a>
                </li>
                </ul>
                <span className="head"><a href="javascript:void(0)"></a></span></li>				</ul>
                            </div>
                        </div>
                </div>
                                <div className="nav-container visible-lg visible-md">
                                    <div className="container-inner">
                                        <div id="pt_custommenu" className="pt_custommenu">
                                        <div className="pt_custommenu_content">
                                            <div id="pt_menu_home" className="pt_menu act">
                                                <div className="parentMenu">
                                                    <a href="http://staging.mandjur.co.id/">
                                                    <span>Home</span>
                                                    </a>
                                                </div>
                                            </div>            
                                            <div id="pt_menu75" className="pt_menu nav-1">
                                                <div className="parentMenu">
                                                    <a href="#">
                                                    <span>Keluhan&nbsp;Kesehatan</span>
                                                    </a>
                                                </div>
                                            </div>                    
                                            <div id="pt_menu77" className="pt_menu nav-2">
                                                <div className="parentMenu">
                                                    <a href="#">
                                                    <span>Obat&nbsp;Luka</span>
                                                    </a>
                                                </div>
                                            </div>                    
                                            <div id="pt_menu74" className="pt_menu nav-3">
                                                <div className="parentMenu">
                                                    <a href="#">
                                                    <span>Bagian&nbsp;Tubuh</span>
                                                    </a>
                                                </div>
                                            </div>                    
                                            <div id="pt_menu184" className="pt_menu nav-4">
                                                <div className="parentMenu">
                                                    <a href="#">
                                                    <span>Susu</span>
                                                    </a>
                                                </div>
                                            </div>                    
                                            <div id="pt_menu50" className="pt_menu nav-5">
                                                <div className="parentMenu">
                                                    <a href="#">
                                                    <span>Supplement</span>
                                                    </a>
                                                </div>
                                            </div>                    
                                            <div id="pt_menu333" className="pt_menu nav-6">
                                                <div className="parentMenu">
                                                    <a href="#">
                                                    <span>Personal&nbsp;Care</span>
                                                    </a>
                                                </div>
                                            </div>                    
                                            <div id="pt_menu293" className="pt_menu nav-7">
                                                <div className="parentMenu">
                                                    <a href="#">
                                                    <span>Alat&nbsp;Kesehatan</span>
                                                    </a>
                                                </div>
                                            </div>                
                                            <div className="clearBoth"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Layout;