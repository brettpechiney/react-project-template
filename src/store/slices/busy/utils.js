/**
 * Determines if an action should block the middleware hand off.
 */
function actionShouldBlock(meta) {
  return !meta || !meta.async || !meta.blocking;
}

/**
 * Determines if an asynchronous action has finished.
 */
function actionFinished(type) {
  return type.includes('_SUCCESS') || type.includes('_FAILURE');
}

export { actionShouldBlock, actionFinished };
