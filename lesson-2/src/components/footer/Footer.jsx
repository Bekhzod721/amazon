import React from 'react'
import c from './Footer.module.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className={c.Footer}>
      <div   className={c.container}>
        
        <div className={c.first__footer}>
        <div className={c.first__footerlink}>
      <ul className={c.footer1__box}>
        <li className={c.footer1__bolditem}>Get to Know Us</li>
        <li className={c.footer1__item}>Careers</li>
        <li className={c.footer1__item}>Blog</li>
        <li className={c.footer1__item}>About Amazon</li>
        <li className={c.footer1__item}>Investor Relations</li>
        <li className={c.footer1__item}>Amazon Devices</li>
        <li className={c.footer1__item}>Amazon Science</li>
      </ul>

      <ul className={c.footer1__box}>
        <li className={c.footer1__bolditem}>Make Money with Us</li>
        <li className={c.footer1__item}>Sell products on Amazon</li>
        <li className={c.footer1__item}>Sell on Amazon Business</li>
        <li className={c.footer1__item}>Sell apps on Amazon</li>
        <li className={c.footer1__item}>Become an Affiliate</li>
        <li className={c.footer1__item}>Advertise Your Products</li>
        <li className={c.footer1__item}>Self-Publish with Us</li>
        <li className={c.footer1__item}>Host an Amazon Hub</li>
        <li className={c.footer1__item}>› See More Make Money with Us</li>
      </ul>

      <ul className={c.footer1__box}>
        <li className={c.footer1__bolditem}>Amazon Payment Products</li>
        <li className={c.footer1__item}>Amazon Business Card</li>
        <li className={c.footer1__item}>Shop with Points</li>
        <li className={c.footer1__item}>Reload Your Balance</li>
        <li className={c.footer1__item}>Amazon Currency Converter</li>
      </ul>

      <ul className={c.footer1__box}>
        <li className={c.footer1__bolditem}>Let Us Help You</li>
        <li className={c.footer1__item}>Amazon and COVID-19</li>
        <li className={c.footer1__item}>Your Account</li>
        <li className={c.footer1__item}>Your Orders</li>
        <li className={c.footer1__item}>Shipping Rates & Policies</li>
        <li className={c.footer1__item}>Returns & Replacements</li>
        <li className={c.footer1__item}>Manage Your Content and Devices</li>
        <li className={c.footer1__item}>Amazon Assistant</li>
        <li className={c.footer1__item}>Help</li>
      </ul>

        </div>        
        <hr/>

        </div>
        <div className={c.footer1__buttons}>
          <img className={c.footer__logo} src={logo} alt="logo"/>
          <div >
          <button className={c.footer__btn}>English</button>
          <button className={c.footer__btn}> $ USD-U.S. Dollar</button>
          <button className={c.footer__btn}>Unitet states</button>
          </div>
        </div>

      </div>
       <div className={c.lastFooter}>
            <div className={c.container}>
                <div className={c.listsWrapper}>
                    <div className={c.listOne}>
                        <ul>
                            <li >
                                <Link to="/" className={c.link}>
                                    Amazon Music
                                    <span>
                                        Stream millions
                                        of songs
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Amazon Business
                                    <span>
                                        Everything For
                                        Your Business
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Box Office Mojo
                                    <span>
                                        Find Movie
                                        Box Office Data
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Kindle Direct
                                    Publishing
                                    <span>
                                        Indie Digital & Print
                                        Publishing
                                        Made Easy
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={c.listOne}>
                        <ul>
                            <li >
                                <Link to="/" className={c.link}>
                                    Amazon Advertising
                                    <span>
                                        Find, attract, and
                                        engage customers
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    AmazonGlobal
                                    <span>
                                        Ship Orders
                                        Internationally
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    ComiXology
                                    <span>
                                        Thousands of
                                        Digital Comics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Prime Video Direct
                                    <span>
                                        Video Distribution
                                        Made Easy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Blink
                                    <span>
                                        Smart Security
                                        for Every Home
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={c.listOne}>
                        <ul>
                            <li >
                                <Link to="/" className={c.link}>
                                    Amazon Advertising
                                    <span>
                                        Find, attract, and
                                        engage customers
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    AmazonGlobal
                                    <span>
                                        Ship Orders
                                        Internationally
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    ComiXology
                                    <span>
                                        Thousands of
                                        Digital Comics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Prime Video Direct
                                    <span>
                                        Video Distribution
                                        Made Easy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Blink
                                    <span>
                                        Smart Security
                                        for Every Home
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={c.listOne}>
                        <ul>
                            <li >
                                <Link to="/" className={c.link}>
                                    Amazon Advertising
                                    <span>
                                        Find, attract, and
                                        engage customers
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    AmazonGlobal
                                    <span>
                                        Ship Orders
                                        Internationally
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    ComiXology
                                    <span>
                                        Thousands of
                                        Digital Comics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Prime Video Direct
                                    <span>
                                        Video Distribution
                                        Made Easy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Blink
                                    <span>
                                        Smart Security
                                        for Every Home
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={c.listOne}>
                        <ul>
                            <li >
                                <Link to="/" className={c.link}>
                                    Amazon Advertising
                                    <span>
                                        Find, attract, and
                                        engage customers
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    AmazonGlobal
                                    <span>
                                        Ship Orders
                                        Internationally
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    ComiXology
                                    <span>
                                        Thousands of
                                        Digital Comics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Prime Video Direct
                                    <span>
                                        Video Distribution
                                        Made Easy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Blink
                                    <span>
                                        Smart Security
                                        for Every Home
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={c.listOne}>
                        <ul>
                            <li >
                                <Link to="/" className={c.link}>
                                    Amazon Advertising
                                    <span>
                                        Find, attract, and
                                        engage customers
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    AmazonGlobal
                                    <span>
                                        Ship Orders
                                        Internationally
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    ComiXology
                                    <span>
                                        Thousands of
                                        Digital Comics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Prime Video Direct
                                    <span>
                                        Video Distribution
                                        Made Easy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Blink
                                    <span>
                                        Smart Security
                                        for Every Home
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className={c.listOne}>
                        <ul>
                            <li >
                                <Link to="/" className={c.link}>
                                    Amazon Advertising
                                    <span>
                                        Find, attract, and
                                        engage customers
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    AmazonGlobal
                                    <span>
                                        Ship Orders
                                        Internationally
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    ComiXology
                                    <span>
                                        Thousands of
                                        Digital Comics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Prime Video Direct
                                    <span>
                                        Video Distribution
                                        Made Easy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={c.link}>
                                    Blink
                                    <span>
                                        Smart Security
                                        for Every Home
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className={c.madeInfoWrpper}>
                    <div className={c.us}>
                        <Link className={c.usLink}>Conditions of Use</Link>
                        <Link className={c.usLink}>Privacy Notice</Link>
                        <Link className={c.usLink}>Interest-Based Ads</Link>
                    </div>
                    <div className={c.info}>
                        <p>
                            © 1996-2022, Amazon.com, Inc. or its affiliates
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer