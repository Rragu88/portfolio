import './styles.scss'
import initScrollReveal from "/src/scripts/scrollReveal.js";
import initTiltEffect from "/src/scripts/tiltAnimation.js";
import { targetElements, defaultProps } from "/src/data/scrollRevealConfig.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
