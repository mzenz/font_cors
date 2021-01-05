self.addEventListener('fetch', (event) => {
  console.debug('=============================================');
  console.debug('Service worker fetch request:');
  console.debug(event.request);
  console.debug('URL:', event.request.url);
  console.debug('DESTINATION:', event.request.destination);
  console.debug('MODE:', event.request.mode);
});
