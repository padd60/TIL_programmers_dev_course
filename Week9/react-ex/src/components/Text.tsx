import './Text.css';

type propsType = {
  children: JSX.Element,
  block:boolean,
  paragraph:boolean,
  size:number | string,
  strong:boolean,
  underline:boolean,
  delete:boolean,
  color: string,
  mark:boolean,
  code:boolean,
  style: any,
}

const Text = ({
  children,
  block,
  paragraph,
  size, strong,
  underline,
  delete: del,
  mark, code,
  color,
  ...props
}: propsType) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span';
  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    fontSize: typeof size === 'number' ? size : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  };

  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }
  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <Tag
      className={typeof size === 'string' ? `Text--size--${size}` : undefined}
      {...props}
      style={{
        ...props.style,
        ...fontStyle,
      }}
    >
      { children }
    </Tag>
  );
};

export default Text;
