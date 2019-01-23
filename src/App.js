import React, { Component } from 'react';
import './App.css';
import InputText from './basic_components/input_text';
import DropDown from './basic_components/dropdown';


class EventTicket extends Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownIndex: undefined
    }
  }

  render(){
    const dropdownList = [
      <img src="http://www.kyazoonga.com/images/rsvp-blank-1.jpg" alt=""/>,
    ]
    return(
      <div className="col-xs-12 col-sm-6 col-lg-4">
        <div className="box">
          {this.props.index === 0 &&
            <DropDown
              headerClassName={'dropdown visiter-icon'}
              wrapElement={'div'}
              setIndex={ (index) => {
                this.setState({
                  dropdownIndex: index
                })
              }}
              dropdownList={dropdownList}
              buttonClassName={'dropdown-toggle'}
              innerComponent={<span
                class="glyphicon glyphicon-user" aria-hidden="true"></span>}
            />
          }
          <a href="#" className="block-link">
            <div className="ticket-img">
              <img src="http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt=""/>
              <span className="ticket-price">INR 50 - 2,500</span>
            </div>
            <div className="ticket-info">
              <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
              <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
              <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
            </div>
          </a>
          <div className="social clearfix">
            <div className="pull-left">
              <a className="btn btn-default btn-xs ical" href="#">
                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
              <a className="btn btn-default btn-xs ml-10" href="#">
                <i className="fa fa-calendar"></i> &nbsp;Google</a>
            </div>
            <div className="pull-right">
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-facebook"></i></a>
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-twitter"></i></a>
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-twitter"></i></a>
              <a className="btn btn-default btn-xs btn-circle" href="#">
                <i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


class BrowseByCategory extends Component{
  render(){
    const srcLink = 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/';

    return(
      <div className="col-sm-4 cat-box">
        <a href="#" className="block-link">
          <div className="cat-txt">
            <h3>{this.props.name}</h3>
          </div>
          <img src={srcLink + this.props.image} alt="" className="img-full-width"/>
        </a>
      </div>
    )
  }
}


class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      dropdownIndex: undefined
    }
  }

  onEmailChange = (value) => {
    this.setState({
      email: value
    })
  }

  render(){
    const
      follow_us_list = [
      {
        href: 'https://www.facebook.com/kyazoonga',
        src: 'facebook.png',
        alt: 'Facebook',
        className: 'f'
      },
      {
        href: 'https://twitter.com/kyazoonga',
        src: 'twitter.png',
        alt: 'Twitter',
        className: 't'
      },
      {
        href: 'https://www.instagram.com/kyazoonga/',
        src: 'instagram.png',
        alt: 'instagram',
        className: 'ig'
      },
      {
        href: 'https://www.snapchat.com/add/kyazoonga',
        src: 'snapchat.png',
        alt: 'snapchat',
        className: 'sc'
      },
      {
        href: 'https://www.linkedin.com/company/kyazoonga',
        src: 'in.png',
        alt: 'LinkedIn',
        className: 'in'
      },
      {
        href: 'https://www.youtube.com/user/kyazoongachannel',
        src: 'youtube.png',
        alt: 'Youtube',
        className: 'yt'
      },
      {
        href: 'https://plus.google.com/+kyazoongachannel',
        src: 'google.png',
        alt: 'Google Plus',
        className: 'g'
      },
      {
        href: 'https://www.pinterest.com/kyazoonga/',
        src: 'pinterest.png',
        alt: 'Pinterest',
        className: 'p'
      },
    ],
      countries = [
      {
        href: 'au',
        image: 'aus',
        name: 'Australia'
      },
      {
        href: '',
        image: 'ind',
        name: 'India'
      },
      {
        href: 'ie',
        image: 'ireland',
        name: 'Ireland'
      },
      {
        href: 'ae',
        image: 'uae',
        name: 'United Arab Emirates'
      },
      {
        href: '',
        image: 'usa',
        name: 'United States'
      },
    ],
      popularEvents = [
        'EsselWorld',
        'KidZania',
        'Water Kingdom',
        'Water Kingdom',
        'Adventure Park',
        'Vineyard Tour & Cycling',
      ],
      company = [
        'About Us',
        'Blog',
        'Careers',
        'Contact Us',
        'Media Center',
        'Policies'
      ],
      help = [
        '24x7 Customer Service',
        'Regenerate your PAH e-Ticket',
        'Reprint Confirmation',
        'Regenerate-e-Ticket',
        'Track Courier',
      ],
      dropdownList = ['Action', 'Another action', 'Something else here', 'Separated link'];

    return(
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 cont-drop">
              <DropDown
                wrapElement={'div'}
                innerComponent={<label>Dropdown<span className="caret"></span></label>}
                dropdownList={dropdownList}
                setIndex={(index) => {
                  this.setState({
                    dropdownIndex: index
                  })
                }}
              />
            </div>
            <div className="col-sm-9 home-newsletter">
              <div className="row">
                <div className="col-sm-5 news-subs-txt">
                  <h3>Subscribe to our Newsletter</h3>
                </div>
                <div className="col-sm-7">
                  <div className="input-group">
                    <InputText type="email" className="form-control" placeholder="Enter your email"
                               onChange={this.onEmailChange} defaultValue={this.state.email}/>
                    <span className="input-group-btn">
                 <button className="btn btn-theme" type="submit">Subscribe</button>
                 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-links">
            <div className="col-sm-3">
              <h6>Help</h6>
              <ul>
                {help.map( (category, index) => <li key={index}><a href="#">{category}</a></li>)}
              </ul>
            </div>
            <div className="col-sm-3">
              <h6>Company</h6>
              <ul>
                {company.map( (category, index) => <li key={index}><a href="#">{category}</a></li>)}
              </ul>
            </div>
            <div className="col-sm-3">
              <h6>Popular Events</h6>
              <ul>
                {popularEvents.map((event, index) => <li key={index}><a href="#">{event}</a></li>)}
              </ul>
            </div>
            <div className="col-sm-3 country-flag-sec">
              <h6>Popular Events</h6>
              <ul>
                {countries.map((country, index) =>
                  <li key={index}>
                    <a href={"http://www.kyazoonga.com." + country.href + '/'} target="_blank">
                      <img src={"images/CountriesFlag/" + country.image + '.png'}/>
                      {country.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="footer-social text-center">
            <h6>Follow Us</h6>
            <ul>
              {follow_us_list.map((follow_us, index) =>
                <li key={index}>
                  <a className="f" href={follow_us.href} target="blank" rel="me">
                    <img src={"images/" + follow_us.src} alt={follow_us.alt} width="32" height="32"/>
                  </a>
                </li>)}
            </ul>
            <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
          </div>

        </div>
      </footer>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventSearch: '',
      bellDropdownIndex: undefined,
      bellDropdownIndex2: undefined
    }
  }

  onEventSearchChange = (value) => {
    this.setState({
      eventSearch: value
    })
  }

  render() {
    let
      eventTickets = [
        {},{},{},{},{}, {}
      ];

    const
      browse_by_top_categories = [
        {
          image: 'concerts-cat1.jpg',
          name: 'Concerts'
        },
        {
          image: 'cricket-cat1.jpg',
          name: 'Cricket'
        },
        {
          image: 'theatre-cat.jpg',
          name: 'Theatre & Arts'
        },
        {
          image: 'amusementparks-cat.jpg',
          name: 'Amusement Parks'
        },
        {
          image: 'sports-cat.jpg',
          name: 'Sports'
        },
        {
          image: 'restaurants-cat.jpg',
          name: 'Restaurants'
        },
      ],
      featuresSrcLink = 'https://static3.kyazoonga.com/Images/featured-logo/',
      headers = [
        {
          name: 'Concerts',
          className: ''
        },
        {
          name: 'Cricket',
          className: 'blue-bg'
        },
        {
          name: 'Events',
          className: 'orange-bg'
        },
        {
          name: 'Sports',
          className: 'green-bg'
        },
        {
          name: 'Amusement Parks',
          className: 'pink-bg'
        },
        {
          name: 'Restaurants',
          className: 'purple-bg'
        },
        {
          name: 'Theatre & Arts',
          className: 'yellow-bg'
        },
        {
          name: 'Parties',
          className: ''
        },
      ],
      features = [
        {
          href: 'https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-' +
          'ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2',
          src: 'forbes-logo.jpg',
          alt: 'Forbes'
        },
        {
          href: 'https://tech.co/technology-upgrading-events-industry-2017-06',
          src: 'techco-logo.jpg',
          alt: 'Forbes'
        },
        {
          href: 'https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/',
          src: 'ausleisure-logo.jpg',
          alt: 'INC'
        },
        {
          href: 'http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html',
          src: 'inc-logo.jpg',
          alt: 'INC'
        },
        {
          href: 'https://www.entrepreneur.com/article/289909',
          src: 'cnbc-logo.jpg',
          alt: 'CNBC'
        },
        {
          href: 'http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-' +
          'time_5910.html',
          src: 'z-news.jpg',
          alt: 'Z News'
        },
        {
          href: 'http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-' +
          'time_5910.html',
          src: 'the-economic-times.jpg',
          alt: 'The Economic Times'
        },
        {
          href: 'http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-' +
          'as-the-official-ticketing-partner/articleshow/5196286.cms',
          src: 'the-times-of-india.jpg',
          alt: 'Times of India'
        },
        {
          href: 'http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.' +
          'html',
          src: 'business-standard.jpg',
          alt: 'Business Standard'
        },
        {
          href: 'http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html',
          src: 'news18.jpg',
          alt: 'News 18'
        },
        {
          href: 'https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-' +
          'in-15-hours-kyazoongacom-1527446',
          src: 'ndtv.jpg',
          alt: 'NDTV'
        },
      ],
      dataSlides = [9, 1, 2, 3, 8],
      videoSrc = 'http://content.kyazoonga.com/videos/video',
      dropdownList = ['Action', 'Another action', 'Something else here', 'Separated link'];

    let
      get_box = (version) =>
        <ul className={"nav navbar-nav top-nav " + version}>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Sign In</a></li>
          <li>
            <a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span>
            </a>
          </li>
          <DropDown
            innerComponent={
                <i className="fa fa-bell" aria-hidden="true"></i>
            }
            innerComponent2={
              <span className="badge">10</span>
            }
            dropdownList={dropdownList}
            setIndex={(index) => {
              this.setState({
                bellDropdownIndex: index
              })
            }}
          />
          <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
          {version.indexOf('desktop') !==-1 &&
          <ul className="nav navbar-nav sub-main-nav">
            {headers.map( (header, index) => <li key={index}>
              <a href="#" className={header.className}>{header.name}</a>
            </li>)}
          </ul>
          }
        </ul>

    return (
      <div>
        <nav className="navbar navbar-inverse site-nav">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="site-logo" href="#">
              <img src="images/kyazoonga.png" alt="The Big Ticket" title="The Big Ticket"/>
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-right " id="myNavbar">
            {get_box('hide-on-mobile')}
            {get_box('hide-on-desktop')}
          </div>
        </nav>

        <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
          <h1>Tickets made simple for everyone, everywhere</h1>
          <div className="site-manu container">
            <div className="collapse navbar-collapse hide-on-mobile">
              <ul className="nav navbar-nav sub-main-nav">
                {headers.map( (header, index) => <li key={index}>
                  <a href="#" className={header.className}>{header.name}</a>
                </li>)}
              </ul>
            </div>
            <div className="banner-serch-box">
              <InputText id="txtSearchBox" className="" name="q" defaultValue={this.state.eventSearch}
              placeholder="Search for an event, venue or city" type="text" onChange={this.onEventSearchChange}/>
              <a href="">
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="carousel-inner">
            {dataSlides.map( (slide, index) =>
              <div data-slide={index.toString()} className="item active" key={index}>
                <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop"/>
                <div className="hide-on-mobile">
                  <video title={index.toString()} id={"bgvid" + index.toString()} autoPlay loop muted
                         poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                    <source src={videoSrc + slide + ".mp4"} type="video/mp4"/>
                  </video>
                </div>
              </div>
            )}

          </div>


        </div>

        <section className="hot-ticket-sec ticket-boxes">
          <div className="container">
            <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
            <div className="row">
              {eventTickets.map( (eventTicket, index)=> <EventTicket key={index} data={eventTicket} index={index}/>)}
            </div>
            <div className="btn-sec text-center p-20 pt-0">
              <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
            </div>
          </div>
        </section>

        <section className="home-cat-sec text-center">
          <div className="container">
            <h2 className="site-title">Browse by top categories</h2>
            <div className="row">
              {browse_by_top_categories.map((category, index) => <BrowseByCategory key={index} name={category.name}
              image={category.image}/>)}
            </div>
          </div>
        </section>

        <section className="home-cat-sec text-center">
          <div className="container-fluid">
            <h2 className="site-title">Sellers, use
              {<a href="http://iticket.kyazoonga.com/" target="_blank">
                <img src="http://www.kyazoonga.com/images/iticket-logo.png" style={{width: '100px'}}/>
              </a>}
              to create and sell your event tickets online <small>Discover and purchase tickets to cool events
                created and listed by organizers directly</small></h2>
            <div className="row">
              <div className="col-sm-6 cat-box">
                <div id="dvYoutube">
                  <iframe style={{width: '100%', height: '400px'}} src='https://www.youtube.com/embed/IyucJZev9wM'
                          frameBorder='0' webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
                  </iframe>
                </div>
              </div>
              <div className="col-sm-6 cat-box">
                <a href="#" className="block-link">
                  <div className="cat-txt">
                    <h3>Kyazoonga Blog</h3>
                  </div>
                  <img src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="" className="img-full-width"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="home-featured-sec text-center">
          <h2 className="site-title"><span>We've been featured in</span></h2>
          <div className="container-fluid">
            {features.map( (feature, index) =>
              <a key={index} target="_blank" href={feature.href}>
                <img src={featuresSrcLink + feature.src} alt={feature.alt}/>
              </a>
            )}
          </div>
        </section>

        <Footer/>

      </div>
    );
  }
}

export default App;
