const DEBUG_KEY = 'debug';

export default (alt, storage, storageName) => {
  try {
    alt.bootstrap(storage.get(storageName));
  }
  catch (e) {
    console.log('Failed to bootstrap storage data: ', e);
  }

  if (!storage.get(DEBUG_KEY)) {
    alt.FinalStore.listen(makeSnapshot);
  }

  function makeSnapshot() {
    storage.set(storageName, alt.takeSnapshot());
  }
}
