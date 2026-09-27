/* All android apis that can used for web app developing
you can use it as <button onclick="getvalue();">Get Value</button> in your html file*/
function getvalue(){
AndroidAPI.showToast('Hello!');
}
function getvalue(){
AndroidAPI.vibrate(300);
}
function getvalue(){
AndroidAPI.setTorch(true);
}
function getvalue(){
AndroidAPI.showNotification('Title', 'Message');
}
function getvalue(){
AndroidAPI.scheduleNotification('alarm1', 'Reminder', 'Content', 5000, 0);
}
function getvalue(){
AndroidAPI.cancelScheduledNotification('alarm1');
}
function getvalue(){
AndroidAPI.getLocation('loc1');
}
function getvalue(){
AndroidAPI.startLocationUpdates('locLive');
}
function getvalue(){
AndroidAPI.stopLocationUpdates();
}
function getvalue(){
AndroidAPI.capturePhoto('cam1');
}
function getvalue(){
AndroidAPI.startCameraPreview();
}
function getvalue(){
AndroidAPI.stopCameraPreview();
}
function getvalue(){
AndroidAPI.startAudioRecording('rec.m4a');
}
function getvalue(){
AndroidAPI.stopAudioRecording('mic1')
}
function getvalue(){
AndroidAPI.pickFile('*/*', 'pick1');
}
function getvalue(){
AndroidAPI.writeFile('notes.txt', 'Content', 'text/plain', 'write1');
}
function getvalue(){
AndroidAPI.copyToClipboard('copied text');
}
function getvalue(){
var clipboardText = AndroidAPI.pasteFromClipboard();
}
function getvalue(){
AndroidAPI.shareText('Share text');
}
function getvalue(){
AndroidAPI.saveToGallery('image.png', base64String, 'gal1');
}