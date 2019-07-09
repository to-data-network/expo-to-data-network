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
          <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Ya no estamos en la era de la información. Estamos en la era de la gestión de la información.”</Quote>
            <Cite>Chris Hardwick, actor.</Cite>
          </BlockQuote>
        </Slide>
        <Slide maxHeight="30%" bgImage={images.hun3}>
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          HOSPITAL UNIVERSITARIO NACIONAL DE COLOMBIA
          </Heading>
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
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Mi biografía
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Por mi persona
          </Heading>
          <Notes>So smooth</Notes>
        </Slide>
        <SlideSet>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <List>
              <Appear>
                <ListItem>Nacido en Bogotá, Colombia</ListItem>
              </Appear>
              <Appear>
                <ListItem>Viví en varios lugares durante poco tiempo</ListItem>
              </Appear>
              <Appear>
                <ListItem>Estudie Fisica</ListItem>
              </Appear>
              <Appear>
                <ListItem>Actualmente soy estudiante de Ingeniería de Sistemas y Computación en la universidad Nacional de Colombia</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="greenCheck">Casado con la universidad :3</ListItem>
              </Appear>
              <Appear>
                <ListItem>Miembro activo del Tenkuru</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
            Tenkuru
          </Heading>
          <Heading size={6} textColor="tertiary">
          En el Tenkuru desarrollamos grandes ideas con nuevas tecnologias, nos reunimos para charlar trabajar e intercambiar experiencias sobre programación, diseño, marketing, emprendimiento y trabajos en multimedia. 
          </Heading>
        
        </Slide>
          <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
          Puedes encontrar mas información del tenkuru al dar click en la imagen
          </Heading>
          <Link href="https://http://tenkuru.com/">
            <Image width="20%" src={images.logo} />
          </Link>
          
        </Slide>
        </SlideSet>
     
        <Slide
          transition={['slide']}>
          <Image width="60%" src={images.city} />
          </Slide>

       

        
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            Perspectiva
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
                curso 6 materias 
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
 

        <Slide
          transition={['spin', 'zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
          Filosofía de aprendizaje 
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

            `}
          </Markdown>
          <Notes>Who doesn't love markdown?</Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <List>
              <Appear>
                <ListItem bulletStyle="greenCheck">comer siempre que se pueda, aun en clase!</ListItem>
              </Appear>
              <Appear>
                <ListItem>aprender es divertido</ListItem>
              </Appear>
              <Appear>
                <ListItem>trabajar temprano, dormir bien</ListItem>
              </Appear>
              <Appear>
                <ListItem>hacer ejercicio</ListItem>
              </Appear>
              <Appear>
                <ListItem>maldecir solo en la cabeza</ListItem>
              </Appear>
              <Appear>
                <ListItem>preguntar en el momento y lugar necesario</ListItem>
              </Appear>
              <Appear>
                <ListItem>leer mucho</ListItem>
              </Appear>
            </List>
          </Slide>     
          <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            Motivaciones
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
                Graduarme
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
                Crecer como persona
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="secondary">
          <Heading caps fit>
            Desafios
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
                Trabajar interdisciplinariamente
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
                creatividad
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
