import VectorSource from "ol/source/Vector";

/**
 * Searches an OpenLayers map instance for the layer whose source contains a specific feature
 * @param layers the array of layers configured in the map
 * @param feature the feature that should be contained in the layers source
 * @returns {*} the layer that contains the feature, or undefined
 */
export function getLayerForFeature(layers, feature) {
  return layers.find((layer) => {
    const source = layer.getSource && layer.getSource();
    const isVectorSource = source && source instanceof VectorSource;

    return isVectorSource && source.getFeatures().includes(feature);
  });
}