import './MainIndex';

import Header from '../components/includes/Header';
import LearnMore from './LearnMore';
import MenstrualCal from './MenstrualCal';
import FooterLike from './FooterLike';
import LastFooter from './LastFooter';
import Nav from '../components/includes/Nav';

function MainIndex() {
  return (
    <div className="App">
      <Nav />
      {/* FIXME change header name */}
      <Header />
      <LearnMore />
      <MenstrualCal />
      <FooterLike />
      <LastFooter />
    </div>
  );
}

export default MainIndex;
