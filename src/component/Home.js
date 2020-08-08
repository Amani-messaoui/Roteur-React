import React,{ useState } from 'react';
import { Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';

    const items = [
        {
          src: 'https://img.freepik.com/free-photo/mini-shopping-cart-woman-holding-credit-card-using-laptop-smartphone-online-shopping_36755-301.jpg?size=626&ext=jpg',
          altText: 'SUN SHOP',
          caption: 'Whatever you’re doing or wherever you’re going this summer, MR PORTER has you covered. The Sun Shop is where you’ll find the summer shoes , not to mention the perfect suitcase to pack it all in.'
        },
        {
          src: 'https://diftinto.com/blog/wp-content/uploads/2019/07/la-importancia-de-la-pagina-web.jpg',
          altText: "WHAT'S NEW",
          caption: 'Hundreds of MR PORTER’s latest arrivals and sneaker drops all in one place, every week. Check back here every Wednesday to see what’s just landed, discover our exclusive releases or browse our new designers. Sign up to stay informed.'
        },
        {
          src: 'https://assetplanningcorp.com/wp-content/uploads/2018/11/Christmas-Shopping.jpg',
          altText: 'LIFE STYLE',
          caption: 'Living a stylish life isn’t just about the clothes in your wardrobe; there’s also your home and office to think about. Our curated selection of lifestyle wares runs the gamut from cameras, speakers and headphones to coffee makers, books and even model cars.'
        }
      ];
      const Home = (props) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img style ={{width:"1100px", height:"500px"}}src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
            </CarouselItem>
          );
        });
      
    return (
    
        
            <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    
    >
      <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
 
        
    );
    }

export default Home;