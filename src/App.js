import UploadButton from './components/UploadButton.js';

const containerStyles = {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '20px',
};

export default function App() {
  return (
    <div style={containerStyles}>
      <UploadButton status="idle"></UploadButton>
      <UploadButton status="pending"></UploadButton>
      <UploadButton status="resolved"></UploadButton>
      <UploadButton status="rejected"></UploadButton>
      <UploadButton status="disabled"></UploadButton>
      <UploadButton></UploadButton>
      <UploadButton src="./assets/icons/type=check-mark.svg">Text</UploadButton>
    </div>
  );
}
