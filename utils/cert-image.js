import accp from '/public/svg/certifications/ACCP.svg';
import acda from '/public/svg/certifications/ACDA.svg';
import acsaa from '/public/svg/certifications/ACSAA.svg';
import secplus from '/public/svg/certifications/securityplus.svg';
import cc from '/public/svg/certifications/ISC2CC.svg';


export const certificationsImage = (cert) => {
  const certID = cert.toLowerCase();
  switch (certID) {
    case 'aws certified cloud practitioner':
      return accp;
    case 'aws certified developer associate':
      return acda;
    case 'aws certified solutions architect associate':
      return acsaa;
    case 'comptia security+':
      return secplus;
    case 'certified in cybersecurity':
        return cc;
    default:
      break;
  }
}
