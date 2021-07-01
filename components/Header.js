import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import logoMandjur from '../public/images/logo-new-mandjur.png'

const Header = () => {
    return ( 
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
                                    <div id="mylogo" className="logo single-level-nav3">
                                    <Link href="/">
                                        <a className="logo">
                                            <Image src={logoMandjur} alt="PT Mandjur Sehat Abadi" 
                                            />
                                        </a>
                                    </Link>
                                    </div>
                                    <div className={styles.trustedMobile}>APOTEK TERPERCAYA</div>
                                </div>
                                <div id="mysearch" className="col-xs-12 col-md-9">
                                    <div className="top-menu single-level-nav2-">
                                        <form id="search_mini_form" action="https://www.mandjur.co.id/catalogsearch/result/" method="get">
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
                                                                    <Link href="/checkout/cart/">
                                                                    <a>
                                                                        <span className="my-cart">0</span>
                                                                        <span className="title-cart">Shopping cart:</span>
                                                                        <span className="price">Rp0,00</span>				
                                                                    </a>
                                                                    </Link>
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
                                                        <li>
                                                            <Link href="/customer/account/">
                                                                <a>Akun Saya</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/checkout/cart/">
                                                                <a>Keranjang Belanja</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/checkout/">
                                                                <a>Kasir</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/quotes">
                                                                <a>Konfirmasi Pembayaran</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/sales/guest/form/">
                                                                <a>Status Order</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/prescription/">
                                                                <a>Kirim Resep</a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/customer/account/login/">
                                                                <a>Log In</a>
                                                            </Link>
                                                        </li>
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
                                                    <span>Obat Keras</span>
                                                    </a>
                                                    <ul className="level0" style={{display: "none"}}>
                                                        <li className="level1 nav-1-1 first">
                                                            <a href="https://www.mandjur.co.id/obat-keras/obat-paten">
                                                            <span>Obat Paten</span>
                                                            </a>
                                                        </li>
                                                        <li className="level1 nav-1-2 last">
                                                            <a href="https://www.mandjur.co.id/obat-keras/obat-generik">
                                                            <span>Obat Generik</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <span className="head"><a href="javascript:void(0)"></a></span>
                                                </li>
                                                <li className="level0 nav-2 level-top parent">
                                                    <a href="#" className="level-top">
                                                    <span>Obat Bebas</span>
                                                    </a>
                                                    <ul className="level0" style={{display: "none"}}>
                                                        <li className="level1 nav-2-1 first">
                                                            <a href="https://www.mandjur.co.id/penyakit-ringan/amandel">
                                                            <span>Amandel</span>
                                                            </a>
                                                        </li>
                                                        <li className="level1 nav-2-2">
                                                            <a href="https://www.mandjur.co.id/penyakit-ringan/darah-rendah">
                                                            <span>Anemia</span>
                                                            </a>
                                                        </li>
                                                        <li className="level1 nav-2-3">
                                                            <a href="https://www.mandjur.co.id/penyakit-ringan/asam-urat">
                                                            <span>Asam Urat</span>
                                                            </a>
                                                        </li>
                                                        <li className="level1 nav-2-4">
                                                            <a href="https://www.mandjur.co.id/penyakit-ringan/batu-ginjal">
                                                            <span>Batu Ginjal</span>
                                                            </a>
                                                        </li>
                                                        <li className="level1 nav-2-5 parent">
                                                            <a href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu">
                                                            <span>Batuk dan Pilek</span>
                                                            </a>
                                                        <ul className="level1" style={{display: "none"}}>
                                                        <li className="level2 nav-2-5-1 first">
                                                        <a href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/kesehatan-balita">
                                                        <span>Balita Sakit</span>
                                                        </a>
                                                        </li><li className="level2 nav-2-5-2">
                                                        <a href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/batuk">
                                                        <span>Batuk</span>
                                                        </a>
                                                        </li><li className="level2 nav-2-5-3">
                                                        <a href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/campak-cacar-air">
                                                        <span>Campak &amp; Cacar Air</span>
                                                        </a>
                                                        </li><li className="level2 nav-2-5-4 last">
                                                        <a href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/flu">
                                                        <span>Flu</span>
                                                        </a>
                                                        </li>
                                                    </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-6">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/hipotensi">
                            <span>Darah Rendah / Hipotensi</span>
                            </a>
                            </li><li className="level1 nav-2-7">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/hipertensi-darah-tinggi">
                            <span>Darah Tinggi</span>
                            </a>
                            </li><li className="level1 nav-2-8">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/daya-ingat-kurang">
                            <span>Daya Ingat Kurang</span>
                            </a>
                            </li><li className="level1 nav-2-9">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/demam">
                            <span>Demam</span>
                            </a>
                            </li><li className="level1 nav-2-10">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/demam-berdarah">
                            <span>Demam Berdarah</span>
                            </a>
                            </li><li className="level1 nav-2-11">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/diabetes">
                            <span>Diabetes</span>
                            </a>
                            </li><li className="level1 nav-2-12 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-fungsi-hati">
                            <span>Gangguan Fungsi Hati</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-12-5 first last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-fungsi-hati/hepatitis">
                            <span>Hepatitis</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-13">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/batu-empedu">
                            <span>Gangguan Empedu</span>
                            </a>
                            </li><li className="level1 nav-2-14 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing">
                            <span>Gangguan Kencing</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-14-6 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing/kencing-tidak-lancar">
                            <span>Kencing Tidak Lancar</span>
                            </a>
                            </li><li className="level2 nav-2-14-7">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing/prostat-179">
                            <span>Kesehatan Prostat</span>
                            </a>
                            </li><li className="level2 nav-2-14-8 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing/infeksi-saluran-kencing">
                            <span>Infeksi Saluran kemih</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-15 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit">
                            <span>Gangguan Kulit</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-15-9 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/bau-badan">
                            <span>Bau Badan</span>
                            </a>
                            </li><li className="level2 nav-2-15-10">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/bisul-jerawat">
                            <span>Bisul &amp; Jerawat</span>
                            </a>
                            </li><li className="level2 nav-2-15-11">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/gatal-dan-alergi">
                            <span>Gatal dan Alergi</span>
                            </a>
                            </li><li className="level2 nav-2-15-12">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/jamur-panu-kurap-dan-kudis">
                            <span>Jamur, Panu, Kurap dan Kudis</span>
                            </a>
                            </li><li className="level2 nav-2-15-13">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/kelainan-pigmen">
                            <span>Kelainan Pigmen</span>
                            </a>
                            </li><li className="level2 nav-2-15-14 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/luka-bakar">
                            <span>Luka Bakar</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-16 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan">
                            <span>Gangguan Pencernaan</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-16-15 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/kembung">
                            <span>Kembung</span>
                            </a>
                            </li><li className="level2 nav-2-16-16">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/maag">
                            <span>Maag</span>
                            </a>
                            </li><li className="level2 nav-2-16-17">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/mual-mabuk-dan-masuk-angin">
                            <span>Mual, Mabuk, dan Masuk Angin</span>
                            </a>
                            </li><li className="level2 nav-2-16-18">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/pencernaan-lemah">
                            <span>Pencernaan Lemah</span>
                            </a>
                            </li><li className="level2 nav-2-16-19">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/sakit-perut">
                            <span>Sakit Perut (Diare)</span>
                            </a>
                            </li><li className="level2 nav-2-16-20 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/sembelit">
                            <span>Sembelit</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-17">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/pendengaran">
                            <span>Gangguan Pendengaran</span>
                            </a>
                            </li><li className="level1 nav-2-18">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kesehatan-mata">
                            <span>Gangguan Penglihatan</span>
                            </a>
                            </li><li className="level1 nav-2-19 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan">
                            <span>Gangguan Pernafasan dan Mulut</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-19-21 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/asthma">
                            <span>Asma / Sesak Nafas</span>
                            </a>
                            </li><li className="level2 nav-2-19-22">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/gondok">
                            <span>Gondok</span>
                            </a>
                            </li><li className="level2 nav-2-19-23">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/sakit-gigi">
                            <span>Sakit Gigi</span>
                            </a>
                            </li><li className="level2 nav-2-19-24 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/sinusitis">
                            <span>Sinusitis</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-20">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/hernia-turun-berok">
                            <span>Hernia / Turun Berok</span>
                            </a>
                            </li><li className="level1 nav-2-21">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/insomnia">
                            <span>Insomnia</span>
                            </a>
                            </li><li className="level1 nav-2-22 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/jantung">
                            <span>Jantung</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-22-25 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/jantung/jantung-koroner">
                            <span>Jantung Koroner</span>
                            </a>
                            </li><li className="level2 nav-2-22-26 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/jantung/menguatkan-jantung">
                            <span>Menguatkan Jantung</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-23">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kanker">
                            <span>Kanker</span>
                            </a>
                            </li><li className="level1 nav-2-24">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kesehatan-rambut">
                            <span>Kesehatan Rambut</span>
                            </a>
                            </li><li className="level1 nav-2-25 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan">
                            <span>Kewanitaan</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-25-27 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/haid">
                            <span>Haid</span>
                            </a>
                            </li><li className="level2 nav-2-25-28">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/keputihan">
                            <span>Keputihan</span>
                            </a>
                            </li><li className="level2 nav-2-25-29">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/benjolan-payudara">
                            <span>Kesehatan Payudara</span>
                            </a>
                            </li><li className="level2 nav-2-25-30">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/infeksi-vagina">
                            <span>Infeksi Vagina</span>
                            </a>
                            </li><li className="level2 nav-2-25-31 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/saluran-tuba-tersumbat">
                            <span>Saluran Tuba Tersumbat</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-26">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/kolesterol">
                            <span>Kolesterol</span>
                            </a>
                            </li><li className="level1 nav-2-27">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/pengapuran">
                            <span>Pengapuran</span>
                            </a>
                            </li><li className="level1 nav-2-28">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/stroke">
                            <span>Stroke</span>
                            </a>
                            </li><li className="level1 nav-2-29 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/rematik">
                            <span>Rematik</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-29-32 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/rematik/syaraf">
                            <span>Syaraf Terjepit</span>
                            </a>
                            </li><li className="level2 nav-2-29-33">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/rematik/pegal-linu">
                            <span>Pegal Linu</span>
                            </a>
                            </li><li className="level2 nav-2-29-34 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/rematik/sakit-pinggang">
                            <span>Sakit Pinggang</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-30 parent">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/sariawan">
                            <span>Sariawan, Panas Dalam dan Sakit Tenggorokan</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-2-30-35 first">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/sariawan/panas-dalam">
                            <span>Panas Dalam</span>
                            </a>
                            </li><li className="level2 nav-2-30-36">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/sariawan/sakit-tenggorokan">
                            <span>Sakit Tenggorokan</span>
                            </a>
                            </li><li className="level2 nav-2-30-37">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/sariawan/sariawan">
                            <span>Sariawan</span>
                            </a>
                            </li><li className="level2 nav-2-30-38 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/sariawan/suara-hilang">
                            <span>Suara Hilang</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-2-31">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/sakit-kepala">
                            <span>Sakit Kepala</span>
                            </a>
                            </li><li className="level1 nav-2-32">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/tifus">
                            <span>Tifus</span>
                            </a>
                            </li><li className="level1 nav-2-33 last">
                            <a href="https://www.mandjur.co.id/penyakit-ringan/wasir">
                            <span>Wasir</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-3 level-top parent">
                            <a href="#" className="level-top">
                            <span>Bagian Tubuh</span>
                            </a>
                            <ul className="level0" style={{display: "none"}}>
                            <li className="level1 nav-3-1 first parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi">
                            <span>Alat Vital</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-1-1 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi/pria">
                            <span>Pria</span>
                            </a>
                            </li><li className="level2 nav-3-1-2">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi/wanita">
                            <span>Wanita</span>
                            </a>
                            </li><li className="level2 nav-3-1-3 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi/infeksi-saluran-kencing">
                            <span>Saluran kemih</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-2 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/badan">
                            <span>Badan</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-2-4 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/badan/campak-cacar-air">
                            <span>Campak &amp; Cacar Air</span>
                            </a>
                            </li><li className="level2 nav-3-2-5">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/badan/deman">
                            <span>Deman</span>
                            </a>
                            </li><li className="level2 nav-3-2-6">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/badan/flu">
                            <span>Flu</span>
                            </a>
                            </li><li className="level2 nav-3-2-7">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/badan/masuk-angin-mual-mabok">
                            <span>Masuk Angin, Mual &amp; Mabok</span>
                            </a>
                            </li><li className="level2 nav-3-2-8 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/badan/panas-dalam">
                            <span>Panas Dalam</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-3 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/anus">
                            <span>Anus</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-3-9 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/anus/fistula">
                            <span>Nyeri BAB</span>
                            </a>
                            </li><li className="level2 nav-3-3-10 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/anus/wasir">
                            <span>Wasir</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-4">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/payudara">
                            <span>Dada / Payudara</span>
                            </a>
                            </li><li className="level1 nav-3-5 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kaki">
                            <span>Kaki dan Tangan</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-5-11 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kaki/keseleo">
                            <span>Keseleo dan Memar</span>
                            </a>
                            </li><li className="level2 nav-3-5-12">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kaki/asam-urat-tinggi">
                            <span>Pegal dan nyeri sendi</span>
                            </a>
                            </li><li className="level2 nav-3-5-13">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kaki/pegal-linu">
                            <span>Pegal Linu</span>
                            </a>
                            </li><li className="level2 nav-3-5-14 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kaki/rematik">
                            <span>Nyeri Sendi</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-6 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala">
                            <span>Kepala</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-6-15 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/batuk-demam-dan-flu">
                            <span>Demam dan Flu</span>
                            </a>
                            </li><li className="level2 nav-3-6-16">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/hidung">
                            <span>Hidung</span>
                            </a>
                            </li><li className="level2 nav-3-6-17">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/mata">
                            <span>Mata</span>
                            </a>
                            </li><li className="level2 nav-3-6-18">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/migren">
                            <span>Migren</span>
                            </a>
                            </li><li className="level2 nav-3-6-19">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/mulut">
                            <span>Mulut</span>
                            </a>
                            </li><li className="level2 nav-3-6-20">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/otak">
                            <span>Otak</span>
                            </a>
                            </li><li className="level2 nav-3-6-21">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/rambut">
                            <span>Rambut</span>
                            </a>
                            </li><li className="level2 nav-3-6-22">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/sakit-kepala">
                            <span>Sakit Kepala</span>
                            </a>
                            </li><li className="level2 nav-3-6-23 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kepala/telinga">
                            <span>Telinga</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-7 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kulit">
                            <span>Kulit</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-7-24 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kulit/bisul-jerawat">
                            <span>Bisul &amp; Jerawat</span>
                            </a>
                            </li><li className="level2 nav-3-7-25">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kulit/gatal-dan-alergi">
                            <span>Gatal dan Alergi</span>
                            </a>
                            </li><li className="level2 nav-3-7-26">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kulit/jamur-panu-kurap-dan-kudis">
                            <span>Jamur, Panu, Kurap dan Kudis</span>
                            </a>
                            </li><li className="level2 nav-3-7-27">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kulit/kelainan-pigmen">
                            <span>Kelainan Pigmen</span>
                            </a>
                            </li><li className="level2 nav-3-7-28 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/kulit/luka-bakar">
                            <span>Luka Bakar</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-8 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/leher">
                            <span>Leher</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-8-29 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/leher/batuk">
                            <span>Batuk</span>
                            </a>
                            </li><li className="level2 nav-3-8-30">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/leher/gondok">
                            <span>Leher Bengkak</span>
                            </a>
                            </li><li className="level2 nav-3-8-31">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/leher/amandel">
                            <span>Sakit Tengorokan Demam</span>
                            </a>
                            </li><li className="level2 nav-3-8-32">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/leher/hilang-suara">
                            <span>Suara Hilang</span>
                            </a>
                            </li><li className="level2 nav-3-8-33 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/leher/tenggorokan">
                            <span>Tenggorokan</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-9 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam">
                            <span>Organ Dalam</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-9-34 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/empedu">
                            <span>Bagian Tubuh Lainnya</span>
                            </a>
                            </li><li className="level2 nav-3-9-35">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/ginjal">
                            <span>Ginjal</span>
                            </a>
                            </li><li className="level2 nav-3-9-36">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/hati">
                            <span>Hati</span>
                            </a>
                            </li><li className="level2 nav-3-9-37">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/jantung">
                            <span>Jantung</span>
                            </a>
                            </li><li className="level2 nav-3-9-38">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/pangkreas">
                            <span>Pangkreas</span>
                            </a>
                            </li><li className="level2 nav-3-9-39 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/paru-paru">
                            <span>Paru - Paru</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-10 parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut">
                            <span>Perut</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-10-40 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut/hernia-turun-berok">
                            <span>Bengkak Angkat Berat</span>
                            </a>
                            </li><li className="level2 nav-3-10-41">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut/tifus">
                            <span>Demam &amp; Pencernaan</span>
                            </a>
                            </li><li className="level2 nav-3-10-42">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut/kembung">
                            <span>Kembung</span>
                            </a>
                            </li><li className="level2 nav-3-10-43">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut/maag">
                            <span>Maag</span>
                            </a>
                            </li><li className="level2 nav-3-10-44">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut/pencernaan-lemah">
                            <span>Pencernaan Lemah</span>
                            </a>
                            </li><li className="level2 nav-3-10-45">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut/sakit-perut">
                            <span>Sakit Perut</span>
                            </a>
                            </li><li className="level2 nav-3-10-46 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/perut/sembelit">
                            <span>Sembelit</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-3-11 last parent">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing">
                            <span>Saluran Kencing</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-3-11-47 first">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing/buang-air-kecil-dimalam-hari">
                            <span>Buang air kecil dimalam hari</span>
                            </a>
                            </li><li className="level2 nav-3-11-48">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing/kencing-tidak-lancar">
                            <span>Kencing Tidak Lancar</span>
                            </a>
                            </li><li className="level2 nav-3-11-49 last">
                            <a href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing/infeksi-saluran-kencing">
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
                            <a href="https://www.mandjur.co.id/susu/enfagrow">
                            <span>Enfagrow</span>
                            </a>
                            </li><li className="level1 nav-4-2">
                            <a href="https://www.mandjur.co.id/susu/enfamil">
                            <span>Enfamil</span>
                            </a>
                            </li><li className="level1 nav-4-3">
                            <a href="https://www.mandjur.co.id/susu/sustagen">
                            <span>Sustagen</span>
                            </a>
                            </li><li className="level1 nav-4-4">
                            <a href="https://www.mandjur.co.id/susu/nutricia">
                            <span>Nutricia</span>
                            </a>
                            </li><li className="level1 nav-4-5">
                            <a href="https://www.mandjur.co.id/susu/nestle">
                            <span>Nestle</span>
                            </a>
                            </li><li className="level1 nav-4-6">
                            <a href="https://www.mandjur.co.id/susu/sgm">
                            <span>SGM</span>
                            </a>
                            </li><li className="level1 nav-4-7">
                            <a href="https://www.mandjur.co.id/susu/susu-formula-0-6-bulan">
                            <span>Susu Formula 0 - 6 Bulan</span>
                            </a>
                            </li><li className="level1 nav-4-8">
                            <a href="https://www.mandjur.co.id/susu/susu-formula-6-12-bulan">
                            <span>Susu Formula 6 - 12 Bulan</span>
                            </a>
                            </li><li className="level1 nav-4-9">
                            <a href="https://www.mandjur.co.id/susu/susu-pertumbuhan-1-3-tahun">
                            <span>Susu Pertumbuhan 1 - 3 Tahun</span>
                            </a>
                            </li><li className="level1 nav-4-10">
                            <a href="https://www.mandjur.co.id/susu/susu-pertumbuhan-3-12-tahun">
                            <span>Susu Pertumbuhan 3 - 12 Tahun</span>
                            </a>
                            </li><li className="level1 nav-4-11">
                            <a href="https://www.mandjur.co.id/susu/susu-ibu-hamil-dan-menyusui">
                            <span>Susu Ibu Hamil dan Menyusui</span>
                            </a>
                            </li><li className="level1 nav-4-12 last">
                            <a href="https://www.mandjur.co.id/susu/susu-kebutuhan-khusus">
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
                            <a href="https://www.mandjur.co.id/supplement/nutriwell">
                            <span>Nutriwell</span>
                            </a>
                            </li><li className="level1 nav-5-2">
                            <a href="https://www.mandjur.co.id/supplement/blackmores">
                            <span>Blackmores</span>
                            </a>
                            </li><li className="level1 nav-5-3">
                            <a href="https://www.mandjur.co.id/supplement/natures-plus">
                            <span>Natures Plus</span>
                            </a>
                            </li><li className="level1 nav-5-4">
                            <a href="https://www.mandjur.co.id/supplement/wellness">
                            <span>Wellness</span>
                            </a>
                            </li><li className="level1 nav-5-5">
                            <a href="https://www.mandjur.co.id/supplement/daya-tahan-tubuh">
                            <span>Daya Tahan Tubuh</span>
                            </a>
                            </li><li className="level1 nav-5-6">
                            <a href="https://www.mandjur.co.id/supplement/kesehatan-balita">
                            <span>Kesehatan Balita</span>
                            </a>
                            </li><li className="level1 nav-5-7">
                            <a href="https://www.mandjur.co.id/supplement/kesehatan-ibu-hamil-dan-menyusui">
                            <span>Kesehatan Ibu Hamil dan Menyusui</span>
                            </a>
                            </li><li className="level1 nav-5-8">
                            <a href="https://www.mandjur.co.id/supplement/kesehatan-kulit">
                            <span>Kesehatan Kulit</span>
                            </a>
                            </li><li className="level1 nav-5-9">
                            <a href="https://www.mandjur.co.id/supplement/kesehatan-mata">
                            <span>Kesehatan Mata</span>
                            </a>
                            </li><li className="level1 nav-5-10 parent">
                            <a href="https://www.mandjur.co.id/supplement/tulang">
                            <span>Kesehatan Tulang</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-5-10-1 first">
                            <a href="https://www.mandjur.co.id/supplement/tulang/patah-tulang">
                            <span>Luka Memar</span>
                            </a>
                            </li><li className="level2 nav-5-10-2">
                            <a href="https://www.mandjur.co.id/supplement/tulang/osteoarthritis">
                            <span>Osteoarthritis</span>
                            </a>
                            </li><li className="level2 nav-5-10-3">
                            <a href="https://www.mandjur.co.id/supplement/tulang/osteoporosis">
                            <span>Osteoporosis</span>
                            </a>
                            </li><li className="level2 nav-5-10-4 last">
                            <a href="https://www.mandjur.co.id/supplement/tulang/pengapuran">
                            <span>Pengapuran</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-5-11 parent">
                            <a href="https://www.mandjur.co.id/supplement/kesuburan">
                            <span>Kesuburan</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-5-11-5 first">
                            <a href="https://www.mandjur.co.id/supplement/kesuburan/pria">
                            <span>Pria</span>
                            </a>
                            </li><li className="level2 nav-5-11-6">
                            <a href="https://www.mandjur.co.id/supplement/kesuburan/wanita">
                            <span>Wanita</span>
                            </a>
                            </li><li className="level2 nav-5-11-7 last">
                            <a href="https://www.mandjur.co.id/supplement/kesuburan/penguat-kandungan">
                            <span>Penguat Kandungan</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-5-12">
                            <a href="https://www.mandjur.co.id/supplement/minyak-angin">
                            <span>Minyak Angin</span>
                            </a>
                            </li><li className="level1 nav-5-13">
                            <a href="https://www.mandjur.co.id/supplement/nafsu-makan">
                            <span>Nafsu Makan</span>
                            </a>
                            </li><li className="level1 nav-5-14">
                            <a href="https://www.mandjur.co.id/supplement/nutracare">
                            <span>Nutracare</span>
                            </a>
                            </li><li className="level1 nav-5-15">
                            <a href="https://www.mandjur.co.id/supplement/pelangsing">
                            <span>Pelangsing</span>
                            </a>
                            </li><li className="level1 nav-5-16">
                            <a href="https://www.mandjur.co.id/supplement/penumbuh-rambut">
                            <span>Penumbuh Rambut</span>
                            </a>
                            </li><li className="level1 nav-5-17">
                            <a href="https://www.mandjur.co.id/supplement/pertumbuhan">
                            <span>Pertumbuhan</span>
                            </a>
                            </li><li className="level1 nav-5-18">
                            <a href="https://www.mandjur.co.id/supplement/sea-quill">
                            <span>Sea Quill</span>
                            </a>
                            </li><li className="level1 nav-5-19">
                            <a href="https://www.mandjur.co.id/supplement/sido-muncul">
                            <span>Sido Muncul</span>
                            </a>
                            </li><li className="level1 nav-5-20">
                            <a href="https://www.mandjur.co.id/supplement/obat-kuat">
                            <span>Stamina Pria</span>
                            </a>
                            </li><li className="level1 nav-5-21">
                            <a href="https://www.mandjur.co.id/supplement/simplisia">
                            <span>Simplisia</span>
                            </a>
                            </li><li className="level1 nav-5-22 last parent">
                            <a href="https://www.mandjur.co.id/supplement/supplement-organ-dalam">
                            <span>Supplement Organ Dalam</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-5-22-8 first last">
                            <a href="https://www.mandjur.co.id/supplement/supplement-organ-dalam/kelelahan-kronis">
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
                            <a href="https://www.mandjur.co.id/personal-care/asepso">
                            <span>Asepso</span>
                            </a>
                            </li><li className="level1 nav-6-2">
                            <a href="https://www.mandjur.co.id/personal-care/antis">
                            <span>Antis</span>
                            </a>
                            </li><li className="level1 nav-6-3">
                            <a href="https://www.mandjur.co.id/personal-care/betadine">
                            <span>Betadine</span>
                            </a>
                            </li><li className="level1 nav-6-4">
                            <a href="https://www.mandjur.co.id/personal-care/cetaphil">
                            <span>Cetaphil</span>
                            </a>
                            </li><li className="level1 nav-6-5">
                            <a href="https://www.mandjur.co.id/personal-care/dettol">
                            <span>Dettol</span>
                            </a>
                            </li><li className="level1 nav-6-6">
                            <a href="https://www.mandjur.co.id/personal-care/dove">
                            <span>Dove</span>
                            </a>
                            </li><li className="level1 nav-6-7">
                            <a href="https://www.mandjur.co.id/personal-care/lifebuoy">
                            <span>Lifebuoy</span>
                            </a>
                            </li><li className="level1 nav-6-8">
                            <a href="https://www.mandjur.co.id/personal-care/love-beauty-and-planet">
                            <span>Love Beauty and Planet</span>
                            </a>
                            </li><li className="level1 nav-6-9">
                            <a href="https://www.mandjur.co.id/personal-care/lux-botanicals">
                            <span>Lux Botanicals</span>
                            </a>
                            </li><li className="level1 nav-6-10">
                            <a href="https://www.mandjur.co.id/personal-care/mustela">
                            <span>Mustela</span>
                            </a>
                            </li><li className="level1 nav-6-11">
                            <a href="https://www.mandjur.co.id/personal-care/natur">
                            <span>Natur</span>
                            </a>
                            </li><li className="level1 nav-6-12">
                            <a href="https://www.mandjur.co.id/personal-care/parfume">
                            <span>Parfume</span>
                            </a>
                            </li><li className="level1 nav-6-13">
                            <a href="https://www.mandjur.co.id/personal-care/pepsodent">
                            <span>Pepsodent</span>
                            </a>
                            </li><li className="level1 nav-6-14">
                            <a href="https://www.mandjur.co.id/personal-care/pure-care">
                            <span>Pure Care</span>
                            </a>
                            </li><li className="level1 nav-6-15">
                            <a href="https://www.mandjur.co.id/personal-care/rexona">
                            <span>Rexona</span>
                            </a>
                            </li><li className="level1 nav-6-16">
                            <a href="https://www.mandjur.co.id/personal-care/sebamed">
                            <span>Sebamed</span>
                            </a>
                            </li><li className="level1 nav-6-17">
                            <a href="https://www.mandjur.co.id/personal-care/selsun">
                            <span>Selsun</span>
                            </a>
                            </li><li className="level1 nav-6-18">
                            <a href="https://www.mandjur.co.id/personal-care/tropicana-slim">
                            <span>Tropicana Slim</span>
                            </a>
                            </li><li className="level1 nav-6-19">
                            <a href="https://www.mandjur.co.id/personal-care/vaseline">
                            <span>Vaseline</span>
                            </a>
                            </li><li className="level1 nav-6-20 last">
                            <a href="https://www.mandjur.co.id/personal-care/veet">
                            <span>Veet</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level0 nav-7 level-top last parent">
                            <a href="#" className="level-top">
                            <span>Alat Kesehatan</span>
                            </a>
                            <ul className="level0" style={{display: "none"}}>
                            <li className="level1 nav-7-1 first parent">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya">
                            <span>Alkes Lainnya</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-7-1-1 first">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya/autocheck">
                            <span>Autocheck</span>
                            </a>
                            </li><li className="level2 nav-7-1-2">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya/omron">
                            <span>Omron</span>
                            </a>
                            </li><li className="level2 nav-7-1-3 last">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya/sinocare">
                            <span>Sinocare</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-7-2">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/cotton-buds">
                            <span>Cotton Buds</span>
                            </a>
                            </li><li className="level1 nav-7-3">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/hand-sanitizer">
                            <span>Hand Sanitizer</span>
                            </a>
                            </li><li className="level1 nav-7-4">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/masker">
                            <span>Masker</span>
                            </a>
                            </li><li className="level1 nav-7-5">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/obat-gosok">
                            <span>Obat Gosok</span>
                            </a>
                            </li><li className="level1 nav-7-6">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/pembalut-wanita">
                            <span>Pembalut Wanita</span>
                            </a>
                            </li><li className="level1 nav-7-7">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/produk-dewasa">
                            <span>Produk Dewasa</span>
                            </a>
                            </li><li className="level1 nav-7-8 parent">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi">
                            <span>Kontrasepsi</span>
                            </a>
                            <ul className="level1" style={{display: "none"}}>
                            <li className="level2 nav-7-8-4 first">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/durex">
                            <span>Durex</span>
                            </a>
                            </li><li className="level2 nav-7-8-5">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/fiesta">
                            <span>Fiesta</span>
                            </a>
                            </li><li className="level2 nav-7-8-6">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/sutra">
                            <span>Sutra</span>
                            </a>
                            </li><li className="level2 nav-7-8-7">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/sagami">
                            <span>Sagami</span>
                            </a>
                            </li><li className="level2 nav-7-8-8">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/supreme">
                            <span>Supreme</span>
                            </a>
                            </li><li className="level2 nav-7-8-9">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/okamoto">
                            <span>Okamoto</span>
                            </a>
                            </li><li className="level2 nav-7-8-10">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/vivo">
                            <span>Vivo</span>
                            </a>
                            </li><li className="level2 nav-7-8-11">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/arjoena">
                            <span>Arjoena</span>
                            </a>
                            </li><li className="level2 nav-7-8-12">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/sure">
                            <span>Sure</span>
                            </a>
                            </li><li className="level2 nav-7-8-13 last">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/simplex">
                            <span>Simplex</span>
                            </a>
                            </li>
                            </ul>
                            <span className="head"><a href="javascript:void(0)"></a></span></li><li className="level1 nav-7-9">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/lubricant">
                            <span>Lubricant</span>
                            </a>
                            </li><li className="level1 nav-7-10 last">
                            <a href="https://www.mandjur.co.id/alat-kesehatan/tes-kehamilan">
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
                                <a href="https://www.mandjur.co.id/">
                                <span>Home</span>
                                </a>
                                </div>
                                </div>            <div id="pt_menu352" className="pt_menu nav-1">
                                <div className="parentMenu">
                                <a href="#">
                                <span>Obat&nbsp;Keras</span>
                                </a>
                                </div>
                                <div id="popup352" className="popup" style={{width: "220px", top: "41px", left: "93.9219px", overflow: "hidden", display: "none"}}>
                                <div className="block1" id="block1352" style={{width: "220px"}}>
                                <div className="column last col1"><div className="itemMenu level1"><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/obat-keras/obat-paten"><span>Obat&nbsp;Paten</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/obat-keras/obat-generik"><span>Obat&nbsp;Generik</span></a></div></div>
                                <div className="clearBoth"></div>
                                </div>
                                </div>
                                </div>                    <div id="pt_menu75" className="pt_menu nav-2">
                                <div className="parentMenu">
                                <a href="#">
                                <span>Obat&nbsp;Bebas</span>
                                </a>
                                </div>
                                <div id="popup75" className="popup" style={{width: "820px", top: "41px", left: "226.953px", overflow: "hidden", display: "none"}}>
                                <div className="block1" id="block175" style={{width: "820px"}}>
                                <div className="column first col1"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/amandel"><span>Amandel</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/darah-rendah"><span>Anemia</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/asam-urat"><span>Asam&nbsp;Urat</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/batu-ginjal"><span>Batu&nbsp;Ginjal</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu"><span>Batuk&nbsp;dan&nbsp;Pilek</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/kesehatan-balita"><span>Balita&nbsp;Sakit</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/batuk"><span>Batuk</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/campak-cacar-air"><span>Campak&nbsp;&amp;&nbsp;Cacar&nbsp;Air</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/batuk-demam-dan-flu/flu"><span>Flu</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/hipotensi"><span>Darah&nbsp;Rendah&nbsp;/&nbsp;Hipotensi</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/hipertensi-darah-tinggi"><span>Darah&nbsp;Tinggi</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/daya-ingat-kurang"><span>Daya&nbsp;Ingat&nbsp;Kurang</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/demam"><span>Demam</span></a></div></div><div className="column col2"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/demam-berdarah"><span>Demam&nbsp;Berdarah</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/diabetes"><span>Diabetes</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-fungsi-hati"><span>Gangguan&nbsp;Fungsi&nbsp;Hati</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-fungsi-hati/hepatitis"><span>Hepatitis</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/batu-empedu"><span>Gangguan&nbsp;Empedu</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing"><span>Gangguan&nbsp;Kencing</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing/kencing-tidak-lancar"><span>Kencing&nbsp;Tidak&nbsp;Lancar</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing/prostat-179"><span>Kesehatan&nbsp;Prostat</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-kencing/infeksi-saluran-kencing"><span>Infeksi&nbsp;Saluran&nbsp;kemih</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit"><span>Gangguan&nbsp;Kulit</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/bau-badan"><span>Bau&nbsp;Badan</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/bisul-jerawat"><span>Bisul&nbsp;&amp;&nbsp;Jerawat</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/gatal-dan-alergi"><span>Gatal&nbsp;dan&nbsp;Alergi</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/jamur-panu-kurap-dan-kudis"><span>Jamur,&nbsp;Panu,&nbsp;Kurap&nbsp;dan&nbsp;Kudis</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/kelainan-pigmen"><span>Kelainan&nbsp;Pigmen</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/penyakit-kulit/luka-bakar"><span>Luka&nbsp;Bakar</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan"><span>Gangguan&nbsp;Pencernaan</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/kembung"><span>Kembung</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/maag"><span>Maag</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/mual-mabuk-dan-masuk-angin"><span>Mual,&nbsp;Mabuk,&nbsp;dan&nbsp;Masuk&nbsp;Angin</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/pencernaan-lemah"><span>Pencernaan&nbsp;Lemah</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/sakit-perut"><span>Sakit&nbsp;Perut&nbsp;(Diare)</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pencernaan/sembelit"><span>Sembelit</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/pendengaran"><span>Gangguan&nbsp;Pendengaran</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/kesehatan-mata"><span>Gangguan&nbsp;Penglihatan</span></a></div></div><div className="column col3"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan"><span>Gangguan&nbsp;Pernafasan&nbsp;dan&nbsp;Mulut</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/asthma"><span>Asma&nbsp;/&nbsp;Sesak&nbsp;Nafas</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/gondok"><span>Gondok</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/sakit-gigi"><span>Sakit&nbsp;Gigi</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/gangguan-pernafasan/sinusitis"><span>Sinusitis</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/hernia-turun-berok"><span>Hernia&nbsp;/&nbsp;Turun&nbsp;Berok</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/insomnia"><span>Insomnia</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/jantung"><span>Jantung</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/jantung/jantung-koroner"><span>Jantung&nbsp;Koroner</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/jantung/menguatkan-jantung"><span>Menguatkan&nbsp;Jantung</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/kanker"><span>Kanker</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/kesehatan-rambut"><span>Kesehatan&nbsp;Rambut</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan"><span>Kewanitaan</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/haid"><span>Haid</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/keputihan"><span>Keputihan</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/benjolan-payudara"><span>Kesehatan&nbsp;Payudara</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/infeksi-vagina"><span>Infeksi&nbsp;Vagina</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/kewanitaan/saluran-tuba-tersumbat"><span>Saluran&nbsp;Tuba&nbsp;Tersumbat</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/kolesterol"><span>Kolesterol</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/pengapuran"><span>Pengapuran</span></a></div></div><div className="column last col4"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/stroke"><span>Stroke</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/rematik"><span>Rematik</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/rematik/syaraf"><span>Syaraf&nbsp;Terjepit</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/rematik/pegal-linu"><span>Pegal&nbsp;Linu</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/rematik/sakit-pinggang"><span>Sakit&nbsp;Pinggang</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/sariawan"><span>Sariawan,&nbsp;Panas&nbsp;Dalam&nbsp;dan&nbsp;Sakit&nbsp;Tenggorokan</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/sariawan/panas-dalam"><span>Panas&nbsp;Dalam</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/sariawan/sakit-tenggorokan"><span>Sakit&nbsp;Tenggorokan</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/sariawan/sariawan"><span>Sariawan</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/penyakit-ringan/sariawan/suara-hilang"><span>Suara&nbsp;Hilang</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/sakit-kepala"><span>Sakit&nbsp;Kepala</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/tifus"><span>Tifus</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/penyakit-ringan/wasir"><span>Wasir</span></a></div></div>
                                <div className="clearBoth"></div>
                                </div>
                                </div>
                                </div>                    <div id="pt_menu74" className="pt_menu nav-3">
                                <div className="parentMenu">
                                <a href="#">
                                <span>Bagian&nbsp;Tubuh</span>
                                </a>
                                </div>
                                <div id="popup74" className="popup" style={{width: "820px", top: "41px", left: "359.641px", overflow: "hidden", display: "none"}}>
                                <div className="block1" id="block174" style={{width: "820px"}}>
                                <div className="column first col1"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi"><span>Alat&nbsp;Vital</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi/pria"><span>Pria</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi/wanita"><span>Wanita</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/alat-reproduksi/infeksi-saluran-kencing"><span>Saluran&nbsp;kemih</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/badan"><span>Badan</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/badan/campak-cacar-air"><span>Campak&nbsp;&amp;&nbsp;Cacar&nbsp;Air</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/badan/deman"><span>Deman</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/badan/flu"><span>Flu</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/badan/masuk-angin-mual-mabok"><span>Masuk&nbsp;Angin,&nbsp;Mual&nbsp;&amp;&nbsp;Mabok</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/badan/panas-dalam"><span>Panas&nbsp;Dalam</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/anus"><span>Anus</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/anus/fistula"><span>Nyeri&nbsp;BAB</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/anus/wasir"><span>Wasir</span></a></div></div></div></div><div className="column col2"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/payudara"><span>Dada&nbsp;/&nbsp;Payudara</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/kaki"><span>Kaki&nbsp;dan&nbsp;Tangan</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kaki/keseleo"><span>Keseleo&nbsp;dan&nbsp;Memar</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kaki/asam-urat-tinggi"><span>Pegal&nbsp;dan&nbsp;nyeri&nbsp;sendi</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kaki/pegal-linu"><span>Pegal&nbsp;Linu</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kaki/rematik"><span>Nyeri&nbsp;Sendi</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/kepala"><span>Kepala</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/batuk-demam-dan-flu"><span>Demam&nbsp;dan&nbsp;Flu</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/hidung"><span>Hidung</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/mata"><span>Mata</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/migren"><span>Migren</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/mulut"><span>Mulut</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/otak"><span>Otak</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/rambut"><span>Rambut</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/sakit-kepala"><span>Sakit&nbsp;Kepala</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kepala/telinga"><span>Telinga</span></a></div></div></div></div><div className="column col3"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/kulit"><span>Kulit</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kulit/bisul-jerawat"><span>Bisul&nbsp;&amp;&nbsp;Jerawat</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kulit/gatal-dan-alergi"><span>Gatal&nbsp;dan&nbsp;Alergi</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kulit/jamur-panu-kurap-dan-kudis"><span>Jamur,&nbsp;Panu,&nbsp;Kurap&nbsp;dan&nbsp;Kudis</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kulit/kelainan-pigmen"><span>Kelainan&nbsp;Pigmen</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/kulit/luka-bakar"><span>Luka&nbsp;Bakar</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/leher"><span>Leher</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/leher/batuk"><span>Batuk</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/leher/gondok"><span>Leher&nbsp;Bengkak</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/leher/amandel"><span>Sakit&nbsp;Tengorokan&nbsp;Demam</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/leher/hilang-suara"><span>Suara&nbsp;Hilang</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/leher/tenggorokan"><span>Tenggorokan</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam"><span>Organ&nbsp;Dalam</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/empedu"><span>Bagian&nbsp;Tubuh&nbsp;Lainnya</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/ginjal"><span>Ginjal</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/hati"><span>Hati</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/jantung"><span>Jantung</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/pangkreas"><span>Pangkreas</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/organ-dalam/paru-paru"><span>Paru&nbsp;-&nbsp;Paru</span></a></div></div></div></div><div className="column last col4"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/perut"><span>Perut</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/perut/hernia-turun-berok"><span>Bengkak&nbsp;Angkat&nbsp;Berat</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/perut/tifus"><span>Demam&nbsp;&amp;&nbsp;Pencernaan</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/perut/kembung"><span>Kembung</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/perut/maag"><span>Maag</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/perut/pencernaan-lemah"><span>Pencernaan&nbsp;Lemah</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/perut/sakit-perut"><span>Sakit&nbsp;Perut</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/perut/sembelit"><span>Sembelit</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing"><span>Saluran&nbsp;Kencing</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing/buang-air-kecil-dimalam-hari"><span>Buang&nbsp;air&nbsp;kecil&nbsp;dimalam&nbsp;hari</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing/kencing-tidak-lancar"><span>Kencing&nbsp;Tidak&nbsp;Lancar</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/bagian-tubuh/saluran-kencing/infeksi-saluran-kencing"><span>Saluran&nbsp;Kemih</span></a></div></div></div></div>
                                <div className="clearBoth"></div>
                                </div>
                                </div>
                                </div>                    <div id="pt_menu184" className="pt_menu nav-4">
                                <div className="parentMenu">
                                <a href="#">
                                <span>Susu</span>
                                </a>
                                </div>
                                <div id="popup184" className="popup" style={{width: "220px", top: "41px", left: "512.609px", overflow: "hidden", display: "none"}}>
                                <div className="block1" id="block1184" style={{width: "220px"}}>
                                <div className="column last col1"><div className="itemMenu level1"><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/enfagrow"><span>Enfagrow</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/enfamil"><span>Enfamil</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/sustagen"><span>Sustagen</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/nutricia"><span>Nutricia</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/nestle"><span>Nestle</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/sgm"><span>SGM</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/susu-formula-0-6-bulan"><span>Susu&nbsp;Formula&nbsp;0&nbsp;-&nbsp;6&nbsp;Bulan</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/susu-formula-6-12-bulan"><span>Susu&nbsp;Formula&nbsp;6&nbsp;-&nbsp;12&nbsp;Bulan</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/susu-pertumbuhan-1-3-tahun"><span>Susu&nbsp;Pertumbuhan&nbsp;1&nbsp;-&nbsp;3&nbsp;Tahun</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/susu-pertumbuhan-3-12-tahun"><span>Susu&nbsp;Pertumbuhan&nbsp;3&nbsp;-&nbsp;12&nbsp;Tahun</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/susu-ibu-hamil-dan-menyusui"><span>Susu&nbsp;Ibu&nbsp;Hamil&nbsp;dan&nbsp;Menyusui</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/susu/susu-kebutuhan-khusus"><span>Susu&nbsp;Kebutuhan&nbsp;Khusus</span></a></div></div>
                                <div className="clearBoth"></div>
                                </div>
                                </div>
                                </div>                    <div id="pt_menu50" className="pt_menu nav-5">
                                <div className="parentMenu">
                                <a href="#">
                                <span>Supplement</span>
                                </a>
                                </div>
                                <div id="popup50" className="popup" style={{width: "620px", top: "41px", left: "578px", overflow: "hidden", display: "none"}}>
                                <div className="block1" id="block150" style={{width: "620px"}}>
                                <div className="column first col1"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/nutriwell"><span>Nutriwell</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/blackmores"><span>Blackmores</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/natures-plus"><span>Natures&nbsp;Plus</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/wellness"><span>Wellness</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/daya-tahan-tubuh"><span>Daya&nbsp;Tahan&nbsp;Tubuh</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/kesehatan-balita"><span>Kesehatan&nbsp;Balita</span></a></div></div><div className="column col2"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/kesehatan-ibu-hamil-dan-menyusui"><span>Kesehatan&nbsp;Ibu&nbsp;Hamil&nbsp;dan&nbsp;Menyusui</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/kesehatan-kulit"><span>Kesehatan&nbsp;Kulit</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/kesehatan-mata"><span>Kesehatan&nbsp;Mata</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/tulang"><span>Kesehatan&nbsp;Tulang</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/tulang/patah-tulang"><span>Luka&nbsp;Memar</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/tulang/osteoarthritis"><span>Osteoarthritis</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/tulang/osteoporosis"><span>Osteoporosis</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/tulang/pengapuran"><span>Pengapuran</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/kesuburan"><span>Kesuburan</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/kesuburan/pria"><span>Pria</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/kesuburan/wanita"><span>Wanita</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/kesuburan/penguat-kandungan"><span>Penguat&nbsp;Kandungan</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/minyak-angin"><span>Minyak&nbsp;Angin</span></a></div></div><div className="column last col3"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/nafsu-makan"><span>Nafsu&nbsp;Makan</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/nutracare"><span>Nutracare</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/pelangsing"><span>Pelangsing</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/penumbuh-rambut"><span>Penumbuh&nbsp;Rambut</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/pertumbuhan"><span>Pertumbuhan</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/sea-quill"><span>Sea&nbsp;Quill</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/sido-muncul"><span>Sido&nbsp;Muncul</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/obat-kuat"><span>Stamina&nbsp;Pria</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/simplisia"><span>Simplisia</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/supplement/supplement-organ-dalam"><span>Supplement&nbsp;Organ&nbsp;Dalam</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/supplement/supplement-organ-dalam/kelelahan-kronis"><span>Kelelahan&nbsp;Kronis</span></a></div></div></div></div>
                                <div className="clearBoth"></div>
                                </div>
                                </div>
                                </div>                    <div id="pt_menu333" className="pt_menu nav-6">
                                <div className="parentMenu">
                                <a href="#">
                                <span>Personal&nbsp;Care</span>
                                </a>
                                </div>
                                <div id="popup333" className="popup" style={{width: "220px", top: "41px", left: "737.578px", overflow: "hidden", display: "none"}}>
                                <div className="block1" id="block1333" style={{width: "220px"}}>
                                <div className="column last col1"><div className="itemMenu level1"><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/asepso"><span>Asepso</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/antis"><span>Antis</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/betadine"><span>Betadine</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/cetaphil"><span>Cetaphil</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/dettol"><span>Dettol</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/dove"><span>Dove</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/lifebuoy"><span>Lifebuoy</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/love-beauty-and-planet"><span>Love&nbsp;Beauty&nbsp;and&nbsp;Planet</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/lux-botanicals"><span>Lux&nbsp;Botanicals</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/mustela"><span>Mustela</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/natur"><span>Natur</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/parfume"><span>Parfume</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/pepsodent"><span>Pepsodent</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/pure-care"><span>Pure&nbsp;Care</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/rexona"><span>Rexona</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/sebamed"><span>Sebamed</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/selsun"><span>Selsun</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/tropicana-slim"><span>Tropicana&nbsp;Slim</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/vaseline"><span>Vaseline</span></a><a className="itemMenuName level1 nochild" href="https://www.mandjur.co.id/personal-care/veet"><span>Veet</span></a></div></div>
                                <div className="clearBoth"></div>
                                </div>
                                </div>
                                </div>                    <div id="pt_menu293" className="pt_menu nav-7">
                                <div className="parentMenu">
                                <a href="#">
                                <span>Alat&nbsp;Kesehatan</span>
                                </a>
                                </div>
                                <div id="popup293" className="popup" style={{width: "620px", top: "41px", left: "578px", overflow: "hidden", display: "none"}}>
                                <div className="block1" id="block1293" style={{width: "620px"}}>
                                <div className="column first col1"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya"><span>Alkes&nbsp;Lainnya</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya/autocheck"><span>Autocheck</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya/omron"><span>Omron</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/alkes-lainnya/sinocare"><span>Sinocare</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/cotton-buds"><span>Cotton&nbsp;Buds</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/hand-sanitizer"><span>Hand&nbsp;Sanitizer</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/masker"><span>Masker</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/obat-gosok"><span>Obat&nbsp;Gosok</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/pembalut-wanita"><span>Pembalut&nbsp;Wanita</span></a></div></div><div className="column col2"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/produk-dewasa"><span>Produk&nbsp;Dewasa</span></a><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi"><span>Kontrasepsi</span></a><div className="itemSubMenu level1"><div className="itemMenu level2"><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/durex"><span>Durex</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/fiesta"><span>Fiesta</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/sutra"><span>Sutra</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/sagami"><span>Sagami</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/supreme"><span>Supreme</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/okamoto"><span>Okamoto</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/vivo"><span>Vivo</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/arjoena"><span>Arjoena</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/sure"><span>Sure</span></a><a className="itemMenuName level2" href="https://www.mandjur.co.id/alat-kesehatan/kontrasepsi/simplex"><span>Simplex</span></a></div></div><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/lubricant"><span>Lubricant</span></a></div></div><div className="column last col3"><div className="itemMenu level1"><a className="itemMenuName level1" href="https://www.mandjur.co.id/alat-kesehatan/tes-kehamilan"><span>Tes&nbsp;Kehamilan</span></a></div></div>
                                <div className="clearBoth"></div>
                                </div>
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
    );
}
 
export default Header;