import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// free
// import {} from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-brands-svg-icons';

// pro
// import {} from '@fortawesome/pro-duotone-svg-icons';
import { faInfoCircle, faCheckCircle } from '@fortawesome/pro-light-svg-icons';
// import {} from '@fortawesome/pro-regular-svg-icons';
import { faCopy } from '@fortawesome/pro-solid-svg-icons';


library.add(faCopy, faInfoCircle, faCheckCircle);
