export const theme = Object.freeze({
  colors: {
    primary: '#F4C550',
    primaryActiv: '#FBE9BA',
    green: '#9FBAAE',
    greenActiv: '#CBDED3',
    blue: '#9FB7CE',
    blueActiv: '#BFD6EA',
    pink: '#E0A39A',
    pinkActiv: '#F2C0BD',
    peach: '#F0AA8D',
    peachActiv: '#F4C8BA',
    greenGrass: '#38CD3E',
    text: '#121417',
    textGray: '#8a8a89',
  },

  media: {
    tablet: '(min-width: 768px)',
    pc: '(min-width: 1440px)',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
