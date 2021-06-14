import LogoGroups from '../LogoGroup/LogoGroups'
import BodyText from './BodyText'
import FeaturedProduct from './FeaturedProduct'
import FinalCta from './FinalCta'
import LatestNews from './LatestNews'

const Main = () => {
 return (
  <main >
      <div className="main mb-20">
   <BodyText />
   <FeaturedProduct/>
      </div>
     <LogoGroups/>
     <LatestNews/>
     <FinalCta/>

  </main>
 )
}

export default Main
