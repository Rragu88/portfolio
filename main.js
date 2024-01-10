import './styles.scss'
import initScrollReveal from "/public/scripts/scrollReveal.js";
import initTiltEffect from "/public/scripts/tiltAnimation.js";
import { targetElements, defaultProps } from "/public/data/scrollRevealConfig.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
