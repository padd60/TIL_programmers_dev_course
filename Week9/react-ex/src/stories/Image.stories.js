import Image from '../components/Image';

export default {
  title: 'Component/Image',
  component: Image,
  argsTypes: {
    src: {
      name: 'src',
      type: {
        name: 'string',
        require: true,
      },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
    width: {
      name: 'width',
      defaultValue: 200,
      control: {
        type: 'range',
        min: 200,
        max: 600,
      },
    },
    height: {
      name: 'height',
      defaultValue: 200,
      control: {
        type: 'range',
        min: 200,
        max: 600,
      },
    },
    alt: {
      name: 'alt',
      control: 'string',
    },
  },
};

export const Default = (args) => {
  return <Image {... args} />;
};

Default.args = { src: 'https://picsum.photos/200' };
