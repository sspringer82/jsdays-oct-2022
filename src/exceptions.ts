try {
  throw new Error('whoops');
} catch (error) {
  console.error(error);
} finally {
  console.log('cleanup');
}
