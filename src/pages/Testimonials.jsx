import Block from '../components/Block'
import GlobalBanner from '../components/GlobalBanner'
import Comments from '../components/home/Testimonials';

function Testimonials() {
  return (
    <section className='testimonials'>
      <Block name="Testimonials" />
        <Comments/>
      <GlobalBanner/>
    </section>
  )
}

export default Testimonials