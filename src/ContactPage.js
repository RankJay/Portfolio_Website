import React from 'react';
import './ContactPage.css';
import './assets/fonts/Gilroy-Medium.ttf';


class ContactPage extends React.Component {
  render() {
    return (
      <div className='ContactPage'>
        <div className='inlineContactTitle'>
          <div className='ContactTitle1'>interested</div>
          <div className='ContactTitle2'>in</div>
          <div className='ContactTitle3'>me !</div>
        </div>
        <div className='social-media1'>
          <div className='fac'><a href='https://www.facebook.com/rank.jay' target='_blank' className='fac'>Facebook</a></div>
          <div className='ins'><a href='https://www.instagram.com/rank_jay/?hl=en' target='_blank' className='ins'>Instagram</a></div>
          <div className='twi'><a href='https://twitter.com/RankJay1' target='_blank' className='twi'>Twitter</a></div>
          <div className='pin'><a href='https://in.pinterest.com/rankj/boards/' target='_blank' className='pin'>Pinterest</a></div>
          <div className='beh'><a href='https://www.behance.net/jayrank' target='_blank' className='beh'>Behance</a></div>
        </div>
        <div className='social-media2'>
          <div className='lin'><a href='https://www.linkedin.com/in/jay-rank-019909190/' className='lin'>LinkedIn</a></div>
          <div className='git'><a href='https://github.com/RankJay' className='git'>GitHub</a></div>
          <div className='mai'><a href='facebook.com' className='mai'>Mail</a></div>
        </div>
        <img src={require('./assets/images/ContactR.png')} className='R' />
        <img src={require('./assets/images/Since.png')} className='Since' />
      </div>
    );
  }
}

export default ContactPage;