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
  logo: require('../assets/tenkuru.png'),
  qr: require('../assets/qrcode.png'),
  app0: require('../assets/app0.png'),
  app1: require('../assets/app.png'),
  app2: require('../assets/app2.png'),
  app3: require('../assets/app3.png'),
  app4: require('../assets/app4.png'),
  app5: require('../assets/app1.gif'),
  app6: require('../assets/app2.gif'),
  hun0: require('../assets/hun0.png'),
  hun1: require('../assets/hun1.png'),
  hun2: require('../assets/hun2.png'),
  hun3: require('../assets/hun3.png'),
  hun4: require('../assets/hun4.png'),
  hun5: require('../assets/hun5.png'),
  hun6: require('../assets/hun6.png'),
  hun7: require('../assets/hun7.png'),
  hun8: require('../assets/hun8.png'),
  tonombres: require('../assets/to-nombres.png'),
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
          
        <Image width="80%" src={images.hun0} />
          
          
          <Link href="https://hceun.com">
            <Text bold caps textColor="tertiary">
              Mira la presentación en tu dispositivo
            </Text>
          </Link>
          <Image width="30%" src={images.qr} />
          </Slide>
          <Slide  transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Ya no estamos en la era de la información. Estamos en la era de la gestión de la información.”</Quote>
            <Cite>Chris Hardwick, actor.</Cite>
          </BlockQuote>
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
          <Image width="80%"  src={images.hun7.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
          HUN - Terapia Ocupacional
          </Heading>
          <Notes>
            You can even put notes on your slide. How awesome is that?
          </Notes>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            HUN - Terapia ocupacional
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
                 3 terapeutas ocupacionales y 12 estudiantes 
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
                Atienden aproximadamente 40-60 pacientes, por semana
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
          </Slide>

      
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
          El terapeuta ocupacional recoge en su labor diaria datos sobre todos sus pacientes

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
                <Image width="87%" src={images.hun8} /> 
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>
        
       
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
          Solución planteada
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
              <Image width="100%" src={images.app1} /> 
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
                <Image width="77%" src={images.app2} /> 
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
              <Image width="100%" src={images.app3} /> 
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
                <Image width="87%" src={images.app4} /> 
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Use <code>layout</code> to <code>fill</code> or <code>fit</code>{' '}
            your content
          </Notes>
        </Slide>

          <Slide>
          <Text bold caps textColor="tertiary">
              Preview
            </Text>
          <Image width="100%" src={images.app5} /> 
          </Slide>
          <Slide>
          <Text bold caps textColor="tertiary">
              Preview
            </Text>
          <Image width="100%" src={images.app6} /> 
          </Slide>

        <Slide bgDarken=".2" bgSize="60%" bgImage={images.app0}>
        <Heading caps fit>
          Financiamiento
          </Heading>
         </Slide>   
       <Slide>
       <Heading size={6} textColor="tertiary" margin="0.25em" bgColor="black">
          $$$
          </Heading>
          <Heading size={6} textColor="Terciary">
          Desarrollo incremental
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2019</TableHeaderItem>
                  <TableHeaderItem>2020</TableHeaderItem>
                  <TableHeaderItem>2021 </TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>-Identificar requerimientos y funcionalidades</TableItem>
                  <TableItem>15 milones</TableItem>
                  <TableItem></TableItem>
                  <TableItem></TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>-Diseño de arquitectura</TableItem>
                  <TableItem>3 millones</TableItem>
                  <TableItem>1 millon</TableItem>
                  <TableItem>1 millon</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>-Desarrollo beta aplicación</TableItem>
                  <TableItem>10 millones</TableItem>
                  <TableItem>12 millones</TableItem>
                  <TableItem>2 millones</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>-Validación</TableItem>
                  <TableItem>3 millones</TableItem>
                  <TableItem>3 millones</TableItem>
                  <TableItem>3 millones</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
       </Slide>
        
       <Slide>
       <Heading size={6} textColor="primary" margin="0.25em" bgColor="black">
          $$$
          </Heading>
          <Heading size={6} textColor="terciary">
          Operación
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2019</TableHeaderItem>
                  <TableHeaderItem>2020</TableHeaderItem>
                  <TableHeaderItem>2021 </TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>-Base de datos</TableItem>
                  <TableItem>36 milones</TableItem>
                  <TableItem>36 milones</TableItem>
                  <TableItem>36 milones</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>-Mantenimiento</TableItem>
                  <TableItem>5 millones</TableItem>
                  <TableItem>3 millones</TableItem>
                  <TableItem>3 millones</TableItem>
                </TableRow>
                
              </TableBody>
            </Table>
          </Layout>
       </Slide>
       <Slide>
       <Image width="100%" src={images.tonombres} /> 
       </Slide>
      </Deck>
    );
  }
}
