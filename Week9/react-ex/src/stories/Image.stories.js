import Image from '../components/Image';

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    lazy: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    block: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    src: {
      type: {
        name: 'string',
        require: true,
      },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string' },
      defaultValue: 'https://via.placeholder.com/200',
      control: { type: 'text' },
    },
    threshold: {
      type: { name: 'number' },
      control: { type: 'number' },
      defaultValue: 0.5,
    },
    width: {
      defaultValue: 200,
      control: {
        type: 'range',
        min: 200,
        max: 600,
      },
    },
    height: {
      defaultValue: 200,
      control: {
        type: 'range',
        min: 200,
        max: 600,
      },
    },
    alt: { control: 'string' },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (args) => {
  return <Image {... args} />;
};

export const Lazy = (args) => {
  return (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        // eslint-disable-next-line react/destructuring-assignment
        <Image {...args} key={i} lazy src={`${args.src}?${i}`} />
      ))}
    </div>
  );
};
