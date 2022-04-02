module.exports = {
  '*.{jsx,tsx}': [
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,scss,html,md}': ['prettier --write'],
};
