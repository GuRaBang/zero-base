const iconStyles = {
  height: '12px',
  width: '12px',
};

export default function Icon(props) {
  const { style, path } = props;
  return <img style={{ iconStyles, ...style }} src={path} />;
}
