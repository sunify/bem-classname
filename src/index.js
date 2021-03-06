import applyMods from './applyMods';
import isMods from './isMods';

function bem(block, element, mods = []) {
  return applyMods(`${block}__${element}`, mods);
}

function bm(block, mods = []) {
  return applyMods(block, mods);
}

export default function b_(...args) {
  if(args.length === 0) {
    return '';
  } else if(args.length === 1) {
    return args[0];
  } else if(args.length === 2 && isMods(args[1])) {
    return bm(...args);
  } else {
    return bem(...args);
  }
}
