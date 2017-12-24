import attributeController from './controller/attr/reducer';
import shapeController from './controller/shape/reducer';
import textController from './controller/text/reducer';
import videoController from './controller/video/reducer';

export default function(state, action) {
  state = attributeController(state, action);
  state = shapeController(state, action);
  state = textController(state, action);
  state = videoController(state, action);
}
