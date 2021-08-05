import nonliImg from '../images/nonli.jpg';
import frichtiImg from '../images/frichti.jpg';
import bankinImg from '../images/bankin.jpg';
import fuzzieImg from '../images/fuzzie.jpg';
import henessyImg from '../images/henessy.jpg';
import ffrImg from '../images/ffr.jpg';
import hpImg from '../images/hp.jpg';
import bnpImg from '../images/bnp.jpg';
import dassaultImg from '../images/dassault.jpg';

export const categories = {
  'product-design': {
    label: 'Product design',
    order: 0,
  },
  b2c: {
    label: 'E-commerce - B2C Apps',
    order: 1,
  },
  corporate: {
    label: 'Corporate',
    order: 2,
  },
};

const projects = [
  {
    title: 'Nonli',
    description: 'Nonli fournit le meilleur outil SAAS pour gérer de multiples comptes de'
      + ' médias sociaux efficacement.',
    category: 'product-design',
    image: nonliImg,
  },
  {
    title: 'Frichti',
    description: 'Frichti, start-up foodtech française la plus prometteuse, livre des plats faits maison'
      + ' jusqu\'à votre porte.',
    category: 'product-design',
    image: frichtiImg,
  },
  {
    title: 'Best of Banking',
    description: 'La meilleure expérience bancaire pour les freelances et les entrepreneurs.',
    category: 'product-design',
    image: bankinImg,
  },
  {
    title: 'Fuzzie',
    description: 'Application basée à Singapour qui propose d\'obtenir du cashback et des réductions '
      + 'auprès de marques.',
    category: 'product-design',
    image: fuzzieImg,
  },
  {
    title: 'Hennessy Rare Cognac Collection',
    description: 'Outil de gestion des ventes et des livraisons pour les produits de prestige Hennessy.',
    category: 'b2c',
    image: henessyImg,
  },
  {
    title: 'FFR Compétitions',
    description: 'Application de suivi de vos équipes de rugby amateur favorites et de visualisation'
      + ' des derniers résultats en temps réel.',
    category: 'b2c',
    image: ffrImg,
  },
  {
    title: 'Harry Potter Fan Store',
    description: 'Une nouvelle marketplace pour promouvoir les produits officiels de Warner Bros.',
    category: 'b2c',
    image: hpImg,
  },
  {
    title: 'BNP Paribas',
    description: 'Implication du management de BNP Paribas dans les processus design pour partager une '
      + 'vision commune et augmenter la productivité',
    category: 'corporate',
    image: bnpImg,
  },
  {
    title: 'Dassault Systèmes Design Guidelines',
    description: 'Guidelines de design et développement facilitant le travail en équipe et assurant la '
      + 'cohérence graphique à travers les environnements digitaux de Dassault Systèmes.',
    category: 'corporate',
    image: dassaultImg,
  },
];
export default projects;
