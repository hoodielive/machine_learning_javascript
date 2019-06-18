// create the classifier with Mobilenet 
const classifier = ml5.imageClassifier('MobileNet', onModelReady); 

// Make a prediction 
let prediction = classifier.predict(img, gotResults); 

// Log the results 
function gotResults(err, results) {
  console.log(results); 
}; 

