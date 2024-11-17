function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', ''); // Strip './' from keys
    images[fileName] = r(key);
  });
  return images;
}

// Dynamically import all images in the assets folder
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default images;
