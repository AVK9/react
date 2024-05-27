export const theme = Object.freeze({
  colors: {
    button: '#e44848',
    main: '#101828',
    inputs: '#f7f7f7',
    blockFeatures: '#f2f4f7',
    rating: '#ffc531',
    text: '#475467',
    mainBackground: ['linear-gradient(to top, #abbaab, #fff)'],
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
  spacing: (value) => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
