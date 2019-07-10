import React, { Component } from 'react';

import { 
  Appear,
  BlockQuote,
  Cite, 
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,  
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text  
} from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';


require('normalize.css');

const images = {
  city: require('../assets/pv.png'),
  kat: require('../assets/kat.gif'),
  logo: require('../assets/tenkuru.png'),
  hun1: require('../assets/hun1.png'),
  hun2: require('../assets/hun2.png'),
  hun3: require('../assets/hun3.png'),
  hun4: require('../assets/hun4.png'),
  hun5: require('../assets/hun5.png'),
  hun6: require('../assets/hun6.png'),
  markdown: require('../assets/racoon.gif')
};

preloader(images);

const theme = createTheme({
  primary: '#00a6d6'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
        
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} >
            TO Data Network
          </Heading>
          <Heading size={1} fit caps textColor="black">
          Sara  Suárez, Jhonny  González , Nicolas Velásquez,  Daniel Muñoz , Kevin  Vanegas.
          </Heading>
          
          <Link href="https://github.com/to-data-network/to-data-network">
            <Text bold caps textColor="tertiary">
              Miralo en Git
            </Text>
          </Link>

          </Slide>
          <Slide  transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Ya no estamos en la era de la información. Estamos en la era de la gestión de la información.”</Quote>
            <Cite>Chris Hardwick, actor.</Cite>
          </BlockQuote>
        </Slide>

        <Slide  bgColor="white">
        <Heading size={1} caps fit textColor="primary" textFont="primary" >
          HOSPITAL UNIVERSITARIO NACIONAL DE COLOMBIA
          </Heading>
          <Image width="500%" src={images.hun3} />
          </Slide>

        <Slide 
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="wait-what"
          
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
        >
          <Image src={images.hun2.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
          HOSPITAL UNIVERSITARIO NACIONAL DE COLOMBIA
          </Heading>
          <Notes>
            You can even put notes on your slide. How awesome is that?
          </Notes>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
          ¿Qué es terapia ocupacional?
          </Heading>
          <Heading size={6} textColor="tertiary">
          Es una rama de la medicina que busca mejorar la calidad de vida de las personas 
          </Heading>
          <Image width="80%" src={images.hun5} />
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
          

          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
              <Image width="80%" src={images.hun6} /> 
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                continuar aprendiendo diversas cosas en diferentes areas
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>
        
       

       
        
      </Deck>
    );
  }
}
