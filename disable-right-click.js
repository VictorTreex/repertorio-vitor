// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
  return false;
});

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
  return false;
});

// Disable copy shortcuts
document.addEventListener('keydown', function(e) {
  // Disable Ctrl+C, Ctrl+X, Ctrl+U (view source)
  if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'u')) {
    e.preventDefault();
    return false;
  }
  // Disable F12 (developer tools)
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
  // Disable Ctrl+Shift+I (developer tools)
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    return false;
  }
  // Disable Ctrl+Shift+J (console)
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    return false;
  }
});

// Disable view source via right-click
document.addEventListener('mousedown', function(e) {
  if (e.button === 2) { // Right click
    e.preventDefault();
    return false;
  }
});
