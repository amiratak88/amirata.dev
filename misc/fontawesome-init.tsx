import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCheckCircle, faCopy, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(faCopy, faInfoCircle, faCheckCircle);
