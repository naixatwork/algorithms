const monitorPerformance = (fn, label) => {
    const start = performance.now();
    fn();
    const stop = performance.now();
    const inSeconds = (stop - start) / 1000;
    console.log(`${label} took ${inSeconds} seconds`);
}

export { monitorPerformance };