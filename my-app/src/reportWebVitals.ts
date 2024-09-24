// Comment out or remove this line
// import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Comment out or remove the import('web-vitals') call
    // import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    //   getCLS(onPerfEntry);
    //   getFID(onPerfEntry);
    //   getFCP(onPerfEntry);
    //   getLCP(onPerfEntry);
    //   getTTFB(onPerfEntry);
    // });
  }
};

export default reportWebVitals;
