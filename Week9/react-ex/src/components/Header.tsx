import styled from '@emotion/styled';

type propsType = {
  children : JSX.Element,
  level:number,
  strong:boolean,
  underline:boolean,
  color: string,
  style: any,
}
const Header = ({
  children,
  level = 1,
  strong,
  underline,
  color,
  ...props
}:propsType) => {
  const changeTag = () => {
    if (level === 1) return 'h1';
    if (level === 2) return 'h2';
    if (level === 3) return 'h3';
    if (level === 4) return 'h4';
    if (level === 5) return 'h5';
    if (level === 6) return 'h6';
    return 'h1';
  };

  const Tag = changeTag();

  const fontStyle = {
    fontWeight: strong ? 'bold' : 'normal',
    // fontSize: typeof size === 'number' ? size : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  };

  return (
    <Tag style={{
      ...props.style,
      ...fontStyle,
    }}
    >
      {children}
    </Tag>
  );
};

export default Header;
