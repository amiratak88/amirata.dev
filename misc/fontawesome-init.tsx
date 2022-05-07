import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { faCopy, faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCopy, faInfoCircle, faCheckCircle);
