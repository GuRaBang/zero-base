import Icon from './Icon.js';

const UploadStatus = {
  idle: {
    text: '업로드',
    path: '../assets/icons/type=up-arrow.svg',
  },
  pending: {
    text: '업로드 중',
    path: '../assets/icons/type=spinner-animate.svg',
  },
  resolved: {
    text: '완료',
    path: '../assets/icons/type=check-mark.svg',
  },
  rejected: {
    text: '실패',
    path: '../assets/icons/type=cross.svg',
  },
  disabled: {
    text: '업로드',
    path: '../assets/icons/type=not-allowed.svg',
    style: {
      filter: 'opacity(0.5)',
    },
  },
};

const buttonStyles = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  width: '89px',
  height: '30px',
  padding: '9px 12px',
  background: '#ffffff',
  boxShadow: '0px 4px 4px #dbddf0',
  borderRadius: '30px',
  border: 'none',
  cursor: 'pointer',
};

const textStyles = {
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '12px',
  color: '#525577',
  wordSpacing: '-1.5px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

export default function UploadButton(props) {
  const { status, src, children } = props;
  const { text, path, style } = UploadStatus[status ?? 'idle'];

  return (
    <button style={buttonStyles} type="button">
      <div style={{ ...textStyles, ...style }}>{children ?? text}</div>
      <Icon style={style} path={src ?? path}></Icon>
    </button>
  );
}
